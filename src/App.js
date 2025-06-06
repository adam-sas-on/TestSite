import React, { useEffect, useRef, useState } from "react";
import ImageSwitch from "./Components/ImageSwitch";


function App(){
	const [messageNo, setMessageNo] = useState(0);
	const headRef = useRef(null);
	const cardRef = useRef(null);

	useEffect(() => {
		document.title = document.location.host;

		let numb = Math.random();
		if(numb >= 0.5)
			setMessageNo(1);

		document.addEventListener('visibilitychange', toggleVisibility, false);
	}, []);

	useEffect(()=>{
			setTimeout(addHeadVisibility, 100);
	}, [headRef]);
	useEffect(()=>{
			setTimeout(addCardVisibility, 600);
	}, [cardRef]);

	const addHeadVisibility = ()=>{
		if(headRef.current){
			headRef.current.classList.add("visible");
		}
	};
	const removeHeadVisibility = ()=>{
		if(headRef.current){
			headRef.current.classList.remove("visible");
		}
	};
	const addCardVisibility = function(){
		if(cardRef.current)
			cardRef.current.classList.add("visible");
	};
	const removeCardVisibility = function(){
		if(cardRef.current){
			cardRef.current.classList.remove("visible");
		}
	};

	function toggleVisibility(){
		if(document.hidden){
			removeHeadVisibility();
			removeCardVisibility();
		} else {
			setTimeout(addHeadVisibility, 50);
			setTimeout(addCardVisibility, 600);
		}
	}


	return (
		<div className="section">{ messageNo < 1 ?
			<div>
				<div ref={headRef} className="head reveal">Hey there - this domain is parked.
					<ImageSwitch />
				</div>
				<div ref={cardRef} className="card">
					<div className="p">You might occasionally find frontend demos or prototypes here while things are being tested.</div>
				No live service is currently associated with this domain.
				</div>
			</div> : <div>
				<div ref={headRef} className="head reveal">This is a parked domain {document.location.host}
					<ImageSwitch />
				</div>
				<div ref={cardRef} className="card">
					<div className="p">Occasionally used for testing frontend prototypes.</div>
				No official website or service is currently available.
				</div>
			</div> }
		</div>
	);
}

export default App;

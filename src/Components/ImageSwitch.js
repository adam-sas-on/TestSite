import React, {useEffect, useRef, useState} from "react";


function ImageSwitch(){
	const [imageNo, setImageNo] = useState(0);
	const imgRef = useRef(null);

	useEffect(() => {
		document.addEventListener("visibilitychange", switchImage, false);
		return ()=>{
			document.removeEventListener("visibilitychange", switchImage);
		}
	}, []);

	const switchImage=()=>{
		if(!document.hidden){
			setImageNo(prev => (prev === 1 ? 0 : 1));
		}
	};

	const imageSrc = "static/images/" + ( imageNo === 0 ? "cld_cloud_computer_network.svg" : "cdn_globe_locations.svg" );


	return (
		<img ref={ imgRef } src={ imageSrc } className="text-style" alt="Computer network" />
	);
}

export default ImageSwitch;

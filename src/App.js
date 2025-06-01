import React, { useEffect } from "react";


function App(){

	useEffect(() => {
		document.title = document.location.host;
	}, []);

	return (
		<div className="section">{ document.location.host }</div>
	);
}

export default App;

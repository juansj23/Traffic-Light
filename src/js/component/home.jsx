import React, { useState } from "react";

const Home = () => {
	const[selectedColor,setSelectedColor] = useState ("");
	return (
		<div className="traffic-ligth text-center">
			<div className="top"></div>
			<div className="container">
			<div onClick={()=>setSelectedColor("red")} className={"circle red "+ ((selectedColor === "red") ? "ligth":"")}></div>
			<div onClick={()=>setSelectedColor("yellow")} className={"circle yellow "+ ((selectedColor === "yellow") ? "ligth":"")}></div>
			<div onClick={()=>setSelectedColor("green")} className={"circle green "+ ((selectedColor === "green") ? "ligth":"")}></div>
			</div>
		</div>
	);
};

export default Home;

import React, { useState } from "react";

const Home = () => {
	const[color,setColor] = useState ("");
	return (
		<div className="traffic-ligth text-center">
			<div className="top"></div>
			<div className="container">
			<div onClick={()=>setColor("red")} className={"circle red "+ ((color === "red") ? "ligth":"")}></div>
			<div onClick={()=>setColor("yellow")} className={"circle yellow "+ ((color === "yellow") ? "ligth":"")}></div>
			<div onClick={()=>setColor("green")} className={"circle green "+ ((color === "green") ? "ligth":"")}></div>
			</div>
		</div>
	);
};

export default Home;

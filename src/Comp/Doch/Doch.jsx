
import {motion} from "framer-motion"
import Custom from "../Custom"
import { useEffect } from "react"
import "./style.css"
export default function Doch(){

	const title=["D","O","C","H"]

	useEffect(()=>{
		const handleWheel = (event) => {
			if (event.deltaY !== 0) {
			  event.preventDefault();
			  window.scrollBy({
				left: event.deltaY * 5,
				behavior:"smooth",
			  });
			}
		};

		document.addEventListener("wheel", handleWheel);

    return () => {
      // Cleanup: Remove the event listener when the component unmounts
      document.removeEventListener("wheel", handleWheel);
    };


	},[]);
	return(	
		<motion.div
		id="main-container-doch"
		>
			<motion.div 
			id="text"
			// initial={{
			// 	scale:0.5,
			// 	opacit:0
			// }}
			// transition={{
			// 	type:"tween",
			// 	ease:"easeOut",
			// 	duration:0.19
			// }}
			// animate={{
			// 	scale:1,
            //     opacity:1
			// }}
			>
				{title.map((letter,index)=>{
					return(
						<motion.div 
						key={index}
						initial={{
							y:500*Math.pow(-1,index+1)

						}}
						tranition={{
							delay:0.2,
							type:"tween",
							ease:"easeInOut",
							duration:0.58
						}}
						animate={{
							y:0
						}}>{letter}</motion.div>
					)
				})}
			</motion.div>
		<Custom></Custom>
			
		</motion.div>
	)
}
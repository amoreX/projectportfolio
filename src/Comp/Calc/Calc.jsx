
import {motion} from "framer-motion"
import Custom from "../Custom"
import { useEffect } from "react"
import "./Calc.css"
export default function Calc(){
	const propstosend={pic1:"/Assets/calc1.png",pic2:"/Assets/calc2.png",about:"About Catculator ",desc:"Catculator is a fun calculator with satisfying click sounds  and a cute eye pleasing UI.",vid:"/Assets/calc.mp4",homielist:["Sass","Css","React","Js"] ,bgcolor:"#4b754d"};


	const title=["C","A","L","C","U","L","A","T","O","R"]
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
		id="main-container-calc"
		>
			<motion.div 
			id="text"
			>
				<div
				id="text-cover-original">
				<motion.div 
				id="text-cover"
				initial={{}}
				transition={{type:"tween",delay:0.2,duration:0.38,ease:"easeInOut"}}
				animate={{x:1500}}></motion.div>

				</div>
				<motion.div
				id="text-body">
					{title.map((letter,index)=>{
						return(
							<motion.div
							initial={{scale:0.6}}
							transition={{type:"tween",duration:0.38,delay:0.05+index*0.08}}
							animate={{scale:1}}
							>
								{letter}
							</motion.div>
						)
					})}
				</motion.div>
			</motion.div>
		<Custom props={propstosend}></Custom>
			
		</motion.div>
	)
}
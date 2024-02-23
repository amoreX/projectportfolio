
import {motion} from "framer-motion"
import Custom from "../Custom"
import { useEffect } from "react"
import "./Style.css"
export default function Wpm(){
	const propstosend={pic1:"/Assets/wpm1.png",pic2:"/Assets/wpm2.png",about:"About WPM ",desc:"WPM is a typing speedo-meter helping users understand their typing speed and it comes pre-built with 3 unique themes .",vid:"/Assets/wpmvid.mp4",homielist:["Sass","Css","React","Js"] ,bgcolor:"#6243a0"};

	const title=["W","P","M"]
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
		id="main-container-wpm"
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
							transition={{type:"tween",duration:0.38,delay:0.05+index*0.1}}
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
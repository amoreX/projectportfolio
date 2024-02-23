
import {motion} from "framer-motion"
import Custom from "../Custom"
import { useEffect } from "react"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import "./style.css"
export default function Doch(){
	const propstosend={pic1:"/Assets/doch1.png",pic2:"/Assets/doch2.png",about:"About DOCH ",desc:"                            Doch is a specimen of UI design that helps in gathering latest happenings of the world around us.",vid:"/Assets/dochvid.mp4",homielist:["Sass","Css","Html","Ejs","NodeJs","Express","Js"] ,bgcolor:"#11212a",link:"https://newslite.onrender.com"};
	// const title=["G","e","t","I","t","D","o","n","e"]
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
		<ReactLenis options={{orientation:"horizontal"}} root>
		<motion.div
		id="main-container-doch"
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
							key={index}
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
		</ReactLenis>
	)
}

import {motion} from "framer-motion"
import Custom from "../Custom"
import { useEffect } from "react"
import "./Style.css"
export default function Git(){
	const propstosend={pic1:"/Assets/git1.png",pic2:"/Assets/git2.png",about:"About GetiItDone ",desc:"Get It Done is a user-authenticated task manager helping users keep track of their task and it comes prebuilt with satisfying themes.",vid:"/Assets/gitvid.mp4",homielist:["Sass","Css","NextJs","MongoDB","Js"] ,bgcolor:"#b18e83"};
	const title=["G","e","t","I","t","D","o","n","e"]
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
		id="main-container-git"
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
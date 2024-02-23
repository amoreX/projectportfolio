
import {motion} from "framer-motion"
import Custom from "../Custom"
import "../custom.css"

import { useEffect } from "react"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import "./Calc.css"
export default function Calc(){
	const propstosend={pic1:"/Assets/calc1.png",pic2:"/Assets/calc2.png",about:"About Catculator ",desc:"Catculator is a fun calculator with satisfying click sounds  and a cute eye pleasing UI.",vid:"/Assets/calc.mp4",homielist:["Sass","Css","React","Js"] ,bgcolor:"#4b754d",link:"https://simple-calculator-tau-sage.vercel.app"};


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
	const handlecross=()=>{
        // navigate("/");
        history.back();
    }
	const cross=(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 5L5 19M5 5L9.5 9.5M12 12L19 19"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        );
	return(	
		<ReactLenis options={{orientation:"horizontal"}} root>
		<motion.div id="back" onClick={()=>{handlecross()}} initial={{y:-200}} animate={{y:0}} transition={{type:"tween",ease:"easeInOut"}} >
                        {cross}
                </motion.div>
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
		</ReactLenis>
	)
}
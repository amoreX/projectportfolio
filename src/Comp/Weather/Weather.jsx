
import {motion} from "framer-motion"
import Custom from "../Custom"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useEffect } from "react"
import "../custom.css"
import "./Style.css"
export default function Weather(){
	const propstosend={pic1:"/Assets/weather1.png",pic2:"/Assets/weather2.png",about:"About Weather ",desc:"Weather is a site to give a detailed review of the weather of the user's location or any other location as per the user's choice in an impressive UI.",vid:"/Assets/weathervid.mp4",homielist:["Sass","Css","React","Ejs","NodeJs","Express","Js"] ,bgcolor:"#ae3a63",link:"https://weather-app-taupe-sigma.vercel.app"};
	const title=["W","E","A","T","H","E","R"]

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
		id="main-container-weather"
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
				animate={{x:3500}}></motion.div>

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
		</ReactLenis>
	)
}

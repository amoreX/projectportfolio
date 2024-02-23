
import {motion} from "framer-motion"
import "./Style.css"
export default function Me(){

	const handleclick=()=>{
		window.open("https://github.com/amoreX","_blank");
	};

	return(	
		<motion.div
		id="main-container-me"
		>
			<div id="header">
				<motion.div
				id="header-cover"
				initial={{x:0}}
				animate={{x:200}}
				transition={{
					type:"tween",
					ease:"easeInOut",
					duration:0.56,
					delay:0.2
				}}>
				


				</motion.div>
				<motion.div
				id="header-text"
				initial={{y:30}}
				animate={{y:0}}
				transition={{
					type:"tween",
					ease:"easeInOut",
					duration:0.36,
					delay:0.2
				}}>
					About Me:
				</motion.div>
			</div>
			<div id="body">
				<motion.div
				id="body-cover"
				initial={{x:0}}
				animate={{x:200}}
				transition={{
					type:"tween",
					ease:"easeInOut",
					duration:0.56,
					delay:0.2
				}}>
				


				</motion.div>
				<motion.div
				id="body-text"
				initial={{y:30}}
				animate={{y:0}}
				transition={{
					type:"tween",
					ease:"easeInOut",
					duration:0.36,
					delay:0.2
				}}>
					I enjoy making random websites and playing ukelele.
				</motion.div>
			</div>
			<motion.div
			id="magik"
			onClick={()=>{handleclick()}}>
				(click me to know more) 
			</motion.div>
			
			
		</motion.div>
	)
}
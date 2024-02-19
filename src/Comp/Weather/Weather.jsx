
import {motion} from "framer-motion"
import "./Style.css"
export default function Weather(){
	return(	
		<motion.div
		id="main-container-weather"
		>
			<motion.div 
			id="text"
			initial={{
				scale:0.5,
				opacit:0
			}}
			transition={{
				type:"tween",
				ease:"easeOut",
				duration:0.19
			}}
			animate={{
				scale:1,
                opacity:1
			}}
			>
				Weather
			</motion.div>
		</motion.div>
	)
}
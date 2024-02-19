

import {motion} from "framer-motion"
import "./Calc.css"
export default function Calc(){
	return(
		<motion.div
		id="main-container-Calc"
		// style={{backgroundColor:"#6B5B7F"}}
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
				CALCULATOR
			</motion.div>
		</motion.div>
	)
}
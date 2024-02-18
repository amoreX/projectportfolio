// import "./Calc.css"
import {motion} from "framer-motion"
export default function Calc(){
	return(
		<motion.div
		id="main-container"
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
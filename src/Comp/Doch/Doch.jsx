
import {motion} from "framer-motion"
import "./style.css"
export default function Doch(){
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
				DOCH
			</motion.div>
		</motion.div>
	)
}

import {motion} from "framer-motion"
import "./Style.css"
export default function Wpm(){
	return(	
		<motion.div
		id="main-container-wpm"
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
				Wpm
			</motion.div>
		</motion.div>
	)
}
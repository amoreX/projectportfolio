
import {motion} from "framer-motion"
import "./Style.css"
export default function Git(){
	return(	
		<motion.div
		id="main-container-git"
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
				Git
			</motion.div>
		</motion.div>
	)
}

import {motion} from "framer-motion"
import { useEffect } from "react"
import "./Style.css"
export default function Me(){


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
		id="main-container-me"
		>
			
			
		</motion.div>
	)
}
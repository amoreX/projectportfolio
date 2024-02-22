import { useEffect,useRef } from 'react'
import {motion,useInView,useAnimation} from 'framer-motion'

export default function Custom(){

    const ref = useRef(null);
    const isInview = useInView(ref,{once:true});
    useEffect(()=>{
        console.log("it came");
    },[isInview]);


    const handleScroll=()=>{
        // console.log(window.scrollX);
        // console.log(window.innerWidth);
    };

    //put framer animate and initial in constraints and inside handleScroll just 
    //update those conditions based on to which point the user has scrolleld
    //watch the other nigga to learn how to update or start animation when
    //condition is met 


    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
    
        // Remove scroll event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return(
        <motion.div
        ref={ref}
        id="custom"
        >
            <div id="page-1">
                page1
            </div>
            <div id="page-2">
                page2
            </div>
            <div id="page-3">
                page3
            </div>
        </motion.div>
    )
}
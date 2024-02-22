import { useEffect,useRef } from 'react'
import {motion,useInView,useAnimation} from 'framer-motion'

export default function Custom(){



    return(
        <motion.div
        id="custom"
        >
            <div id="page-1">
                <div id="text-div">
                    <div id="header">
                        <motion.div 
                            id="header-cover"
                        variants={{
                            hidden:{x:0},
                            visible:{x:300}
                        }}
                        transition={{type:"tween",duration:0.56,delay:0.1,ease:"easeInOut"}}
                        initial="hidden"
                        whileInView="visible">
                        </motion.div>
                        <motion.div 
                        id="header-text"
                        variants={{
                            hidden:{y:25,opacity:0},
                            visible:{y:0,opacity:1}
                        }}
                        transition={{type:"tween",duration:0.56,delay:0.1,ease:"easeInOut"}}
                        initial="hidden"
                        whileInView="visible"
                        >
                        About DOCH</motion.div>
                    </div>
                    <div id="body">
                        <motion.div
                        id="body-cover"
                            variants={{
                            hidden:{x:0},
                            visible:{x:300}
                        }}
                        transition={{type:"tween",duration:0.56,delay:0.38,ease:"easeInOut"}}
                        initial="hidden"
                        whileInView="visible">
                        </motion.div>
                        <motion.div
                        id="body-text"
                        variants={{
                            hidden:{y:67,opacity:0},
                            visible:{y:0,opacity:1}
                        }}
                        transition={{type:"tween",duration:0.56,delay:0.65,ease:"easeInOut"}}
                        initial="hidden"
                        whileInView="visible">
                            Doch is a specimen of UI design that helps in gathering latest happenings of the world around us.
                        </motion.div>

                    </div>
                </div>
                <div id="pictures">
                        
                </div>
            </div>
            <div id="page-2">
                page2
            </div>
        </motion.div>
    )
}
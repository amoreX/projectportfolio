import {motion} from 'framer-motion'

export default function Custom(){

    const li=["sass","css","html","ejs","nodejs","express","js"];

    return(
        <motion.div
        id="custom"
        >
            <div id="page-1">
                <div id="pictures">
                    <motion.div
                    variants={{
                        hidden:{top:"-60%"},
                        visible:{top:"5%"}
                    }}
                    transition={{type:"tween",duration:0.56,delay:0.1,ease:"easeInOut"}}
                    initial="hidden"
                    whileInView="visible"
                    id="pic-1"
                    >
                        <img  src="/Assets/doch1.png" alt="doch" ></img>
                    </motion.div>
                    <motion.div
                    variants={{
                        hidden:{top:"100%"},
                        visible:{top:"45%"}
                    }}
                    transition={{type:"tween",duration:0.56,delay:0.1,ease:"easeInOut"}}
                    initial="hidden"
                    whileInView="visible"
                    id="pic-2"
                    >
                        <img  src="/Assets/doch2.png" alt="doch" ></img>
                    </motion.div>

                </div>
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
            </div>
            <div id="page-2">

                <motion.div
                id="video"
                variants={{
                    hidden:{top:"-70%",opacity:0},
                    visible:{top:"10%",opacity:1},
                }}
                transition={{type:"tween",duration:0.56,delay:0.65,ease:"easeInOut"}}
                initial="hidden"
                whileInView="visible"
                >
                     <video   autoPlay loop muted>
                        <source src="/Assets/dochvid.mp4" type="video/mp4" />
                    </video>
                </motion.div>

                <div id="page2-text">

                    <div id="header">

                        <motion.div 
                            id="header-cover"
                        variants={{
                            hidden:{x:0},
                            visible:{x:300}
                        }}
                        transition={{type:"tween",duration:0.56,delay:0.2,ease:"easeInOut"}}
                        initial="hidden"
                        whileInView="visible">
                        </motion.div>

                        <motion.div 
                        id="header-text"
                        variants={{
                            hidden:{y:25,opacity:0},
                            visible:{y:0,opacity:1}
                        }}
                        transition={{type:"tween",duration:0.56,delay:0.2,ease:"easeInOut"}}
                        initial="hidden"
                        whileInView="visible"
                        >
                        My Homies </motion.div>

                    </div>

                    
                    <div id="text">
                        {li.map((language,index)=>{
                            return(
                                <div id="each-lang">
                                    <motion.div
                                    id="lang-cover"
                                    variants={{
                                        hidden:{x:0},
                                        visible:{x:300}
                                    }}
                                    transition={{type:"tween",duration:0.56,delay:0.2+index*0.15,ease:"easeInOut"}}
                                    initial="hidden"
                                    whileInView="visible"
                                    style={{width:`${language.length*17}px`}}>

                                    </motion.div>
                                    <motion.div
                                    id="lang-text"
                                    variants={{
                                        hidden:{y:30,opacity:0},
                                        visible:{y:0,opacity:1}
                                    }}
                                    transition={{type:"tween",duration:0.56,delay:0.2+index*0.15,ease:"easeInOut"}}
                                    initial="hidden"
                                    whileInView="visible"
                                    >
                                        {language}
                                    </motion.div>
                                </div>
                            )
                        })}
                    </div>
                   

                </div>
            </div>
        </motion.div>
    )
}
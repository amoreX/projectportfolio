import {motion} from 'framer-motion'
import { useNavigate } from "react-router-dom";

export default function Custom(props){

    const navigate= useNavigate();

    // const li=["sass","css","html","ejs","nodejs","express","js"];
    // console.log(props.props.pic1);
    const cross=(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 5L5 19M5 5L9.5 9.5M12 12L19 19"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        );
    const handlecross=()=>{
        // navigate("/");
        history.back();
    }
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
                    transition={{type:"tween",duration:0.36,delay:0.1,ease:"easeInOut"}}
                    initial="hidden"
                    whileInView="visible"
                    id="pic-1"
                    >
                        <img  src={props.props.pic1} alt="doch" ></img>
                    </motion.div>
                    <motion.div
                    variants={{
                        hidden:{top:"100%"},
                        visible:{top:"45%"}
                    }}
                    transition={{type:"tween",duration:0.36,delay:0.1,ease:"easeInOut"}}
                    initial="hidden"
                    whileInView="visible"
                    id="pic-2"
                    >
                        <img  src={props.props.pic2} alt="doch" ></img>
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
                        style={{backgroundColor:props.props.bgcolor}}
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
                        {props.props.about}</motion.div>
                    </div>
                    <div id="body">
                        <motion.div
                        id="body-cover"
                            variants={{
                            hidden:{x:0},
                            visible:{x:300}
                        }}
                        transition={{type:"tween",duration:0.56,delay:0.38,ease:"easeInOut"}}
                        style={{backgroundColor:props.props.bgcolor}}
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
                            {props.props.desc}
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
                        <source src={props.props.vid} type="video/mp4" />
                    </video>
                </motion.div>

                <div id="page2-text">

                    <div id="header">

                        <motion.div 
                            id="header-cover"
                        variants={{
                            hidden:{x:0},
                            visible:{x:300,
                            visibility:"hidden"}
                        }}
                        style={{backgroundColor:props.props.bgcolor}}
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
                        {props.props.homielist.map((language,index)=>{
                            return(
                                <div id="each-lang">
                                    <motion.div
                                    id="lang-cover"
                                    variants={{
                                        hidden:{x:0},
                                        visible:{x:400}
                                    }}
                                    transition={{type:"tween",duration:0.56,delay:0.2+index*0.15,ease:"easeInOut"}}
                                    initial="hidden"
                                    whileInView="visible"
                                    style={{width:`${language.length*17}px`,backgroundColor:props.props.bgcolor}}>

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
                <div id="back" onClick={()=>{handlecross()}}>
                        {cross}
                </div>
            </div>
        </motion.div>
    )
}
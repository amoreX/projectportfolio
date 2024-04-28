import {motion} from 'framer-motion'
import "./custom.css"
export default function Custom(props){



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

        const git=(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60px"
              height="60px"
              viewBox="0 0 24 24"
            >
              <title>github</title>
              <rect width={40} height={40} fill="none" />
              <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
            </svg>
            );
    const handlecross=()=>{
        // navigate("/");
        history.back();
    }
    const gitclick=()=>{
        window.open(props.props.link, '_blank');
    };
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
                            visible:{x:1000}
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
                            visible:{x:3000}
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
                initial="visible"
                whileInView="visible"
                >
                     <motion.video  
                     variants={{
                        hidden:{top:"-70%",opacity:0},
                        visible:{top:"10%",opacity:1},
                    }}
                    transition={{type:"tween",duration:0.56,delay:0.65,ease:"easeInOut"}}
                    initial="hidden"
                    whileInView="visible"
                     style={{minWidth:"200px",minHeight:"200px"}} autoPlay loop muted>
                        <source src={props.props.vid} type="video/mp4" />
                    </motion.video>
                </motion.div>

                <div id="page2-text">

                    <div id="header">

                        <motion.div 
                            id="header-cover"
                        variants={{
                            hidden:{x:0,opacity:1},
                            visible:{x:800}
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
                                <div key={index}id="each-lang">
                                    {/* <motion.div
                                    key={index}
                                    id="lang-cover"
                                    variants={{
                                        hidden:{x:0},
                                        visible:{x:400}
                                    }}
                                    transition={{type:"tween",duration:0.56,delay:0.2+index*0.15,ease:"easeInOut"}}
                                    initial="hidden"
                                    whileInView="visible"
                                    style={{width:`${language.length*17}px`,backgroundColor:props.props.bgcolor}}>

                                    </motion.div> */}
                                    <motion.div
                                    key={index}
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
                
                
                <div id="git"
                onClick={()=>{gitclick()}}>
                        {git}
                </div>
            </div>
            
        </motion.div>
    )
}

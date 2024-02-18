 
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing(){

    const navigate= useNavigate();
    const [number,setNumber]=useState(0);
    const [text,setText]=useState(false);
    
    const [style1, setStyles1] = useState({
        height: "0%",
        width: "0%",
        borderRadius: "0%",
        top: "0%",
        left: "0%"
    });
    const [style2, setStyles2] = useState({
        height: "0%",
        width: "0%",
        borderRadius: "0%",
        top: "0%",
        left: "0%"
    });
    const [style3, setStyles3] = useState({
        height: "0%",
        width: "0%",
        borderRadius: "0%",
        top: "0%",
        left: "0%"
    });
    const [style4, setStyles4] = useState({
        height: "0%",
        width: "0%",
        borderRadius: "0%",
        top: "0%",
        left: "0%"
    });
    const [style5, setStyles5] = useState({
        height: "0%",
        width: "0%",
        borderRadius: "0%",
        top: "0%",
        left: "0%"
    });
    const [style6, setStyles6] = useState({
        height: "0%",
        width: "0%",
        borderRadius: "0%",
        top: "0%",
        left: "0%"
    });

    const theme1=[["50%","50%","50%","50%","100%","30%"],["25%","40%","40%","25%","35%","15%"],["0px","0px","0px","0px","0px","0px"],["0%","50%","0%","50%","0%","70%"],["0%","0%","25%","40%","65%","85%"]]
    const theme2=[["50%","50%","50%","50%","100%","30%"],["25%","40%","40%","25%","35%","15%"],["20%","10%","10%","20%","10%","20%"],["0%","50%","0%","50%","0%","70%"],["0%","0%","25%","40%","65%","85%"]]
    const theme3=[["50%","50%","50%","50%","100%","30%"],["25%","40%","40%","25%","35%","15%"],["0px 0px 0px 60%","0px 50% 50% 0px","40%"," 0px 0px 0px 60%","0px 50% 0px 0px","50% 0px 0px 0px"],["0%","50%","0%","50%","0%","70%"],["0%","0%","25%","40%","65%","85%"]]
    const theme4=[["50%","75%","75%","15%","100%","30%"],["15%","15%","15%","15%","25%","15%"],["0px 0px 0px 0px","0px 0px 0px 0px","0px"," 0px 0px 0px 0px","0px 0px 0px 0px","0px 0px 0px 0px"],["0%","0%","25%","25%","0%","45%"],["0%","15%","30%","45%","60%","85%"]]
    const theme5=[["50%","75%","75%","15%","100%","30%"],["15%","15%","15%","15%","25%","15%"],["50%","50%","50%","50%","50%","50%"],["0%","0%","25%","25%","0%","45%"],["0%","15%","30%","45%","60%","85%"]]
    
    const height=[theme1[0],theme2[0],theme3[0],theme4[0],theme5[0]];
    const width=[theme1[1],theme2[1],theme3[1],theme4[1],theme5[1]];
    const borderradius=[theme1[2],theme2[2],theme3[2],theme4[2],theme5[2]];
    const top=[theme1[3],theme2[3],theme3[3],theme4[3],theme5[3]];
    const left=[theme1[4],theme2[4],theme3[4],theme4[4],theme5[4]];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNumber((prevNumber) => {
                let p;
                do {
                    p = Math.floor(Math.random() * 5);
                } while (p === prevNumber); 
                console.log(p);
                return p;
            });
        }, 3000);
    
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    
    useEffect(() => {
        setStyles1({
            height: height[number][0],
            width: width[number][0],
            borderRadius: borderradius[number][0],
            top: top[number][0],
            left: left[number][0],
        });
        setStyles2({
            height: height[number][1],
            width: width[number][1],
            borderRadius: borderradius[number][1],
            top: top[number][1],
            left: left[number][1],
        });
        setStyles3({
            height: height[number][2],
            width: width[number][2],
            borderRadius: borderradius[number][2],
            top: top[number][2],
            left: left[number][2],
        });
        setStyles4({
            height: height[number][3],
            width: width[number][3],
            borderRadius: borderradius[number][3],
            top: top[number][3],
            left: left[number][3],
        });
        setStyles5({
            height: height[number][4],
            width: width[number][4],
            borderRadius: borderradius[number][4],
            top: top[number][4],
            left: left[number][4],
        });
        setStyles6({
            height: height[number][5],
            width: width[number][5],
            borderRadius: borderradius[number][5],
            top: top[number][5],
            left: left[number][5],
        });
    }, [number]);
    
    const handleclick1=()=>{
        setStyles1({
            height:"500px",
            width:"1000px",
            scale:"2",
            zIndex:"4",
            color:"black"
        })
        setText(true);
        setTimeout(()=>{
            navigate("/Doch");

        },200);
    }
    const handleclick2=()=>{
        setText(true);
        setStyles2({
            height:"500px",
            width:"1000px",
            scale:"2",
            zIndex:"4"
        })
    }
    const handleclick3=()=>{
        setStyles3({
            height:"500px",
            width:"1000px",
            scale:"2",
            zIndex:"4"
        })
        setText(true);
    }

    const handleclick4=()=>{
        setText(true);
        setStyles4({
            height:"500px",
            width:"1000px",
            scale:"2",
            zIndex:"4"
        })
    }
    const handleclick5=()=>{
        setText(true);
        setStyles5({
            height:"500px",
            width:"1000px",
            scale:"2",
            zIndex:"4"
        })
    }
    const handleclick6=()=>{
        setText(true);
        setStyles6({
            height:"500px",
            width:"1000px",
            scale:"2",
            zIndex:"5",
        })
    }

    return(
        <div id="wrapper">
            <div id="shape1" style={style1} onClick={()=>{handleclick1()}}><div id="text" style={{fontSize:text==true?"0px":"300px"}}>Doch</div></div>
            <div id="shape2" style={style2} onClick={()=>{handleclick2()}}><div id="text" style={{fontSize:text==true?"0px":"300px"}}>Calculator</div></div>
            <div id="shape3" style={style3} onClick={()=>{handleclick3()}}><div id="text" style={{fontSize:text==true?"0px":"300px"}}>Weather</div></div>
            <div id="shape4" style={style4} onClick={()=>{handleclick4()}}><div id="text" style={{fontSize:text==true?"0px":"300px"}}>GIT</div></div>
            <div id="shape5" style={style5} onClick={()=>{handleclick5()}}><div id="text" style={{fontSize:text==true?"0px":"300px"}}>WPM</div></div>
            <div id="shape6" style={style6} onClick={()=>{handleclick6()}}><div id="text" style={{fontSize:text==true?"0px":"300px"}}>Me</div></div>
        </div>
    )
}
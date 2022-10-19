import React, { useState,useEffect } from 'react';
// import Home from '../pages/Home/Home';
import "./Lounge.css";
import 'particles.js'
import Home from '../../pages/Home/Home';

var timer;


function rethome(){
    return()=><Home/>
}
function Lounge({curr}){
    const [second,setsecond]=useState(0);
    const [minute,setminute]=useState(0);
    const [countm,setcountm]=useState("");
    const [counts,setcounts]=useState("");
    useEffect(()=>{
        timer= setInterval(()=>{
            setsecond(second+1);
            if(minute<9){
                setcountm("0");
            }
            else{
                setcountm("");
            }
            if(second<9){
                setcounts("0");
            }
            else{
                setcounts("");
            }
        if(second===59){
            setminute(minute+1);
           
            
            setsecond(0);
        }},1000)
     return()=>clearInterval(timer);   
    }
    );



    return(
        <div className='main'>
            
            {/* <img className='aninmateit' src="https://i.gifer.com/XVnx.gif"></img> */}
            <div className='box'>
            <h1 className='text hello glow g-col-12'>Hello There,</h1> 
            <div className='waitingText'>
            <h1 className='text wait g-col-4'>Wait till others arive....</h1>
            <h1 className='text wait g-col-4'>Quizz will start shortly</h1>
            </div>
            </div>
            <div className='cover'>

            <div className='timerspn'>
                
            </div>
            <h1 className='text timer'>{countm}{minute} :{counts}{second}</h1>
        </div>
        </div>
    );
}
export default Lounge;
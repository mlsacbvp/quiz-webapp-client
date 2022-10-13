import React, { useState,useEffect } from 'react';
// import Home from '../pages/Home/Home';
import "./Lounge.css";
import Home from '../pages/Home/Home';

var timer;
var count;
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
        <div>
    <div className="srol scroll scrollbar">
        <h1 className='msg msgTitle'>MESSAGES</h1>
        <hr></hr>
        <hr></hr>


 
        <h3 className='messegeBox'><p className='msg'>messages</p></h3>
        <h3 className='messegeBox'><p className='msg'>messages</p></h3>
        <h3 className='messegeBox'><p className='msg'>messages</p></h3>
        <h3 className='messegeBox'><p className='msg'>messages</p></h3>
        <h3 className='messegeBox'><p className='msg'>messages</p></h3>
        <h3 className='messegeBox'><p className='msg'>messages</p></h3>
        <h3 className='messegeBox'><p className='msg'>messages</p></h3>
        <h3 className='messegeBox'><p className='msg'>messages</p></h3>
        <h3 className='messegeBox'><p className='msg'>messages</p></h3>
        <h3 className='messegeBox'><p className='msg'>messages</p></h3>
        <h3 className='messegeBox'><p className='msg'>messages</p></h3>
        <h3 className='messegeBox'><p className='msg'>messages</p></h3>
        <h3 className='messegeBox'><p className='msg'>messages</p></h3>
        <h3 className='messegeBox'><p className='msg'>messages</p></h3>
        <h3 className='messegeBox'><p className='msg'>messages</p></h3>   
        <h3 className='messegeBox'><p className='msg'>messages</p></h3>   
        <h3 className='messegeBox'><p className='msg'>messages</p></h3>   
        <h3 className='messegeBox'><p className='msg'>messages</p></h3>   
        <h3 className='messegeBox'><p className='msg'>messages</p></h3> 
    </div>
        <form>
        <label>
          <input className='textbox' type="text" />
        </label>
        {/* <input type="submit" value="Submit" /> */}
      </form>  
            <h1 className='text hello glow'>Hello There,</h1> 
            <div className='waitingText'>
            <h1 className='text wait'>Wait till others arive....</h1>
            <h1 className='text wait'>Quizz will start shortly</h1>
            </div>
            <div className='cover'>

            <div className='timerspn'>
                
            </div>
            <h1 className='text timer'>{countm}{minute} :{counts}{second}</h1>

            {/* <button>HOME</button> */}
        </div></div>
    );
}
export default Lounge;
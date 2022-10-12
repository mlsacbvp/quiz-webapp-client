import React from "react";
import Individual from "./Individual";
import "./Runnerups.css";

function Runnerups() {
    return (<div>
        <div className="runner-box">
            <div className="runner-bottom">

        <Individual className="ranking-value" bg={"linear-gradient(to right, #00b4db, #0083b0)"} rank={"RANK"} name={"NAME"} score={"SCORE"}/>
            </div>
        <Individual rank={"4"} name={"akki"} score={"10"}/>
        <Individual rank={"5"} name={"aryan"} score={"10"}/>
        <Individual rank={"6"} name={"arya"} score={"10"}/>
        <Individual rank={"7"} name={"atul"} score={"10"}/>
        <Individual rank={"8"} name={"annu"} score={"10"}/>
        <Individual rank={"9"} name={"ankit"} score={"10"}/>
        <Individual rank={"10"} name={"goli"} score={"10"}/>

    </div>
    <div>
    <h2 className="congo">Congratulations !!! to all the Winners.</h2>
        </div>

    </div>);
}

export default Runnerups;
import React from "react";
import Quiztitle from "../../components/Quiztitle"
import Winners from "../../components/Winners"
import Runnerups from "../../components/Runnerups"
import "./Result.css";

function Result() {
    return (
        <div>
            <Quiztitle />
            <Winners />
            <Runnerups />
        </div>
    );
}

export default Result;
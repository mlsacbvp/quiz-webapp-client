import React from "react";
import "./Winners.css";

function Winners() {
    return (
        <div>
            <div className="ranks">
                <div className="position">
                    <div className="position3"><h1 className="division">3</h1></div>
                </div>
                <div className="position">
                    <div className="position1"><h1 className="division">1</h1></div>
                </div>
                <div className="position">
                    <div className="position2"><h1 className="division">2</h1></div>
                </div>
            </div>
            <h2 className="congo">Congratulations !!! to all the Winners.</h2>
        </div>
    );
}

export default Winners;
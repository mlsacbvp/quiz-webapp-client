import React from "react";
import "./Winners.css";

function Winners() {
    return (
        <div>
            <div className="ranks">
                <div className="position">
                    <div>
                        <div className="teamname"><h3>Participant Z</h3></div>
                        <div className="position3"><h1 className="division">3</h1></div>
                    </div>
                </div>
                <div className="position">
                    <div>
                        <div className="teamname"><h2>Participant X</h2></div>
                        <div className="position1"><h1 className="division">1</h1></div>
                    </div>
                </div>
                <div className="position">
                    <div>
                        <div className="teamname"><h3>Participant Y</h3></div>
                        <div className="position2"><h1 className="division">2</h1></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Winners;
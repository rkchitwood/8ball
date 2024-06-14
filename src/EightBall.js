import React, {useState} from 'react';
import defaultAnswers from "./answers.json";
import { choice } from "./random";
import "./EightBall.css"

function EightBall({ answers=defaultAnswers }) {
    const [ans, setAns] = useState({
        msg: "Think of a question",
        color: "black"
    })
    function handleClick() {
        setAns(choice(answers));
    }
    return(
        <div
            className='EightBall'
            onClick={handleClick}
            style={{ backgroundColor: ans.color }}
        >
            <b>{ans.msg}</b>

        </div>
    );
}

export default EightBall;
import { useState } from "react";
import CharacterCounter from "./characterCounter";
import './form.css';

function SentenceForm() {

    const [sentence, setSentence] = useState("");

    return (
        <>
            <form>
                <input 
                    id="sentence" 
                    type="text" 
                    placeholder="Type your sentence here" 
                    onChange={e => setSentence(e.target.value)}></input>
                <input id="counterButton" type="reset" value="Reset sentence" onClick={() => setSentence("")}/>
            </form>
            <CharacterCounter sentence={sentence}></CharacterCounter>
        </>
    );
}

export default SentenceForm;
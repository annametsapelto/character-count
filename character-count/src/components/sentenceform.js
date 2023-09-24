import { useState } from "react";
import CharacterCounter from "./characterCounter";

function SentenceForm() {

    const [sentence, setSentence] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    id="sentence" 
                    type="text" 
                    placeholder="Type your sentence here" 
                    onChange={e => setSentence(e.target.value)}></input>
                <input type="submit" value="Count characters"/>
            </form>
            <CharacterCounter sentence={sentence}></CharacterCounter>
        </>
    );
}

export default SentenceForm;
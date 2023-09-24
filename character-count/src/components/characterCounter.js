import { useState, useEffect } from "react";

function CharacterCounter({sentence}) {

    const [characterList, setCharacterList] = useState([]);
    useEffect(() => {

    }, sentence);

    return(
        <>
            <p>The sentence is: {sentence}</p>
            <p>It has the following characters:</p>
            <ul>

            </ul>
        </>
    )
}

export default CharacterCounter;
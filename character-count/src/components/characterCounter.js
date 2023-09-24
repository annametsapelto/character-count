import { useState, useEffect } from "react";

function CharacterCounter({sentence}) {

    const [characterList, setCharacterList] = useState([]);

    useEffect(() => {
        const charCount = {};

        for (let i = 0; i < sentence.length; i++) {
            const character = sentence.charAt(i);

            if(charCount[character]) {
                charCount[character]++;
            } else {
                charCount[character] = 1;
            }
        }
        const charList = Object.keys(charCount).map(char => ({
            char, count: charCount[char]
        }));
        setCharacterList(charList);
    }, [sentence]);

    return(
        <>
            <p>The sentence is: {sentence}</p>
            <p>It has the following characters:</p>
            <ul>
                { characterList.map((item) => (
                    <li key={item.char}>{item.char} {item.count}</li>
                ))}
            </ul>
        </>
    )
}

export default CharacterCounter;
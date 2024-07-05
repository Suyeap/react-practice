import {useState, useRef} from "react";

export default function Player() {
    const unknownName = 'unknown entity';
    const playerName = useRef();
    const [enteredPlayerName, setEnteredPlayerName] = useState(unknownName);

    function handleClick() {
        setEnteredPlayerName(playerName.current.value.length > 0 ? playerName.current.value : unknownName);
    }

    return (
        <section id="player">
            <h2>Welcome {enteredPlayerName}</h2>  {/* false이면 뒤의값 반환 */}
            <p>
                <input ref={playerName} type="text" />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}

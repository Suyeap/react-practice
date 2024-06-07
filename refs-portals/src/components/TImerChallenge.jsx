import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TImerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialog = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    // let timer;

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.showModal(); // 모달 open
        }, targetTime * 1000);
        setTimerStarted(true);
    }

    function handleStop() {
        // Refs 사용해서 진행중인 setTimeout 참조
        clearTimeout(timer.current);
    }

    return (
        <>
            <ResultModal ref={dialog} result="lost" targetTime={targetTime}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'TIME IS RUNNING...' : 'TIMER INACTIVE'}
                </p>
            </section>
        </>
    );
}
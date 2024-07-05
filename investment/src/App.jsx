import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import {useState} from "react";
import Results from "./components/Results.jsx";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const inputIsValid = userInput.duration > 0;

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue, // + : 문자열 변환 방지
            };
        });
    }

    return (
        <>
            <Header/>
            <UserInput userInput={userInput} onChange={handleChange}/>
            {!inputIsValid && <p className="center"> PLEASE ENTER A DURATION GREATER THAN ZERO.</p>}
            {inputIsValid && <Results input={userInput}/>}
        </>
    );
}

export default App;

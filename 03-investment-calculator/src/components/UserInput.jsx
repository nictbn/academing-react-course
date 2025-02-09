import { useState } from 'react';

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput((previousUserInput) => {
            return {
                ...previousUserInput,
                [inputIdentifier]: newValue
            }
        })
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label for="initial-investment">Initial Investment</label>
                    <input 
                        type="number" 
                        required 
                        name="initial-investment" 
                        onChange={(event) => handleChange("initialInvestment", event.target.value)}
                        value={userInput.initialInvestment} />
                </p>
                <p>
                    <label for="annual-investment">Annual Investment</label>
                    <input 
                        type="number" 
                        required 
                        name="annual-investment"
                        onChange={(event) => handleChange("annualInvestment", event.target.value)}
                        value={userInput.annualInvestment} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label for="expected-return">Expected Return</label>
                    <input 
                        type="number" 
                        required 
                        name="expected-return"
                        onChange={(event) => handleChange("expectedReturn", event.target.value)}
                        value={userInput.expectedReturn} />
                </p>
                <p>
                    <label for="duration">Duration</label>
                    <input 
                        type="number" 
                        required 
                        name="duration" 
                        onChange={(event) => handleChange("duration", event.target.value)}
                        value={userInput.duration} />
                </p>
            </div>
        </section>
    )
}
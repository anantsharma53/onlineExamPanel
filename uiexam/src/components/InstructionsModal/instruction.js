
import './instruction.css';
import React, { useState, useEffect } from 'react';
function Instruction({ setShowModleLoginPage }) {
    const [timer, setTimer] = useState(20); // 15 minutes in seconds
    const [timerExpired, setTimerExpired] = useState(false);
    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else {
            setTimerExpired(true);
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timer]);

    const startExam = () => {
        if (!timerExpired) {
            alert('Timer has not expired yet.');
        } else {
            setShowModleLoginPage(false);
        }
    };
    return (
        <div className="insmodalBackground">
            <div className="insmodalContainer">
                <div className="Insheader">
                    <h2 className="">Instructions</h2>
                    <p>&nbsp;&nbsp;&nbsp;(Read Instructions Carefully)</p>
                </div>

                <div className="instruction-content">
                    <div className="column">
                        <h2>Before You Begin:</h2>
                        <ol>
                            <li>Ensure that you have a stable internet connection.</li>
                            <li>Use a compatible web browser (e.g., Chrome, Firefox) for the best experience.</li>
                            <li>Close all unnecessary tabs and applications to avoid distractions.</li>
                        </ol>

                        <h2>Technical Requirements:</h2>
                        <ol>
                            <li>Make sure your device's volume is on and working correctly.</li>
                            <li>Test your audio and video settings before starting the exam.</li>
                        </ol>

                        <h2>Exam Rules:</h2>
                        <ol>
                            <li>This is a timed exam. The timer will start once you begin.</li>
                            <li>You are allowed [Specify the duration] to complete the exam.</li>
                            <li>Do not refresh the page or navigate away from the exam.</li>
                            <li>Any attempt to cheat or use unauthorized materials will result in disqualification.</li>
                        </ol>

                        <h2>Navigating the Exam:</h2>
                        <ol>
                            <li>Use the navigation buttons provided to move between questions (if applicable).</li>
                            <li>Save your answers frequently to avoid losing progress.</li>
                            <li>Pay attention to the question format (e.g., multiple choice, essay) and respond accordingly.</li>
                        </ol>
                    </div>
                    <div className="column">
                        <h2>Submission:</h2>
                        <ol>
                            <li>When you have completed all questions, click the "Submit" button.</li>
                            <li>Once submitted, you cannot return to the exam.</li>
                        </ol>

                        <h2>Technical Issues:</h2>
                        <ol>
                            <li>In case of technical difficulties, contact [Provide contact information] immediately.</li>
                            <li>A proctor or support staff will assist you with technical problems.</li>
                        </ol>

                        <h2>Note on Security:</h2>
                        <ol>
                            <li>Your activity may be monitored during the exam to ensure integrity.</li>
                            <li>Do not use any external resources unless explicitly allowed by the exam instructions.</li>
                        </ol>

                        <h2>Scoring:</h2>
                        <ol>
                            <li>Your exam will be scored, and results will be provided after the exam period.</li>
                            <li>The passing score is [Specify passing score]%.</li>
                        </ol>

                        <h2>Good Luck:</h2>
                        <p>We wish you the best of luck on your exam! Start when you are ready.</p>
                    </div>
                </div>
                <div className="timer-container">
                    {timerExpired ? (
                        <button className='exambutton' onClick={startExam}>
                            Start Exam
                        </button>
                    ) : (
                        <>
                            <p>Time Left: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Instruction;

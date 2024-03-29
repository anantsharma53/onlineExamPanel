import React, { useState, useEffect } from 'react';
import './question.css'


const QuestionComponent = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(null));
    const [timer, setTimer] = useState(3600); // 15 minutes in seconds
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
    const handleOptionChange = (optionIndex) => {
        const updatedOptions = [...selectedOptions];
        updatedOptions[currentQuestion] = optionIndex;
        setSelectedOptions(updatedOptions);
    };

    const handleNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
    };

    const handlePreviousQuestion = () => {
        setCurrentQuestion(currentQuestion - 1);
    };
    const handleMarkQuestion = () => {
        const updatedOptions = [...selectedOptions];
        updatedOptions[currentQuestion] = -1; // Assign -1 to indicate "marked for review"
        setSelectedOptions(updatedOptions);

        // Move to the next question if it's not the last one
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };
    const handleQuestionPaletteClick = (questionIndex) => {
        setCurrentQuestion(questionIndex);
    };

    return (
        <>
            <div className="sections">

                <div>
                    <h2>Attempt All Question No Negative Marks</h2>
                </div>
                {/* <div>Numerical Ability</div> */}
                <div>
                    <h2>Time Left: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}</h2>
                    {/* <button>Pause Test</button> */}
                </div>
            </div>
            <div className="question-section">
                <div className="question-container" style={{ width: '85%', height: '70vh' }}>

                    <div className="question-header">Question No {currentQuestion + 1}</div>
                    <hr />
                    <div className="question-description">
                        <p>
                            <strong>{questions[currentQuestion].question}</strong>
                        </p>

                    </div>

                    <div className="question-options">
                        {questions[currentQuestion].options.map((option, index) => (
                            <div key={index} style={{ display: 'flex' }}>
                                <label>{index + 1}&nbsp;&nbsp;</label>
                                <input
                                    type="radio"
                                    name="option"
                                    value={index}
                                    checked={selectedOptions[currentQuestion] === index}
                                    onChange={() => handleOptionChange(index)}
                                />
                                <label>{option}</label>
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: '10%', textAlign: 'center' }}>
                        <button disabled={currentQuestion === 0} onClick={handlePreviousQuestion}>
                            Previous
                        </button>
                        <button onClick={handleMarkQuestion}>
                            Mark for Review &amp; Next
                        </button>
                        <button onClick={() => handleOptionChange(null)}>Clear Response</button>
                        <button
                            disabled={currentQuestion === questions.length - 1}
                            onClick={handleNextQuestion}
                        >
                            Save &amp; Next
                        </button>
                    </div>
                </div>
                <div style={{ width: '2%' }}></div>
                <div style={{ width: '20%' }}>
                    <div className="oliveboard">
                        <div>
                            <img src="https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg" alt="Profile" />
                            <span>Applicant Name</span>
                        </div>

                    </div>


                    <div className="legend">
                        <div className="answered">
                            <span>Answered</span>
                        </div>
                        <div className="not-answered">
                            <span>Not Answered</span>
                        </div>
                        <div className="marked">
                            <span>Marked</span>
                        </div>

                        {/* <span>79 Not Visited</span> */}
                    </div>

                    <div >
                        {/* <div>
                            <span>Question Palette:</span>
                        </div> */}
                        <div className="question-palette">
                            <div className="button-grid">
                                {Array.from({ length: 100 }, (_, index) => (
                                    <button
                                        key={index}
                                        className={
                                            index < questions.length
                                                ? selectedOptions[index] === null
                                                    ? ''
                                                    : selectedOptions[index] === -1
                                                        ? 'marked'
                                                        : 'active'
                                                : 'disabled'
                                        }
                                        onClick={() => index < questions.length && handleQuestionPaletteClick(index)}
                                        disabled={index >= questions.length}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* <div>
                        <button>Question Paper</button>
                        <button>Instructions</button>
                    </div> */}

                    <div style={{ display: 'flex' }}>
                        <button style={{ width: '100%' }}>Profile</button>
                        <button style={{ width: '100%' }}>Submit</button>
                    </div>
                </div>
            </div></>
    );
};

export default QuestionComponent;

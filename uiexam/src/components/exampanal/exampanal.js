import Instruction from '../InstructionsModal/instruction';
import Navbar from '../navbar/navbar';
import './exampanal.css'
import { useState } from "react";
import QuestionComponent from '../../question/question';
function ExamPanal(){
    const questions = [
        {
          question: 'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose. ',
          options: ['Paris', 'London', 'Madrid', 'Berlin'],
        },
        {
          question: 'What is the largest planet in our solar system?',
          options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
        },
        // Add more questions here
      ];
    const [showmodleLoginPage, setShowModleLoginPage] = useState(true);
    return(
        <>
        <div className="examContainer">
            <Navbar />
            {showmodleLoginPage && <Instruction setShowModleLoginPage={setShowModleLoginPage} />} 
            {showmodleLoginPage?<></>:
            <QuestionComponent questions={questions} />}
          
        </div>
        </>
    );
}
export default ExamPanal;
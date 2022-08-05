import {useState, useEffect, useMemo} from "react";
import Word from "./Word";
import Keyboard from "./Keyboard";

function App({answers, maxTries}) {
  const [tries, setTries] = useState([]);
  const [triedLetters, setTriedLetters] = useState([]);
  const [currentTry, setCurrentTry] = useState("");

  useEffect(() => {
    function callback(event) {
      if (event.key.match(/^[a-z]$/)) {
        setCurrentTry(currentTry => (currentTry + event.key).slice(0,5));
      } else if (event.keyCode === 8) { // backspace
        setCurrentTry(currentTry => currentTry.slice(0, -1));
      } else if (event.keyCode === 13 && currentTry.length === 5) { // enter
        setTries(tries => [...tries, currentTry]);
        setTriedLetters(triedLetters => [...triedLetters, ...currentTry.split("").filter(letter => !triedLetters.includes(letter))]);
        setCurrentTry("");
      }
    }

    document.addEventListener("keyup", callback);

    return () => document.removeEventListener("keyup", callback);
  }, [currentTry]);

  const letterStates = useMemo(() => {
    const correct = [[], [], [], []];
    const misplaced = [[], [], [], []];
    const found = [];

    tries.forEach(leTry => {
      const letters = leTry.split("");

      answers.forEach((answer, answerIndex) => {
        if (leTry !== answer) {
          letters.forEach((letter, letterIndex) => {
            if (answer.includes(letter)) {
              if (answer[letterIndex] === letter && !correct[answerIndex].includes(letter)) {
                correct[answerIndex].push(letter);
              } else if (!misplaced[answerIndex].includes(letter)) {
                misplaced[answerIndex].push(letter);
              }

              if (!found.includes(letter)) {
                found.push(letter);
              }
            }
          });
        }
      });
    });

    return {correct, misplaced, absent: triedLetters.filter(letter => !found.includes(letter))};
  }, [tries, triedLetters, answers]);

  return (
    <div className="relative bg-gray-700 text-white">
      <div className="flex flex-wrap">
        <Word tries={tries} currentTry={currentTry} answer={answers[0]} maxTries={maxTries} />
        <Word tries={tries} currentTry={currentTry} answer={answers[1]} maxTries={maxTries} />
        <Word tries={tries} currentTry={currentTry} answer={answers[2]} maxTries={maxTries} />
        <Word tries={tries} currentTry={currentTry} answer={answers[3]} maxTries={maxTries} />
      </div>
      <Keyboard
        correctLetters={letterStates.correct}
        misplacedLetters={letterStates.misplaced}
        absentLetters={letterStates.absent}
      />
    </div>
  );
}

export default App;

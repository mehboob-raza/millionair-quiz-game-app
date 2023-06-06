import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import play from "./sounds/play.mp3";
import correct from "./sounds/correct.mp3";
import wrong from "./sounds/wrong.mp3";

const Trivia = ({ questionNumber, setQuestionNumber, setStop, data }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);
  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  const handleAnswer = (ans) => {
    setSelectedAnswer(ans);
    setClassName("answer active");
    delay(3000, setClassName(ans.correct ? "answer correct" : " answer wrong"));
    delay(5000, () => {
      if (ans.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setStop(true);
        });
      }
    });
  };
  return (
    <div className="trivia">
      <div className="question"> {question?.question} </div>
      <div className="answers">
        {question?.answer.map((ans, idx) => {
          return (
            <div
              className={selectedAnswer === ans ? className : "answer"}
              key={idx}
              onClick={() => handleAnswer(ans)}
            >
              {ans.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trivia;

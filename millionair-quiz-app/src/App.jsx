import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Trivia from "./Trivia";
import Timer from "./Timer";
import User from "./User";

const data = [
  {
    id: 1,
    question: "Rolex is a company that specialize in which type of products?",
    answer: [
      {
        text: "Phone",
        correct: false,
      },
      {
        text: "plane",
        correct: false,
      },
      {
        text: "Watches",
        correct: true,
      },
      {
        text: "Cars",
        correct: false,
      },
    ],
  },
  {
    id: 1,
    question: "When did the Website Facebook launched?",
    answer: [
      {
        text: "2008",
        correct: false,
      },
      {
        text: "2001",
        correct: false,
      },
      {
        text: "2004",
        correct: true,
      },
      {
        text: "1999",
        correct: false,
      },
    ],
  },
];

function App() {
  const [user, setUser] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const moneyPyramid = useMemo(() => {
    return [
      {
        id: 1,
        amount: "$100",
      },
      {
        id: 2,
        amount: "$200",
      },
      {
        id: 3,
        amount: "$300",
      },
      {
        id: 4,
        amount: "$400",
      },
      {
        id: 5,
        amount: "$500",
      },

      {
        id: 6,
        amount: "$600",
      },
      {
        id: 7,
        amount: "$700",
      },
      {
        id: 8,
        amount: "$800",
      },
      {
        id: 9,
        amount: "$900",
      },
      {
        id: 10,
        amount: "$1000",
      },
      {
        id: 11,
        amount: "$1100",
      },
      {
        id: 12,
        amount: "$1200",
      },
      {
        id: 13,
        amount: "$1300",
      },
      {
        id: 14,
        amount: "$1400",
      },
      {
        id: 15,
        amount: "$1500",
      },
    ];
  }, []);
  console.log(user, "user");
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        moneyPyramid.find((money) => money.id === questionNumber - 1).amount
      );
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="App">
      {user ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="earnedText">You earned : {earned} </h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    {" "}
                    <Timer
                      setStop={setStop}
                      questionNumber={questionNumber}
                    />{" "}
                  </div>
                </div>
                <div className="bottom">
                  {" "}
                  <Trivia
                    data={data}
                    setStop={setStop}
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber}
                  />{" "}
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid?.map((money, idx) => {
                return (
                  <li
                    className={
                      questionNumber == money.id
                        ? "moneyListItems active"
                        : "moneyListItems"
                    }
                    key={idx}
                  >
                    <span className="moneyListItemsNumber">{money.id}</span>
                    <span className="moneyListItemsAmount">
                      {" "}
                      {money.amount}{" "}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <User setUser={setUser} />
      )}
    </div>
  );
}

export default App;

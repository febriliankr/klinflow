import React from "react";
import "./Questions.css";

function Questions({
  number,
  question,
  options,
  setQuestions,
  questions,
  answers,
  setAnswers,
  onChange,
  enableKeduanya3,
}) {
  const handleClick = (option, number) => {
    console.log("option: ", option);
    console.log("number: ", number);
    // answers[number] = option;
    // console.log("answers", answers[1], answers[2], answers[3]);
    setAnswers({
      ...answers,
      [number]: option,
    });
  };

  return (
    <>
      {Object.keys(questions).map((q) => {
        if (
          !show34 &&
          (questions[q].number === 3 || questions[q].number === 4)
        ) {
          return null;
        }
        if (!show7 && questions[q].number === 7) {
          return null;
        }
        return (
          <>
            <div className="questions">
              <div className="questions__head">
                <h2 className="questions__title">{question}</h2>
              </div>
              <div className="questions__options">
                {options.map((option) => {
                  const enableKeduanya =
                    !enableKeduanya3 && option === "Keduanya";
                  console.log("enableKeduanya", enableKeduanya);
                  return (
                    <div className="questions__option-buttons">
                      <div
                        className={`${
                          answers[number] === option
                            ? `active-question questions__button`
                            : `questions__button`
                        } ${
                          enableKeduanya ? `questions__button-hidden` : null
                        }`}
                        onClick={() => handleClick(option, number)}
                      >
                        {option}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="questions__ask">
                <Link className="questions__question" to="/faq">
                  Apa ini?
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Questions;

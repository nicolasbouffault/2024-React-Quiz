import quizCompleteImg from "../assets/quiz-complete.png";
import questions from "../questions";

export default function Summary({ userAnswers }) {
    return (
        <div id="summary">
            <img src={quizCompleteImg} alt="Trophy Icon" />
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">10%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">10%</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">10%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = "user-answer";

                    return (
                        <li key={answer}>
                            <h3>{index + 1}</h3>
                            <p className="question">{questions[index].text}</p>
                            <p className="user-answer">{answer ?? "Skipped"}</p>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}

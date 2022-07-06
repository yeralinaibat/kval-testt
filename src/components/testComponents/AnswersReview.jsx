import { Paper, Button, Typography } from "@mui/material";
import { Check, Close } from "@mui/icons-material";
import { createMarkup, styles } from "../../helpers";

const AnswersReview = ({ processedAnswers, resetQuiz }) => {
  console.log(styles, 'styles')

  // 'spread' operator
  // const a = {bem: true, isAuth: false}
  // const b = {a} => {{bem: truw, ...}}
  // const c = {...a} => {bem: true, ...}
  // const array = ['1', 'hello', 'good']
  // const arrayB = [array] => [['1', 'hello', 'good']]
// const arrayC = [...array] => ['1', 'hello, ....]

  const renderAnswers = (answers) => {
    return answers.map(
      ({ question, isCorrect, correctAnswer, wrongAnswer }) => (
        <Paper   key={question} style={styles.paper}>
          <Typography variant="h2" style={styles.question}>
            <span dangerouslySetInnerHTML={createMarkup(question)} />
          </Typography>

          {isCorrect ? (
            <Typography
              variant="h2"
              style={{...styles.answer, ...styles.correctAnswer}}
              >
              <Check />
              <span
                style={styles.answer}
                dangerouslySetInnerHTML={createMarkup(correctAnswer)}
              />
            </Typography>
          ) : (
            <>
              <Typography
                variant="h3"
                color="secondary"
                style={styles.answer}
              >
                <Close />
                <span
                  style={styles.answer}
                  dangerouslySetInnerHTML={createMarkup(wrongAnswer)}
                />
              </Typography>
              <Typography
                variant="h3"
                style={{...styles.answer, ...styles.correctAnswer}}
              >
                <Check />
                <span
                  style={styles.answer}
                  dangerouslySetInnerHTML={createMarkup(correctAnswer)}
                />
              </Typography>
            </>
          )}
        </Paper>
      )
    );
  };

  return (
    <>
      <Typography variant="h1" style={styles.mainTitle}>
        Answers review:
      </Typography>
      {renderAnswers(processedAnswers)}
      <Button
        style={styles.submitButton}
        onClick={resetQuiz}
        variant="contained"
        color="primary"
      >
        Reset
      </Button>
    </>
  );
};

export default AnswersReview;

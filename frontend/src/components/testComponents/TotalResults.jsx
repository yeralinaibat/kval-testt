import { Button, Typography } from "@mui/material";
import AnswersReview from "./AnswersReview";
import { useEffect } from "react";
import {styles} from "../../helpers";

const TotalResults = ({
  classes,
  resetQuiz,
  currentQuizStep,
  processedAnswers,
  setCurrentQuizStep,
}) => {
  useEffect(() => {
    window.scrollTo(0, "20px");
  }, []);
  return currentQuizStep === "results" ? (
    <div style={styles.results}>
      <Typography variant="h1" style={styles.mainTitle}>
        Results
      </Typography>
      <Typography variant="h4">
        {processedAnswers.filter(({ isCorrect }) => isCorrect).length} out of{" "}
        {processedAnswers.length}
      </Typography>
      <Button
        onClick={(e) => {
          setCurrentQuizStep("review");
        }}
        style={styles.submitButton}
        variant="contained"
        color="primary"
      >
        Review
      </Button>{" "}
      <Button
        onClick={resetQuiz}
        style={styles.submitButton}
        variant="contained"
        color="primary"
      >
        Reset
      </Button>
    </div>
  ) : (
    <AnswersReview
      style={styles}
      resetQuiz={resetQuiz}
      processedAnswers={processedAnswers}
    />
  );
};

export default TotalResults;

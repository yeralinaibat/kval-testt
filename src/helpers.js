export const styles = {
  paper: {
    padding: "10px",
    marginTop: "20px",
    marginBottom: "20px",
    borderRadius: "5px",
    
  },
  mainTitle: {
    textAlign: "center",
    fontSize: "30px",
    //marginBottom: "40px",
  },
  submitButton: {
    width: "100%",
    
    justifyContent: "center",
    alignItems:"center",
    //size:"large",
    marginTop: "20px",
    //borderRadius: "0p",
    background: "##0800ff",
    "&:hover": {
      backgroundColor: "##0800ff",
      /* boxShadow:
         */
        //"0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)",
    },
  },
  question: {
    fontSize: "20px",
    marginBottom: "10px",
    fontWeight: "500",
    lineHeight: "35px",
  },
  answer: {
    fontSize: "18px",
    marginBottom: "10px",
    fontWeight: "500",
    lineHeight: "25px",
    //marginLeft: "10px",
    display: "flex",
  },
  correctAnswer: {
    color: "green",
  },
  results: {
    width: "100%",
    display: "flex",
    margin: "0 auto",
    maxWidth: "100%",
    textAlign: "center",
    flexDirection: "column",
  },
};

 export const difficulties = [
  { id: "total_easy_question_count", name: "Easy" },
  { id: "total_medium_question_count", name: "Medium" },
  { id: "total_hard_question_count", name: "Hard" },
]; 

export const createMarkup = (text) => {
  return { __html: text };
};

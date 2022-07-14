


export const styles = {
  paper: {
    padding: "10px",
    marginTop: "20px",
    marginBottom: "20px",
    borderRadius: "1px",
    
  },

    mainTitle: {
    textAlign: "center",
    fontSize: "30px",
  },
  submitButton: {
    width: "100%",
    
    justifyContent: "center",
    alignItems:"center",
    marginTop: "3rem",
    background: "green",
    "&:hover": {
      backgroundColor: "green",
      
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

 export const language = [
  { id: "total_easy_question_count", name: "Kaz" },
  { id: "total_medium_question_count", name: "Rus" },
 
]; 

export const createMarkup = (text) => {
  return { __html: text };
};

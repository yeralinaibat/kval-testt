import {
  Grid,
  Paper,
  Select,
  Button,
  MenuItem,
  TextField,
  Container,
  Typography,
  InputLabel,
  FormControl,
 
} from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";


import { styles, language, createMarkup } from "../../helpers";
import QuizAnswers from "./QuizAnswers";



const QuizCategories = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({ id: "", name: "" });

  const [quizNumber, setQuizNumber] = useState(null);
  const [languages, setLanguages] = useState({ id: "", name: "" });

  const [quizData, setQuizData] = useState([]);

  const [currentQuizStep, setCurrentQuizStep] = useState("start");

  const postQuizData = async () => {
    try {
      //const url = `https://opentdb.com/api.php?amount=${quizNumber}&category=${category.id}&languages=${languages.name.toLowerCase()}`;
     //console.log("object");
      //const url = `http://localhost:5000/api/get-tests-by-category/?category=${category.id}&languages=${languages.name.toLowerCase()}&amount=${quizNumber}`;
    

      const { data } = await axios.get("http://localhost:5000/api/get-tests-by-category", { params: {
        category: category.name,
        languages: languages.name,
        amount: quizNumber,
      } })

      const formattedCategory = data.map((cat) => {

        const incorrectAnswersIndexes = cat.incorrect_answers.length;
        const randomIndex = Math.round(
          Math.random() * (incorrectAnswersIndexes - 0) + 0
        );

        cat.incorrect_answers.splice(randomIndex, 0, cat.correct_answer);
        
        return {
          ...cat,
          answers: cat.incorrect_answers,
        };
      });

      setQuizData(formattedCategory);
      setCurrentQuizStep("results");
    } catch (error) {
      console.log("Fetch quiz error =====>>>>", error);
    }
  };

 /*  const fetchCategories = async () => {
    console.log({
      category: category.id,
      languages:languages.name.toLowerCase(),
      amount: quizNumber,
    });

    const { data } = await axios.get(`http://localhost:5000/api/get-tests-by-category/`,{
      category: category.id,
      languages:languages.name.toLowerCase(),
      amount: quizNumber,
    });

     setCategories(data.categories ?? []);
  }; */

  const fetchCategories = async () => {
    const { data } = await axios.get(`http://localhost:5000/api/get-categories`);
    setCategories(data.categories);
  };

  useEffect(() => {
    fetchCategories();
    window.scrollTo(0, "20px");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!quizData.length && quizNumber && category.id && languages) {
      postQuizData();
    }
  };

  const handleSelectChange = (e) => {
    e.preventDefault();
    const selectedCategory = categories.find(
      (cat) => cat.id === e.target.value
    );
    setCategory(selectedCategory);
  };

  const handleLanguagesChange = (e) => {
    e.preventDefault();
    const selectedLanguages = language.find(
      (lang) => lang.id === e.target.value
    );
    setLanguages(selectedLanguages);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setQuizNumber(e.target.value);
  };

  const resetQuiz = (e) => {
    e.preventDefault();
    setQuizData([]);
    setCategory("");
    setQuizNumber("");
    setLanguages("");
    setCurrentQuizStep("start");
    window.scrollTo(0, "20px");
  };



  return (
   
        <Container>
      <Paper style={styles.paper}>
        {currentQuizStep === "start" ? (
          <>
            <Typography  style={styles.mainTitle}>
              Тест
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="category-select-label">
                      Выберите категорию
                    </InputLabel>
                    <Select
                      required
                      name="category"
                      value={category.id || ""}
                      id="category-select"
                      label="Выберите категорию"
                      labelId="category-select-label"
                      onChange={handleSelectChange}
                    >
                      {categories.map((category) => (
                        <MenuItem key={category.id} value={category.id}>
                          <span
                            dangerouslySetInnerHTML={createMarkup(
                              category.name
                            )}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="Languages-select-label">
                      Язык
                    </InputLabel>
                    <Select
                      required
                      
                      name="languages" //difficulty
                      value={languages.id || ""}
                      id="Languages-select"
                      label="Уровень"
                      labelId="languages-select-label"
                      onChange={handleLanguagesChange}
                    >
                      {language.map((languages) => (
                        <MenuItem key={languages.id} value={languages.id}>
                          {languages.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    inputProps={{ min: 1, max: 10 }}
                    required
                    fullWidth
                    type="number"
                    id="quiz-number"
                    variant="outlined"
                    name="quiz-number"
                    label={`Количество вопросов от 1 до 10`}
                    value={quizNumber || ""}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                // style={{border: '1px solid red'}}
                style={styles.submitButton}
                type="submit"
                variant="contained"
                color="primary"
              >
                НАЧАТЬ
              </Button>
            </form>
          </>
        ) : (
          <QuizAnswers
            style={styles}
            quizData={quizData}
            resetQuiz={resetQuiz}
            categories={categories}
            currentQuizStep={currentQuizStep}
            setCurrentQuizStep={setCurrentQuizStep}
          />
        )}
      </Paper>
    </Container>

       
  
  );
};

export default QuizCategories;

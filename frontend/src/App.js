import { Route, Routes } from "react-router";
import Home from "./components/Home";
//import Test from "./components/Test";
import ResponsiveAppBar from './components/Nav';
import Documents from "./components/Documents";
import QuizCategories from "./components/testComponents/QuizCategories";

//import Questions from "./components/Questions";


function App() {
  return (
    <div className="App">
     <ResponsiveAppBar/>  
     <div style={{paddingTop: '80px'}} >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/documents" element={<Documents/>}/>
        <Route path="/test" element={<QuizCategories/>}/> 
        {/* <Route path="/questions/:subjectId/:questionsCount" element={<Questions/>}/> */}
            
      </Routes>
     </div>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import TriviaPage from "./pages/TriviaPage";
import PageNotFound from "./pages/PageNotFound";
import ADHD from "./pages/ADHD";
import Anxiety from "./pages/Anxiety";
import Bipolar from "./pages/Bipolar";
import Depression from "./pages/Depression";
import PTSD from "./pages/PTSD";
import MhtResult from "./pages/MhtResult";
import MhtResuAnxiety from "./pages/MhtResuAnxiety";
import MhtResuBipolar from "./pages/MhtResuBipolar";
import MhtResuDepression from "./pages/MhtResuDepression";
import MhtResuPTSD from "./pages/MhtResuPTSD";
import TriviaPage from "./pages/TriviaPage";
import Results from "./components/Results";
import TakeTest from "./pages/TakeTest";
import TakeQuiz from "./pages/TakeQuiz";
import MHS from "./pages/More/MHS";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ACES-MHS" element={<Homepage />} />
        <Route path="/ACES-MHS/adhd" element={<ADHD />} />
        <Route path="/ACES-MHS/anxiety" element={<Anxiety />} />
        <Route path="/ACES-MHS/bipolar" element={<Bipolar />} />
        <Route path="/ACES-MHS/depression" element={<Depression />} />
        <Route path="/ACES-MHS/trivia" element={<TriviaPage />} />
        <Route path="/ACES-MHS/ptsd" element={<PTSD />} />
        <Route path="/ACES-MHS/adhd-result" element={<MhtResult />} />
        <Route path="/ACES-MHS/anxiety-result" element={<MhtResuAnxiety />} />
        <Route path="/ACES-MHS/bipolar-result" element={<MhtResuBipolar />} />
        <Route path="/ACES-MHS/test" element={<TakeTest/>} />
        <Route path="/ACES-MHS/quiz" element={<TakeQuiz/>} />
        <Route path="/ACES-MHS/more/mhs" element={<MHS />} />
        <Route
          path="/ACES-MHS/depression-result"
          element={<MhtResuDepression />}
        />
        <Route path="/ACES-MHS/trivia" element={<TriviaPage />} />
        <Route path="/ACES-MHS/trivia-result" element={<Results />} />
        <Route path="/ACES-MHS/ptsd-result" element={<MhtResuPTSD />} />

        {/* <Route path="trivia" element={<TriviaPage />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

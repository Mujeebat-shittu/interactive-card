import "./index.css";
import PageWrapper from "./components/page-wrapper.jsx";
import { Routes, Route } from "react-router-dom";
import ThankYou from "./components/thank-you.jsx"
import NotFound from "./components/notfound.jsx";


function App() {
  return(   
    <Routes>
      <Route path='/' element={<PageWrapper/>}/>
      <Route path='/thank-you' element={<ThankYou/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes> 
 
  );
}

export default App;

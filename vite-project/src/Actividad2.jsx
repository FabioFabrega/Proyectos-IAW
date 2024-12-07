import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Nav from "./Nav"
function App() {
  return (
    <Router>
        <Nav/>
      <Routes>
        <Route path="/skills/:nombre" element={<MySkills />} />
      </Routes>
    </Router>
  );
}

export default App;





function MySkills() {
    const showFirstImage = Math.random() < 0.5;
    const showFirstText = Math.random() < 0.5;
  
    return (
      <div>
        {showFirstImage ? (
          <img src="/avatar.jpeg" alt="imagen1" />
        ) : (
          <img src="/avatar2.jpeg" alt="imagen2"  />
        )}
        {showFirstText ? (
            <h1>Este es el Desarrollador web</h1>
        ) : (
            <h1>Este es el diseñador web</h1>
        )}
      </div>
      
    );
  }


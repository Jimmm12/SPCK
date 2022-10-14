import Header from "./Nav/Header";
import Footer from "./Nav/Footer";
import Destination from "./component/Destination";
import Gallery from "./component/Gallery";
import Blogs from "./component/Blogs";
import Home from "./component/Home";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/> 
        <Routes>
       
          <Route path="/" element={<Home />} exact="true" />
        
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Blogs" element={<Blogs />} /> 
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

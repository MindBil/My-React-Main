import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import News from "./pages/News";
import Services from "./pages/Services";
import Completed from "./pages/Completed";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Pagrindinis
      </Route>
      <Route path="/apie-mus" element={<AboutUs />}>
        Apie mus
      </Route>
      <Route path='/naujienos' element={<News />}>Naujienos
      </Route> 
      <Route path='/paslaugos' element={<Services />}>Paslaugos
      </Route>
      <Route path='/atlikti-darbai' element={<Completed />}>Atlikti darbai
      </Route>
      <Route path="/kontaktai" element={<Contacts />}>
        Kontaktai
      </Route>
    </Routes>
  );
};

export default App;
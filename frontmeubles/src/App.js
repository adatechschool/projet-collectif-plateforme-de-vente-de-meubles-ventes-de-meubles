import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Profile from './pages/Profile';
import Panier from './pages/Panier';
import Login from './pages/Login';
import Accueil from './pages/Accueil';
import NavBar from './component/NavBar';



function App() {
  return (
    <div>
    <Router>
      <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Accueil/>}/>
        <Route path="/profil" element={<Profile/>}/>
        <Route path="/panier" element={<Panier/>}/>
        <Route path="/login" element={<Login/>}/>
     </Routes>
     </div>
    </Router>
    </div>
  );
}
export default App;

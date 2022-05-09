
import './App.css';
import FullName from "./components/profile/FullName";
import Adress from "./components/profile/Adress";
import ProfilePhoto from './components/profile/ProfilePhoto';
function App() {
  return (
    <div className="App">
        <ProfilePhoto />
        <FullName />
        <Adress />
     
   
    </div>
  );
}

export default App;

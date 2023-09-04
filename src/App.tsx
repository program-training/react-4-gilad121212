import "./App.css";
import { Example } from "./components/Example/Example";
import User from "./contexst/UserContext";
import E from "./components/Example/fater";
import N from "./components/Example/comp1";
import Grend from "./components/Example/grendPa";
import ThemeSwitcher from "./components/Example/ThemeSwitcher ";
import UserC from "./contexst/themeContext";
import Color from "./components/Example/taxt";
import UserContext from "./contexst/UserContext1";
import Header from "./components/Example/Header";
function App() {
  return (
    <div>

      <UserContext>
        <Header></Header>
      </UserContext>
      <UserC>
        <ThemeSwitcher></ThemeSwitcher>
        <Color></Color>
      </UserC>
    </div>
  );
}

export default App;

//returne turi buti jsx
import Welcome from "./components/Welcome"
// import WelcomeClass from "./components/WelcomeClass";
import Button from "./components/FuncButton"
import Div from "./components/FuncDiv"
import FuncButton2 from "./components/FuncButton2"
import FuncDiv2 from "./components/FuncDiv2"
const App = () => {
  return (
    <div className="tomato">
      <h1>Hello World!</h1>
      <Welcome name="Mindaugas" surname="Mindaugaitis" />
      <Welcome name="Tomas"/>
      <div><br />
        <button>Push me</button>
      <Button />
      <Div />
      </div>
      <FuncButton2 title="I AM BUTTON"/>
      <FuncButton2 title="I AM CAT"/>
      <FuncDiv2 />
    </div>
    
  );
};

export default App;


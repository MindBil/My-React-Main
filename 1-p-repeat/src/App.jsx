//returne turi buti jsx
import Welcome from "./components/Welcome"
// import WelcomeClass from "./components/WelcomeClass";
import Button from "./components/FuncButton"
import Div from "./components/FuncDiv"

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
    </div>
    
  );
};

export default App;


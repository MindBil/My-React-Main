//returne turi buti jsx
import Welcome from "./components/Welcome"
// import WelcomeClass from "./components/WelcomeClass";
import Button from "./components/FuncButton"

const App = () => {
  return (
    <div className="tomato">
      <h1>Hello World!</h1>
      <Welcome name="Mindaugas" surname="Mindaugaitis" />
      <Welcome name="Tomas"/>
      <div><br />
        <button>Push me</button>
        <Button />
      </div>
    </div>
    
  );
};

export default App;


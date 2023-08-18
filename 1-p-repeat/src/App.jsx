//returne turi buti jsx
import Welcome from "./components/Welcome"
// import WelcomeClass from "./components/WelcomeClass";

const App = () => {
  return (
    <div className="tomato">
      <h1>Hello World!</h1>
      <Welcome name="Mindaugas" surname="Mindaugaitis" />
      <Welcome name="Tomas"/>
      
    </div>
  );
};

export default App;


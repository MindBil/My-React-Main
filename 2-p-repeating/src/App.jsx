import Welcome from "./components/Welcome.jsx"
import WelcomeClass from "./components/WelcomeClass";

const App = () => {
  return (
  <div>
    Hello world!
    <Welcome name="Mindaugas" surname="Mindaitis" />
    <WelcomeClass name="Tomas" />
  </div>
  );
};

export default App
// function App() {
//   return (
//     <div>
//       <h1>Hello</h1>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

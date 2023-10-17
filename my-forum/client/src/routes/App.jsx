import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "./components/common/Footer";
import QuestionRoutes from "./QuestionRoutes";
import AnswerRoutes from "./AnswerRoutes";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={QuestionRoutes} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/questions/:id/answer" component={AnswerRoutes} />
          {/* Add other routes here as needed */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

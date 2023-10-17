import { Route, Switch } from "react-router-dom";
import AnswerForm from "../components/answers/AnswerForm";

const AnswerRoutes = () => {
  return (
    <Switch>
      <Route path="/questions/:id/answer" component={AnswerForm} />
    </Switch>
  );
};

export default AnswerRoutes;

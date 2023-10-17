import React from "react";
import { Route, Switch } from "react-router-dom";
import QuestionList from "../components/questions/QuestionList";
import QuestionDetail from "../components/questions/QuestionDetail";
import QuestionForm from "../components/questions/QuestionForm";

const QuestionRoutes = () => {
  return (
    <Switch>
      <Route exact path="/questions" component={QuestionList} />
      <Route exact path="/questions/new" component={QuestionForm} />
      <Route path="/questions/:id" component={QuestionDetail} />
    </Switch>
  );
};

export default QuestionRoutes;

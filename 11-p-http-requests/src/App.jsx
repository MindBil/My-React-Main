import AxiosGet from "./AxiosGet";
import AxiosPost from "./AxiosPost";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div>
      <AxiosGet />
      <AxiosPost />
      <UserList />
    </div>
  );
};

export default App;

import { Route, Switch } from 'react-router-dom';
import Task1 from './Task1/Task1';
import Task2 from './Task2/Task2';
import Tasks from './Tasks';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Tasks />
      </Route>
      <Route exact path="/task1">
        <Task1 />
      </Route>
      <Route exact path="/task2">
        <Task2 />
      </Route>
    </Switch>
  );
}

export default App;

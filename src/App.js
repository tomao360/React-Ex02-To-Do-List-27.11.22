import "./App.css";
import { ToDoList } from "./components";

function App() {
  return (
    <div className="app">
      <link
        href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;500;600&family=Nunito+Sans&family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      ></link>
      <ToDoList />
    </div>
  );
}

export default App;

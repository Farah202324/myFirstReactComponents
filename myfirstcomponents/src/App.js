import Counter from "./components/counter";
import Color from "./components/colors";
import TodoApp from "./components/ToDo";
import SignUpForm from "./components/SignUpForm";
import TempForm from "./components/TempForm";
import './styles.css'
function App() {
  return <div className="App">
    <Counter initialCount={0}/>
    <Color/>
    <TodoApp/>
    <SignUpForm/>
    <TempForm/>
  </div>;
}

export default App;

import Counter from "./components/counter";
import Color from "./components/colors";
import TodoApp from "./components/ToDo"
import SignUpForm from "./components/SignUpForm";
import './styles.css'
function App() {
  return <div className="App">
    <Counter initialCount={0}/>
    <Color/>
    <TodoApp/>
    <SignUpForm/>
  </div>;
}

export default App;

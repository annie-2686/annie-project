import "./App.css";
import Dictionary from "./Dictionary.js";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <a href="https://github.com/annie-2686/annie-project">
            Coded by Annie Do
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

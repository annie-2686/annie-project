import "./App.css";
import Dictionary from "./Dictionary.js";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <h1>Dictionary</h1>
        <main>
          <Dictionary />
        </main>
        <footer>
          {" "}
          This project was coded by Annie and is{" "}
          <a href="https://github.com/annie-2686/annie-project">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://papaya-starlight-a5c103.netlify.app">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Radical from "./Radical";

function App() {
  return (
    <>
      <main>
        <div className="title">
          <h2>Chinese Radicals</h2>
        </div>
        <Radical />
      </main>
      <footer>
        <p>
          Copyright &copy; Yulia Yuste 2022 | Credits:
          汉字部首教程，北京大学出版社
        </p>
      </footer>
    </>
  );
}

export default App;

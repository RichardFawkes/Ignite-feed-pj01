import { Header } from "./components/Header/Header.jsx";
import styles from "./App.module.css";
import { Post } from "./components/Posts/Posts";
import Sidebar from "./components/Sidebar/Sidebar";
import "./global.css";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Richard Geraldo"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <Post author="Vitoria Martins" content="um novo post muito legal" />
        </main>
      </div>
    </div>
  );
}

export default App;

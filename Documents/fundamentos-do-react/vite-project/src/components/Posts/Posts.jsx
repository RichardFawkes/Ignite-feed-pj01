import styles from "./Post.module.css";
import Comment from "../Comment/Comment";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/RichardFawkes.png"
          />
          <div className={styles.authorInfo}>
            <strong>Richard Geraldo</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="2023-05-22 08:13:20" title="11 de Maio as 08:13">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <p>
            Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um
          </p>
          <p>
            projeto que fiz no NLW Return, evento da Rocketseat. O nome do
            projeto é DoctorCare 🚀
          </p>
          <p>
            <a href="#">jane.design/doctorcare</a>
          </p>
          <p>
            <a href="#">#novoprojeto</a>
            <br />
            <a href="#">#nlw </a> <br />
            <a href="">#rocketseat</a>
          </p>
        </p>
      </div>

      <form className={styles.commetForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}

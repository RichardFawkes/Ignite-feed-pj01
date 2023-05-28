import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
const Comment = () => {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/RichardFawkes.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Richard Geraldo</strong>
              <time dateTime="2023-05-22 08:13:20" title="11 de Maio as 08:13">
                Cerca de 1h atras
              </time>
            </div>
            <button title="Deletar Comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏 </p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;

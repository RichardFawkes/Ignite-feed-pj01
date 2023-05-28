import style from "./header.module.css";

import IgniteLogo from "../../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={style.header}>
      <img src={IgniteLogo} alt="Logotipo Ignite Feed" />
      <strong>Ignite Feed</strong>
    </header>
  );
}

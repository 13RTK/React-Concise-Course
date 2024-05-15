import styles from "./Container.module.css";

function Container({ children }) {
  return <main className={styles.main}>{children}</main>;
}

export default Container;

import logo from "../asset/logo.svg";
import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <div className={styles.layout}>
      {/* 사이트 header */}
      <div className={styles.headerBg}>
        <header className={styles.header}>
          <a href="./">
            <img src={logo} alt="로고" />
          </a>
          <div>
            <select className={styles.select}>
              <option value={1}>한국어</option>
              <option value={2}>영어</option>
            </select>
          </div>
        </header>
      </div>

      {/* 사이트 main */}
      <div>
        <main className={styles.main}>{children}</main>
      </div>

      {/* 사이트 footer */}
      <div className={styles.footerBg}>
        <footer className={styles.footer}>
          서비스 이용약관 | 개인정보 처리방침
        </footer>
      </div>
    </div>
  );
}
export default Layout;

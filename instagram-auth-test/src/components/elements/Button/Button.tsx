import Link from 'next/link';
import styles from './Button.module.css';
interface ButtonProps {
  text?: string; // ボタンに表示するテキスト
  layout: string; // ボタンのデザインレイアウト
  width: string; // ボタンの幅
  href?: string; // ボタンがリンクする先のURL
  tb?: string; // タブレット用のボタン幅
  sp?: string; // スマートフォン用のボタン幅
  onClick?: () => void; // ボタンがクリックされたときの処理
}


const Button = ({ text, layout, width, href, tb, sp, onClick }: ButtonProps) => {
  if (!href) {
    return (
      <button
        onClick={onClick}
        className={`${styles.buttonBase} ${styles[layout]} ${styles[width]} ${styles[tb + 'Tb']} ${styles[sp + 'Sp']}`}
      >
        {text}
        <svg width="8" height="16" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            className={styles.arrowColor}
            d="M1 1L9 9L1 17"
            stroke="#575757"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  }


  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${styles.buttonBase} ${styles[layout]} ${styles[width]}
      ${styles[tb + 'Tb']} ${styles[sp + 'Sp']}`}
    >
      {text}
      <svg width="8" height="16" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          className={styles.arrowColor}
          d="M1 1L9 9L1 17"
          stroke="#575757"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};

export default Button;
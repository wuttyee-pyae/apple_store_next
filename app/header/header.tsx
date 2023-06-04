import Image from 'next/image'
import styles from './header.module.scss'
import { FaApple, FaSearch, FaShoppingBag } from 'react-icons/fa';
export default function Header() {
  return (
    <header>
      <div className={styles.upper_header}>
        <a className={styles.logo_icon} href="/" data-globalnav-item-name="apple" data-analytics-title="apple home" aria-label="Apple"><span>
        </span></a>
       
        <ul className={styles.top_level_menu}>
          <li>
            <a href="#" className={styles.icon_list}><FaApple size={18} /></a>
          </li>
          <li><a href="#">Store</a>
            <ul className={styles.second_level_menu}>
              <li><a href="#">Store </a></li>
              <li><a href="#">Store</a></li>
              <li><a href="#">Store</a> </li>
              <li><a href="#">Store</a></li>
            </ul></li>
          <li><a href="#">iPhone</a>
            <ul className={styles.second_level_menu}>
              <li><a href="#">iPhone </a></li>
              <li><a href="#">iPhone</a></li>
              <li><a href="#">iPhone</a> </li>
              <li><a href="#">iPhone</a></li>
            </ul></li>
          <li>
            <a href="#">iPad</a>
            <ul className={styles.second_level_menu}>
              <li><a href="#">iPad </a></li>
              <li><a href="#">iPad</a></li>
              <li><a href="#">iPad</a> </li>
              <li><a href="#">iPad</a></li>
            </ul>
          </li>
          <li><a href="#">iPhone</a>
            <ul className={styles.second_level_menu}>
              <li><a href="#">iPhone </a></li>
              <li><a href="#">iPhone</a></li>
              <li><a href="#">iPhone</a> </li>
              <li><a href="#">iPhone</a></li>
            </ul></li>
          <li><a href="#">Watch</a>
            <ul className={styles.second_level_menu}>
              <li><a href="#">Watch </a></li>
              <li><a href="#">Watch</a></li>
              <li><a href="#">Watch</a> </li>
              <li><a href="#">Watch</a></li>
            </ul></li>
          <li><a href="#">Air Pods</a>
            <ul className={styles.second_level_menu}>
              <li><a href="#">Air Pods </a></li>
              <li><a href="#">Air Pods</a></li>
              <li><a href="#">Air Pods</a> </li>
              <li><a href="#">Air Pods</a></li>
            </ul></li>
          <li><a href="#">TV & Home</a>
            <ul className={styles.second_level_menu}>
              <li><a href="#">TV & Home </a></li>
              <li><a href="#">TV & Home</a></li>
              <li><a href="#">TV & Home</a> </li>
              <li><a href="#">TV & Home</a></li>
            </ul></li>
          <li><a href="#">Entertainment</a>
            <ul className={styles.second_level_menu}>
              <li><a href="#">Entertainment </a></li>
              <li><a href="#">Entertainment</a></li>
              <li><a href="#">Entertainment</a> </li>
              <li><a href="#">Entertainment</a></li>
            </ul></li>
          <li><a href="#">Accessories</a>
            <ul className={styles.second_level_menu}>
              <li><a href="#">Accessories </a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Accessories</a> </li>
              <li><a href="#">Accessories</a></li>
            </ul></li>
          <li><a href="#">Support</a>
            <ul className={styles.second_level_menu}>
              <li><a href="#">Support </a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Support</a> </li>
              <li><a href="#">Support</a></li>
            </ul></li>
            <li>
            <a href="#" className={styles.icon_list}><FaSearch size={18} /></a>
          </li>
          <li>
            <a href="#" className={styles.icon_list}><FaShoppingBag size={18} /></a>
          </li>
        </ul>
      </div>
      <div className={styles.lower_header}>
        <a>Apple TV+</a>
        <a data-analytics-title="stream now" >Stream now
          <span ></span>
        </a>
      </div>
    </header>
  )
}

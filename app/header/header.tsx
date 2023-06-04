import Image from 'next/image'
import styles from './header.module.scss'
import { FaApple , FaSearch , FaShoppingBag } from 'react-icons/fa';
import NavItem from './navItem';


export default function Header() {
  return (

    <header className={styles.all } >
      <nav className={styles.nav}>
        <div >
        <ul className={styles.ul_list}>
          <li><FaApple size={18}/></li>
          <li><a href="/Store/" data-analytics-title="Store">Store</a></li>
          <li><a href="/Mac/" data-analytics-title="Mac">Mac</a></li>
          <li><a href="/iPad/" data-analytics-title="iPad">iPad</a></li>
          <li><a href="/iPhone/" data-analytics-title="iPhone">iPhone</a></li>
          <li><a href="/Watch/" data-analytics-title="Watch">Watch</a></li>
          <li><a href="/AirPods/" data-analytics-title="AirPods">AirPods</a></li>
          <li><a href="/TV & Home/" data-analytics-title="TV & Home">TV & Home</a></li>
          <li><a href="/Entertainment/" data-analytics-title="Entertainment">Entertainment</a></li>
          <li><a href="/Accessories/" data-analytics-title="Accessories">Accessories</a></li>
          <li><a href="/Support/" data-analytics-title="Support">Support</a></li>
          <li><FaSearch size={18}/></li>
          <li><FaShoppingBag size={18}/></li>
        </ul>
        </div>
        <div >
            <NavItem />
        </div>
       
        
        
      </nav>
    </header>
  )
}
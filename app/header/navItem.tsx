'use client';
import Link from 'next/link';
import styles from './header.module.scss'
import Button from '@mui/material/Button';
//Create a functional component with text, href and active as props and use Link from next/link to link pages
// export interface INavItem {
//   text: string;
//   href: string;
//   active: boolean;
// }



export default function NavItem(){
    return (
        <div>
            <ul className={styles.ul_list}>
                <li><h1 >Apple TV+</h1></li>
                <li>
                <Button variant="outlined" color="primary"  className={styles.button_stream}>
                    Stream
                </Button>
                </li>
            </ul>
        </div>
      );
};
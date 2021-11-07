import styles from '@/styles/HeaderNav.module.css'

import Link from 'next/link'
import { FaUser, FaRegFileAlt } from 'react-icons/fa'

export default function HeaderNav() {
  return (
    <nav>
      <ul className={styles.container}>
        <li>
          <Link href='/'>
            <a>
              <FaRegFileAlt />
              Files
            </a>
          </Link>
        </li>
        <li>
          <Link href='/users'>
            <a>
              <FaUser />
              Users
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

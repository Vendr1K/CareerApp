import { useState } from 'react'
import { List, ListItem } from '../UI'
import styles from './navBar.module.css'

export const NavBar = ({className}) => {

  const [activeNav, setActiveNav] = useState('vacancy')

  const dataBar = [
    {
      navPage: 'vacancy',
      value: 'Поиск вакансий',
      id: 1,
    },
    {
      navPage: 'favourites',
      value: 'Избранные вакансии',
      id: 2,
    }
  ]

  return (
    <nav className={`${styles.nav} ${className}`}>
      <List className={styles.list}>
        {dataBar.map((nav) => {
          return (
            <ListItem key={nav.id} className={`${styles.item} ${nav.navPage === activeNav ? styles.active : ''}`} onClick={() => { setActiveNav(nav.navPage) }}>
              {nav.value}
            </ListItem>
          )
        })}
      </List>
    </nav>
  )
}
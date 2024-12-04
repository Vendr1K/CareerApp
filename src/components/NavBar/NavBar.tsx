import { useState } from 'react'

import { NavBarProps } from '@props'
import { List, ListItem } from '@components'

import cn from 'classnames'
import styles from './navBar.module.css'

export const NavBar = ({ className }: NavBarProps) => {
  const [activeNav, setActiveNav] = useState('vacancy')

  const dataBar = [
    {
      navPage: 'vacancy',
      value: 'Поиск вакансий',
      id: 1
    },
    {
      navPage: 'favourites',
      value: 'Избранные вакансии',
      id: 2
    }
  ]

  return (
    <nav className={cn(styles.nav, className)}>
      <List className={styles.list}>
        {dataBar.map(nav => {
          return (
            <ListItem
              key={nav.id}
              className={cn(styles.item, {
                [styles.active]: nav.navPage === activeNav
              })}
              onClick={() => {
                setActiveNav(nav.navPage)
              }}
            >
              {nav.value}
            </ListItem>
          )
        })}
      </List>
    </nav>
  )
}

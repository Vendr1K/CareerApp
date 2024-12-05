import { NavBar } from '@components'
import { Container, Logo } from '@components/UI'

import styles from './header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo className={styles.logo} />
        <NavBar className={styles.nav} />
      </Container>
    </header>
  )
}

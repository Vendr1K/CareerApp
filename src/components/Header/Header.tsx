import { Container, Logo, NavBar } from '@components'

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

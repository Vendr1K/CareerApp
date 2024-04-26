import { Logo, Container } from '../UI'

import styles from './header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Logo />
      </Container>

    </header>
  )
}
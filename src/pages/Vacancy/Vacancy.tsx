import { Button, Container } from '@components/UI'

import { APP_PAGE } from '@constans'
import { useRoute } from '@hooks'

import styles from './Vacancy.module.css'

export const Vacancy = () => {
  const { navigate } = useRoute()

  return (
    <Container>
      <Button
        className={styles.backBtn}
        onClick={() => navigate(APP_PAGE.main)}
      >
        К результатам поиска
      </Button>
    </Container>
  )
}

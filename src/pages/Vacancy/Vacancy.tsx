import { Container } from '@components/UI'

import { APP_PAGE } from '@constans'
import { useRoute } from '@hooks'

import cn from 'classnames'
import styles from './Vacancy.module.css'

export const Vacancy = () => {
  const { navigate } = useRoute()

  return (
    <Container>
      <button
        className={cn(styles.btn, styles.back)}
        onClick={() => navigate(APP_PAGE.main)}
      >
        К результатам поиска
      </button>
    </Container>
  )
}

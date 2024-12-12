import { APP_PAGE } from '@constans'
import { Vacancy, Vacansies } from '@pages'
import { Header, Footer, Layout, Main } from '@components'

import { usePreventActiveAppElement, useRoute } from '@hooks'

const App = () => {
  usePreventActiveAppElement()
  const { path } = useRoute()

  return (
    <Layout>
      <Header />
      <Main>
        {path === APP_PAGE.main && <Vacansies />}
        {path === APP_PAGE.vacancy && <Vacancy />}
      </Main>
      <Footer />
    </Layout>
  )
}

export default App

import {
  Header,
  Footer,
  Layout,
  Main,
  FilterList,
  PaginationVacanciesList
} from '@components'
import { Container } from '@components/UI'

import { usePreventActiveAppElement } from '@hooks'

const App = () => {
  usePreventActiveAppElement()

  return (
    <Layout>
      <Header />
      <Main>
        <Container>
          <FilterList />
          <PaginationVacanciesList />
        </Container>
      </Main>
      <Footer />
    </Layout>
  )
}

export default App

import { useEffect } from 'react'

import {
  Header,
  Footer,
  Layout,
  Main,
  FilterList,
  VacancyList,
  SkeletonBlock,
  Container
} from '@components'
import { useFrontendVacancyStore } from '@/store'

const App = () => {
  const { isLoading, vacancyList, fetchVacancyList } = useFrontendVacancyStore()

  useEffect(() => {
    fetchVacancyList()
  }, [])

  return (
    <Layout>
      <Header />
      <Main>
        <Container>
          <FilterList />
          {isLoading && <SkeletonBlock />}
          {vacancyList.length && <VacancyList data={vacancyList} />}
        </Container>
      </Main>
      <Footer />
    </Layout>
  )
}

export default App

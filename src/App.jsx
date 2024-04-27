import { Header, Footer, Layout, Main, FilterList } from './components';
import { Container } from './components/UI';

import styles from './app.module.css';

const App = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <Container>
          <FilterList />
        </Container>
      </Main>
      <Footer />
    </Layout>
  );
};

export default App;

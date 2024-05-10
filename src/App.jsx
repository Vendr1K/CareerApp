import { Header, Footer, Layout, Main, FilterList, VacancyList } from './components';
import { Container } from './components/UI';

const App = () => {

  const mockData = [
    {
      data: 'сегодня, 28 апреля',
      vacancy: [
        {
          title: 'Junior Frontend-разработчик и еще много текста',
          income: {
            minValue: '30 000',
            maxValue: '70 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '1',
            maxValue: '3'
          }
        },
        {
          title: 'Middle React',
          income: {
            maxValue: '180 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '3',
          }
        },
        {
          title: 'Middle Frontend React',
          income: null,
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: null
        },
        {
          title: 'Junior Frontend-разработчик и еще много текста',
          income: {
            minValue: '30 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '1',
            maxValue: '3'
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: {
            minValue: '120 000',
            maxValue: '180 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '3',
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: null,
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: null
        },
        {
          title: 'Junior Frontend-разработчик и еще много текста',
          income: {
            minValue: '30 000',
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '1',
            maxValue: '3'
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: {
            minValue: '120 000',
            maxValue: '180 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '3',
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: null,
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: null
        },
        {
          title: 'Junior Frontend-разработчик и еще много текста',
          income: {
            maxValue: '70 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '1',
            maxValue: '3'
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: {
            minValue: '120 000',
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '3',
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: null,
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: null
        },

      ]
    },
    {
      data: '27 апреля',
      vacancy: [
        {
          title: 'Junior Frontend-разработчик и еще много текста',
          income: {
            minValue: '30 000',
            maxValue: '70 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '1',
            maxValue: '3'
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: {
            minValue: '120 000',
            maxValue: '180 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '3',
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: null,
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: null
        },
        {
          title: 'Junior Frontend-разработчик и еще много текста',
          income: {
            minValue: '30 000',
            maxValue: '70 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '1',
            maxValue: '3'
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: {
            minValue: '120 000',
            maxValue: '180 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '3',
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: null,
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: null
        },
        {
          title: 'Junior Frontend-разработчик и еще много текста',
          income: {
            minValue: '30 000',
            maxValue: '70 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '1',
            maxValue: '3'
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: {
            minValue: '120 000',
            maxValue: '180 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '3',
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: null,
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: null
        },
        {
          title: 'Junior Frontend-разработчик и еще много текста',
          income: {
            minValue: '30 000',
            maxValue: '70 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '1',
            maxValue: '3'
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: {
            minValue: '120 000',
            maxValue: '180 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '3',
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: null,
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: null
        },

      ]
    },
    {
      data: '26 апреля',
      vacancy: [
        {
          title: 'Junior Frontend-разработчик и еще много текста',
          income: {
            minValue: '30 000',
            maxValue: '70 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '1',
            maxValue: '3'
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: {
            minValue: '120 000',
            maxValue: '180 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '3',
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: null,
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: null
        },
        {
          title: 'Junior Frontend-разработчик и еще много текста',
          income: {
            minValue: '30 000',
            maxValue: '70 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '1',
            maxValue: '3'
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: {
            minValue: '120 000',
            maxValue: '180 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '3',
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: null,
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: null
        },
        {
          title: 'Junior Frontend-разработчик и еще много текста',
          income: {
            minValue: '30 000',
            maxValue: '70 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '1',
            maxValue: '3'
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: {
            minValue: '120 000',
            maxValue: '180 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '3',
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: null,
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: null
        },
        {
          title: 'Junior Frontend-разработчик и еще много текста',
          income: {
            minValue: '30 000',
            maxValue: '70 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '1',
            maxValue: '3'
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: {
            minValue: '120 000',
            maxValue: '180 000'
          },
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: {
            minValue: '3',
          }
        },
        {
          title: 'Middle Frontend React разработчик и еще много текста',
          income: null,
          company: 'АО Группа компаний Орион',
          city: 'Москва',
          exp: null
        },

      ]
    }
  ]

  return (
    <Layout>
      <Header />
      <Main>
        <Container>
          <FilterList />
          <VacancyList data={mockData} />
        </Container>
      </Main>
      <Footer />
    </Layout>
  );
};

export default App;

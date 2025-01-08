import { useEffect, useState } from 'react'
import { Icon, VacancyDetail } from '@components'
import { Button, Container } from '@components/UI'
import { fetchDetailVacancyInfo } from '@services'
import { APP_PAGE } from '@constans'
import { useRoute } from '@hooks'
import { Nullable } from '@types'
import { DetailVacancy } from '@models'

import styles from './Vacancy.module.css'

export const Vacancy = () => {
  const [vacancyData, setVacancyData] = useState<Nullable<DetailVacancy>>(null)
  const [isLoading, setIsLoading] = useState(true)

  const { navigate, goBack } = useRoute()
  const vacancyId = new URLSearchParams(window.location.search).get('id')
  useEffect(() => {
    if (!vacancyId) {
      navigate(APP_PAGE.main);
      return;
    }
    const fetchVacancy = async () => {
      try {
        setIsLoading(true);
        const res = await fetchDetailVacancyInfo(vacancyId);
        setVacancyData(res);
      } catch (error) {
        console.error("Ошибка при загрузке вакансии:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVacancy();
  }, [vacancyId]);

  return (
    <Container>
      <Button
        className={styles.backBtn}
        onClick={goBack}
      >
        <Icon className={styles.icon} name='arrow' />
        <span>К результатам поиска</span>
      </Button>
      {/* dev */}
      {isLoading && <>isLoading</>}
      {vacancyData && <VacancyDetail vacancyDetail={vacancyData} />}
    </Container>
  )
}

import { Icon } from '@components'
import { formatDate, formatSalary } from '@utils'
import { VacancyDetailProps } from '@props'

import styles from './VacancyDetail.module.css'

export const VacancyDetail = ({ vacancyDetail }: VacancyDetailProps) => {
  return (
    <div className={styles.content}>
      <div className={styles.leftSite}>
        <div>
          <h2 className={styles.title}>{vacancyDetail.name}</h2>
          <span className={styles.salary}>
            {formatSalary(vacancyDetail.salary)}
          </span>
        </div>
        <div className={styles.requirements}>
          <h4>Требования к вакансии</h4>
          <ul className={styles.requirementsList}>
            {vacancyDetail.requirements?.map((item, index) => {
              return (
                <li key={index} className={styles.requirementsItem}>
                  <Icon className={styles.icon} name={item.icon} />
                  <span>{item.name}</span>
                </li>
              )
            })}
          </ul>
        </div>
        {/* <button
          className={`${styles.btn} ${styles.hidBtn}`}
        onClick={() => toggleToBlackList(vacancyDetail.id)}
        >
          {blackList.includes(vacancyDetail.id) ? (
            <>
              <EyeSVG className={styles.btnIcon} />
              Показать
            </>
          ) : (
            <>
              <HoverSVG className={styles.btnIcon} />
              Скрыть
            </>
          )}
        </button> */}
        <div className={styles.descr}>
          <h3 className={styles.titleDescr}>Описание</h3>
          {vacancyDetail.description && (
            <div
              dangerouslySetInnerHTML={{ __html: vacancyDetail.description }}
            />
          )}
        </div>
        <div className={styles.skillBlock}>
          {vacancyDetail.key_skills?.length > 0 && (
            <div>
              <h3 className={styles.skillTitle}>Ключевые навыки</h3>
              <ul className={styles.skillList}>
                {vacancyDetail.key_skills.map((item, index) => {
                  return (
                    <li key={index} className={styles.skillItem}>
                      {item.name}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
          <div className={styles.published}>
            Ваканися опубликована{' '}
            {
              formatDate({ dateString: vacancyDetail.published_at, full: true })
                .formatDate
            }
            {vacancyDetail.area && ` в г. ${vacancyDetail.area}`}
          </div>
        </div>
      </div>
      <div className={styles.rigntSite}>
        {vacancyDetail.logo && (
          <img className={styles.logo} src={vacancyDetail.logo} alt='Лого' />
        )}
        <span className={styles.company}>{vacancyDetail.company}</span>
        <span className={styles.address}>{vacancyDetail.address}</span>
      </div>
    </div>
  )
}

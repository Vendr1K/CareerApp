import { NULL_FILTER, QUERY_TEXT } from './app'

const dataBagFilter = {
  type: 'checkbox',
  query: 'employment',
  filterOptions: [
    { value: 'Полная занятость', id: 'full' },
    { value: 'Частичная занятость', id: 'part' },
    { value: 'Стажировка', id: 'probation' },
    { value: 'Проектная работа', id: 'project' }
  ]
}

const dataTechnologiesFilter = {
  type: 'checkbox',
  query: QUERY_TEXT,
  filterOptions: [
    { value: 'jQuery', id: 'jquery' },
    { value: 'JavaScript', id: 'js' },
    { value: 'CSS3', id: 'css3' },
    { value: 'React', id: 'react' },
    { value: 'Git', id: 'git' },
    { value: 'Vue', id: 'vue' },
    { value: 'FlexBox', id: 'flexbox' },
    { value: 'HTML5', id: 'html5' }
  ]
}

const dataDatePublished = {
  type: 'radio',
  query: 'period',
  filterOptions: [
    { value: 'За все время', id: NULL_FILTER },
    { value: 'За месяц', id: '30' },
    { value: 'За неделю', id: '7' },
    { value: 'За последние 3 дня', id: '3' },
    { value: 'За стуки', id: '1' }
  ]
}

const dataDateExp = {
  type: 'radio',
  query: 'experience',
  filterOptions: [
    { value: 'Не имеет значения', id: NULL_FILTER },
    { value: 'Нет опыта', id: 'noExperience' },
    { value: 'От 1 года до 3 лет', id: 'between1And3' },
    { value: 'От 3 до 6 лет', id: 'between3And6' },
    { value: 'Более 6 лет', id: 'moreThan6' }
  ]
}

const dataTime = {
  type: 'checkbox',
  query: 'schedule',
  filterOptions: [
    { value: 'Полный день', id: 'fullDay' },
    { value: 'Вахтовый метод', id: 'flyInFlyOut' },
    { value: 'Сменный график', id: 'shift' },
    { value: 'Гибкий график', id: 'flexible' },
    { value: 'Удаленная работа', id: 'remote' }
  ]
}

const dataEducation = {
  type: 'checkbox',
  query: 'education',
  filterOptions: [
    {
      value: 'Не требуется или не указано',
      id: 'not_required_or_not_specified'
    },
    { value: 'Среднее профессиональное', id: 'special_secondary' },
    { value: 'Высшее', id: 'higher' }
  ]
}

const dataIncomeLvl = {
  type: 'radio',
  query: 'salary',
  filterOptions: [
    { value: 'Не имеет значения', id: NULL_FILTER },
    { value: 'От 25 000 ₽', id: '25000' },
    { value: 'От 50 000 ₽', id: '50000' },
    { value: 'От 100 000 ₽', id: '100000' },
    { value: 'От 150 000 ₽', id: '150000' },
    {
      value: 'Указан доход',
      extraQuery: 'only_with_salary',
      id: 'true',
      extraType: 'checkbox'
    }
  ]
}

const dataPartTime = {
  type: 'checkbox',
  query: 'part_time',
  filterOptions: [
    { value: 'Неполный день', id: 'employment_part' },
    { value: 'От 4 часов в день', id: 'from_four_to_six_hours_in_a_day' },
    { value: 'По вечерам', id: 'start_after_sixteen' },
    { value: 'По выходным', id: 'only_saturday_and_sunday' },
    { value: 'Разовое задание', id: 'employment_project' }
  ]
}

const dataOther = {
  type: 'checkbox',
  query: 'label',
  filterOptions: [
    { value: 'Доступные людям с инвалидностью', id: 'accept_handicapped' },
    { value: 'Скрытие вакансии', id: 'hidden' },
    { value: 'От аккредитованных IT компаний', id: 'accredited_it' },
    { value: 'Без вакансий от кадровых агенств', id: 'not_from_agency' }
  ]
}

const dataOptionalFilter = [
  {
    id: 2,
    text: 'Теги технологий',
    icon: 'tagtech',
    extraIcon: 'arrow',
    filterItem: dataTechnologiesFilter
  },
  {
    id: 3,
    text: 'Дата публикации',
    icon: 'datepublished',
    extraIcon: 'arrow',
    filterItem: dataDatePublished
  },
  {
    id: 4,
    text: 'Опыт работы',
    icon: 'time',
    extraIcon: 'arrow',
    filterItem: dataDateExp
  },
  {
    id: 5,
    text: 'График работы',
    icon: 'exp',
    extraIcon: 'arrow',
    filterItem: dataTime
  },
  {
    id: 6,
    text: 'Образование',
    icon: 'education',
    extraIcon: 'arrow',
    filterItem: dataEducation
  },
  {
    id: 9,
    text: 'Подработка',
    icon: 'parttime',
    extraIcon: 'arrow',
    filterItem: dataPartTime
  },
  {
    id: 8,
    text: 'Другие параметры',
    icon: 'other',
    extraIcon: 'arrow',
    filterItem: dataOther
  },
  {
    id: 7,
    text: 'Уровень дохода',
    icon: 'finance',
    extraIcon: 'arrow',
    filterItem: dataIncomeLvl
  }
]

export const DATA_ADDITIONAL_FILTER = [
  {
    id: 3,
    text: 'Дополнительные фильтры',
    icon: 'optional',
    extraIcon: 'arrow',
    filterList: dataOptionalFilter
  }
]

export const DATA_BAG_FILTER = [
  {
    id: 2,
    text: 'Тип занятости',
    icon: 'bag',
    extraIcon: 'arrow',
    filterItem: dataBagFilter
  }
]

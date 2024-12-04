const dataBagFilter = {
  type: 'checkbox',
  filterOptions: [
    { value: 'Полная занятость', id: 'fullTime' },
    { value: 'Частичная занятость', id: 'partTime' },
    { value: 'Стажировка', id: 'internship' },
    { value: 'Проектная работа', id: 'projectWork' }
  ]
}

const dataTechnologiesFilter = {
  type: 'checkbox',
  filterOptions: [
    { value: 'jQuery', id: 'jQuery' },
    { value: 'JavaScript', id: 'JavaScript' },
    { value: 'CSS3', id: 'CSS3' },
    { value: 'React', id: 'React' },
    { value: 'Git', id: 'Git' },
    { value: 'Vue', id: 'Vue' },
    { value: 'FlexBox', id: 'FlexBox' },
    { value: 'HTML5', id: 'HTML5' }
  ]
}

const dataDatePublished = {
  type: 'radio',
  filterOptions: [
    { value: 'За все время', id: 'allTime' },
    { value: 'За месяц', id: 'LastMonth' },
    { value: 'За неделю', id: 'lastWeek' },
    { value: 'За последние 3 дня', id: 'lastThreeDAys' },
    { value: 'За стуки', id: 'lastday' }
  ]
}

const dataDateExp = {
  type: 'radio',
  filterOptions: [
    { value: 'Не имеет значения', id: 'notImportant' },
    { value: 'Нет опыта', id: 'notExp' },
    { value: 'От 1 года до 3 лет', id: '1-3' },
    { value: 'От 3 до 6 лет', id: '3-6' },
    { value: 'Более 6 лет', id: 'more' }
  ]
}

const dataTime = {
  type: 'checkbox',
  filterOptions: [
    { value: 'Полный день', id: 'fullTime' },
    { value: 'Вахтовый метод', id: 'shiftMonth' },
    { value: 'Сменный график', id: 'shift' },
    { value: 'Гибкий график', id: 'flex' },
    { value: 'Удаленная работа', id: 'remote' }
  ]
}

const dataEducation = {
  type: 'checkbox',
  filterOptions: [
    { value: 'Не требуется или не указано', id: 'any' },
    { value: 'Срднее профессиональное', id: 'normal' },
    { value: 'Высшее', id: 'hight' }
  ]
}

const dataIncomeLvl = {
  type: 'radio',
  filterOptions: [
    { value: 'Не имеет значения', id: 'any' },
    { value: 'От 25 000 ₽', id: '25000' },
    { value: 'От 50 000 ₽', id: '50000' },
    { value: 'От 100 000 ₽', id: '100000' },
    { value: 'От 150 000 ₽', id: '150000' },
    { value: 'Указан доход', id: 'something', extraType: 'checkbox' }
  ]
}

const dataPartTime = {
  type: 'checkbox',
  filterOptions: [
    { value: 'Неполный день', id: 'any' },
    { value: 'От 4 часов в день', id: 'half' },
    { value: 'По вечерам', id: 'evening' },
    { value: 'По выходным', id: 'weekend' },
    { value: 'Разовое задание', id: 'oneQuest' }
  ]
}

const dataOther = {
  type: 'checkbox',
  filterOptions: [
    { value: 'Доступные людям с инвалидностью', id: 'availability' },
    { value: 'Скрытие вакансии', id: 'hidden' },
    { value: 'От 4 часов в день', id: 'halfOther' },
    { value: 'От аккредитованных IT компаний', id: 'accredited' },
    { value: 'Без вакансий от кадровых агенств', id: 'noRecruitmentAgency' }
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
    id: 7,
    text: 'Уровень дохода',
    icon: 'finance',
    extraIcon: 'arrow',
    filterItem: dataIncomeLvl
  },
  {
    id: 8,
    text: 'Другие параметры',
    icon: 'other',
    extraIcon: 'arrow',
    filterItem: dataOther
  }
]

export const dataAdditionalFilter = [
  {
    id: 3,
    text: 'Дополнительные фильтры',
    icon: 'optional',
    extraIcon: 'arrow',
    filterList: dataOptionalFilter
  }
]

export const bagDataFilter = [
  {
    id: 2,
    text: 'Тип занятости',
    icon: 'bag',
    extraIcon: 'arrow',
    filterItem: dataBagFilter
  }
]

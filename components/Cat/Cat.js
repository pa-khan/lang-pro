import top from '@/data/top.json';

export default {
  name: 'Cat',
  data() {
    return {
      list: top,
      langs: {
        value: 'all',
        list: [
          {
            title: 'Все',
            type: 'all'
          },
          {
            title: 'Китайский',
            type: 'cn'
          },
          {
            title: 'Английский',
            type: 'en'
          },
          {
            title: 'Немецкий',
            type: 'de'
          },
          {
            title: 'Испанский',
            type: 'es'
          },
        ]
      },
      filter: [
        {
          title: 'Уровень',
          type: 'level',
          list: [
            {
              title: 'Начальный',
              name: 'start',
              value: false,
            },
            {
              title: 'Средний',
              name: 'middle',
              value: false,
            },
            {
              title: 'Высокий',
              name: 'hight',
              value: false,
            },
          ]
        },
        {
          title: 'Для каких целей',
          type: 'goal',
          list: [
            {
              title: 'Школа',
              name: 'school',
              value: false,
            },
            {
              title: 'Студенты',
              name: 'studient',
              value: false,
            },
            {
              title: 'Эмигрантам',
              name: 'emigrant',
              value: false,
            },
            {
              title: 'Общение',
              name: 'communication',
              value: false,
            },
            {
              title: 'Бизнес и работа',
              name: 'business',
              value: false,
            },
            {
              title: 'Путешествие',
              name: 'travel',
              value: false,
            },
          ]
        }
      ]
    }
  }
}

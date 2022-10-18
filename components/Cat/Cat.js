import top from '@/data/top.json';

export default {
  name: 'Cat',
  data() {
    return {
      isFilterShow: false,
      list: top,
      langText: 'Все',
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
  },
  methods: {
    resetFilter() {
      this.filter.forEach((filterItem) => {
        console.log(filterItem);
        filterItem.list.forEach((item) => {
          console.log(item);
          item.value = false;
        });
      });

      this.langs.value = 'all';
      this.langText = 'Все'
    }
  },
  watch: {
    isFilterShow() {
      const classOverflowDisabled = 'overflow-disabled';
      const body = document.body;

      if (this.isFilterShow) {
        body.classList.add(classOverflowDisabled);
      } else {
        body.classList.remove(classOverflowDisabled);
      }
    },

  }
}

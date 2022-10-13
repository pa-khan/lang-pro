export default {
  name: 'Card',
  data() {
    return {
      data: []
    }
  },
  computed: {
    label() {
      let word;

      switch (this.element.level) {
        case "start":
          word = "Для начинающих";
          break;
        case "middle":
          word = "Для среднего уровня";
          break;
        case "hight":
          word = "Для высокого уровня";
          break;
      }

      return word;
    }


  },
  methods: {
    setDataElement(key = '', title = '') {
      if (!this.element[key]) {
        return false;
      }

      this.data.push({
        title,
        value: this.element[key]
      });
    }
  },
  created() {
    this.setDataElement('lessons', 'Уроков');
    this.setDataElement('tasks', 'Заданий');
    this.setDataElement('tests', 'Тестов');
    this.setDataElement('expert', 'Занятий с экспертом');
  },
  props: {
    element: Object
  }
}

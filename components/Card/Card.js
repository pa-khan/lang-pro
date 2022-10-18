import Swiper, { Pagination } from 'swiper';
import 'swiper/css';

export default {
  name: 'Card',
  data() {
    return {
      data: [],
      how: [
        {
          title: 'Онлайн-платформа <br>для обучения и выполнения заданий',
          desc: '',
          img: 'how-1.png'
        },
        {
          title: 'Полностью <br>интерактивный формат',
          desc: '(3D-учитель расскажет вам весь материал)',
          img: 'how-2.png'
        },
        {
          title: 'Видео чат для общения <br>с сокурсниками',
          desc: '',
          img: 'how-3.png'
        },

      ]
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
  mounted() {
    new Swiper(this.$refs.reviewsSlider, {
      enabled: true,
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: this.$refs.reviewsPagination,
        type: 'bullets',
        clickable: true,
      },
      modules: [Pagination],
      breakpoints: {
        769: {
          enabled: false,
          slidesPerView: 'auto',
        },
      }
    })

  },
  props: {
    element: Object
  }
}

import Swiper, { Pagination } from 'swiper';
import 'swiper/css';

export default {
  name: 'Audience',
  data() {
    return {
      list: [
        {
          title: 'Школьникам',
          text: 'Сдать выпускные экзамены или поступить в ВУЗ.',
          icon: 'presentation.svg',
          mode: 'purple'
        },
        {
          title: 'Студентам',
          text: 'Переехать на обучение в другую страну или найти высокооплачеваемую работу',
          icon: 'graduation-cap.svg',
          mode: 'blue'
        },
        {
          title: 'Эмигрантам',
          text: 'Адаптироваться в новой стране, создать конкурентное преимущество и трудоустроиться',
          icon: 'map-marker.svg',
          mode: 'yellow'
        },
        {
          title: 'Общительным',
          text: 'Создать счастливую семью с иностранцем и интегрироваться в новое общество',
          icon: 'chat.svg',
          mode: 'red'
        },
        {
          title: 'Бизнесменам',
          text: 'Завести полезные знакомства среди иностранцев и масштабировать бизнес',
          icon: 'briefcase.svg',
          mode: 'blue'
        },
        {
          title: 'Путешественникам',
          text: 'Свободно общаться и находить новых друзей, решать бытовые вопросы и спорные ситуации',
          icon: 'ship.svg',
          mode: 'purple'
        },
      ]
    }
  },
  mounted() {
    new Swiper(this.$refs.slider, {
      enabled: true,
      autoHeight: true,
      slidesPerView: 'auto',
      spaceBetween: 8,
      breakpoints: {
        769: {
          enabled: false,
          spaceBetween: 0,
        },
      }
    })
  }
}

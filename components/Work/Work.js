import Swiper, { Pagination } from 'swiper';
import 'swiper/css';

export default {
  name: 'Work',
  data() {
    return {
      list: [
        {
          name: 'Регистрация',
          text: '<p>Выбирайте интересующий язык и регистрируйтесь.</p>',
          img: 'work-1.png'
        },
        {
          name: 'Регистрация',
          text: '<p>Выбирайте интересующий язык и регистрируйтесь.</p>',
          img: 'work-1.png'
        },
        {
          name: 'Обучение',
          text: '<p>Всё! Приступайте к первому бесплатному уроку.</p>',
          img: 'work-1.png'
        },
      ]
    }
  },
  mounted() {
    new Swiper(this.$refs.slider, {
      enabled: true,
      autoHeight: true,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: this.$refs.pagination,
        type: 'bullets',
        clickable: true,
      },
      modules: [Pagination],
      breakpoints: {
        769: {
          slidesPerView: 'auto',
          enabled: false,
          spaceBetween: 0,
        },
      }
    })
  }
}

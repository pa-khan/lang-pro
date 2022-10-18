import Swiper, { Pagination } from 'swiper';
import 'swiper/css';

export default {
  name: 'Team',
  data() {
    return {
      list: [
        {
          name: 'Агасси Мартиросян',
          desc: 'Преподаватель армянского',
          img: 'team-1.jpg'
        },
        {
          name: 'Валентина Набрежная',
          desc: 'Преподаватель английского',
          img: 'team-2.jpg'
        },
        {
          name: 'Владимир Путин',
          desc: 'Преподаватель русского',
          img: 'team-3.jpg'
        },
        {
          name: 'Елена Руппс',
          desc: 'Преподаватель немецкого',
          img: 'team-4.jpg'
        },
      ]
    }
  },
  mounted() {
    new Swiper(this.$refs.slider, {
      enabled: true,
      autoHeight: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      breakpoints: {
        769: {
          enabled: false,
          spaceBetween: 0,
        },
      }
    })
  }
}

import Swiper, { Pagination } from 'swiper';
import 'swiper/css';

export default {
  name: 'Similar',
  props: {
    list: Array
  },
  mounted() {
    new Swiper(this.$refs.slider, {
      enabled: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      breakpoints: {
        769: {
          enabled: false,
        },
      }
    })

  },
}

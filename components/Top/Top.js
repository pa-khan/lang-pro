import Swiper, { Pagination } from 'swiper';
import 'swiper/css';

import top from '@/data/top.json';

export default {
  name: 'Top',
  data() {
    return {
      list: top
    }
  },
  mounted() {
    new Swiper(this.$refs.slider, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: this.$refs.pagination,
        type: 'bullets',
        clickable: true,
      },
      modules: [Pagination],
      breakpoints: {
        769: {
          spaceBetween: 40,
          slidesPerView: 2,
        },
        1481: {
          slidesPerView: 3,
        }
      }
    })

  }
}

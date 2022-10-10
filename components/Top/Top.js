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
      slidesPerView: 3,
      spaceBetween: 40,
      pagination: {
        el: this.$refs.pagination,
        type: 'bullets',
        clickable: true,
      },
      modules: [Pagination]
    })

  }
}

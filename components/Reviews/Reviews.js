import Swiper, { Pagination } from 'swiper';
import 'swiper/css';

import top from '@/data/reviews.json';

export default {
  name: 'Reviews',
  data() {
    return {
      list: top
    }
  },
  mounted() {
    new Swiper(this.$refs.slider, {
      autoHeight: true,
      slidesPerView: 1,
      pagination: {
        el: this.$refs.pagination,
        type: 'bullets',
        clickable: true,
      },
      modules: [Pagination]
    })

  }
}

import { toLink } from '~/utils';

export default {
  name: 'Nav',
  data() {
    return {
      links: [
        {
          title: 'Курсы',
          href: '/catalog',
        },
        {
          title: 'О нас',
          href: '/about/',
        },
        {
          title: 'Блог',
          href: '/blog/',
        },
        {
          title: 'Еще',
          href: '#',
          isOpen: false,
          sub: [
            {
              title: 'FAQ',
              href: '/faq/',
            },
            {
              title: 'Контакты',
              href: '/contacts/',
            },
            {
              title: 'Условия оплаты',
              href: '/pay/',
            },
          ]
        },
      ]
    }
  },
  methods: {
    toLink
  }
}

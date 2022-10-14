import { toLink } from '~/utils';

export default {
  name: 'Nav',
  data() {
    return {
      lastOpenSubNavLink: null,
      links: [
        {
          title: 'Курсы',
          href: '/catalog',
        },
        {
          title: 'О нас',
          href: '/about',
        },
        {
          title: 'Блог',
          href: '/blog',
        },
        {
          title: 'Еще',
          href: '#',
          isOpen: false,
          sub: [
            {
              title: 'FAQ',
              href: '/faq',
            },
            {
              title: 'Контакты',
              href: '/contacts',
            },
            {
              title: 'Условия оплаты',
              href: '/pay',
            },
          ]
        },
      ]
    }
  },
  methods: {
    toLink,
    toggleNav(link) {
      this.lastOpenSubNavLink = link;
      link.isOpen = !link.isOpen;
    },
  },
  mounted() {
    document.addEventListener('click', (event) => {

      if (this.lastOpenSubNavLink && !event.target.closest('.nav__item')) {
        this.lastOpenSubNavLink.isOpen = false;
        this.lastOpenSubNavLink = null;
      }

    });
  }
}

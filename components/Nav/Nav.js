import { toLink } from '~/utils';

export default {
  name: 'Nav',
  setup() {
    const isNavShow = useState('isNavShow');
    return {
      isNavShow
    }
  },
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

      this.isNavShow = false;
    },
    resetNav() {
      if (this.lastOpenSubNavLink?.isOpen) {
        this.lastOpenSubNavLink.isOpen = false;
        this.lastOpenSubNavLink = null;
      }
    },

    closeSubNav(link) {
      link.isOpen = false;
      this.isNavShow = false;

      this.resetNav();

    }

  },
  mounted() {
    document.addEventListener('click', (event) => {

      if (this.lastOpenSubNavLink && !event.target.closest('.nav__item')) {
        this.resetNav();
      }

    });
  }
}

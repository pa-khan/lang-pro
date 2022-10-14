import articles from '@/data/blog.json';

export default {
  name: 'Blog',
  data() {
    return {
      list: articles,
      cats: {
        value: 'all',
        list: [
          {
            title: 'Все',
            type: 'all'
          },
          {
            title: 'Новости',
            type: 'news'
          },
          {
            title: 'Статьи',
            type: 'article'
          },
          {
            title: 'Интересное',
            type: 'intresting'
          },
        ]
      }
    }
  }
}

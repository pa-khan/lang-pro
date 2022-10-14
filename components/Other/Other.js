export default {
  name: 'Other',
  methods: {
    getLabel(value) {
      let label;
      switch (value) {
        case "news":
          label = 'Новость';
          break;
        case "article":
          label = 'Статья';
          break;
        case "intresting":
          label = 'Интересное';
          break;
      }

      return label;
    },
    getLabelClass(value) {
      let cls;
      switch (value) {
        case "news":
          cls = '--violet';
          break;
        case "article":
          cls = '--blue';
          break;
        case "intresting":
          cls = '--pink';
          break;
      }

      return cls;
    }
  },
  props: {
    list: Array
  }
}

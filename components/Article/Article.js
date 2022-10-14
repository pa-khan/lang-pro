export default {
  name: 'Article',
  computed: {
    label() {
      let label;
      switch (this.element.label) {
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
    labelClass() {
      let cls;
      switch (this.element.label) {
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
    element: Object
  }
}

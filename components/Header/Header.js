export default {
  name: 'Header',
  setup() {
    const isNavShow = useState('isNavShow', () => false);
    return {
      isNavShow
    }
  },
  watch: {
    isNavShow() {
      const classOverflowDisabled = 'overflow-disabled';
      const body = document.body;

      if (this.isNavShow) {
        body.classList.add(classOverflowDisabled);
      } else {
        body.classList.remove(classOverflowDisabled);
      }
    }
  }
}

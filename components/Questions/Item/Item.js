export default {
  name: 'Item',
  data() {
    return {
      classOpen: '--open',
      classShow: '--show',
      classHide: '--hide',
      isOpen: false,
      isShow: false,
      isHide: false
    }
  },
  methods: {
    toggleBlock() {
      this.isOpen = !this.isOpen;

      if (this.isOpen) {
        this.showBlock();
      } else {
        this.hideBlock();
      }

    },
    showBlock() {
      this.$refs.body.style.height = 0 + 'px';

      let percentHeight = this.$refs.body.scrollHeight / 20;
      let blockHeight = 0;

      let interval = setInterval(() => {
        blockHeight += percentHeight;
        this.$refs.body.style.height = blockHeight + 'px';

        if (blockHeight >= this.$refs.body.scrollHeight) {
          this.$refs.body.style.height = percentHeight + 'px';
          this.isShow = true;
          this.$refs.body.removeAttribute('style');
          this.isHide = false;
          clearInterval(interval);
        }
      }, 10);
    },
    hideBlock() {
      let percentHeight = this.$refs.body.offsetHeight / 20;
      let blockHeight = this.$refs.body.offsetHeight;

      let interval = setInterval(() => {
        blockHeight -= percentHeight;
        this.$refs.body.style.height = blockHeight + 'px';

        if (blockHeight <= 0) {
          this.$refs.body.style.height = 0 + 'px';
          this.isHide = true;
          this.$refs.body.removeAttribute('style');
          this.isShow = false;
          clearInterval(interval);
        }
      }, 10);

    }
  },
  props: {
    title: String,
    text: String
  }
}

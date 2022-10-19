import { toLink } from "~/utils";

export default {
  name: 'Product',
  data() {
    return {
      mods: {
        blue: '--blue',
        red: '--red',
        violet: '--violet',
      }
    }
  },
  computed: {
    bgMode() {
      let mode;

      switch (this.element.lang) {
        case "de":
          mode = this.mods.blue;
          break;
        case "cn":
          mode = this.mods.red;
          break;
        case "es":
          mode = this.mods.violet;
          break;
      }

      return mode;
    },
    imgUrl () {
      return new URL(`assets/images/flags/${this.element.lang}.png`, import.meta.url).href;
    }
  },
  methods: {
    toLink
  },
  props: {
    element: Object
  }
}

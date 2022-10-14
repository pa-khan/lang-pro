export default {
  name: 'Field',
  data() {
    return {

      isFilled: false,
      isFocus: false,
    }
  },
  methods: {
    updateValue(value) {
      if (value != '') {
        this.isFilled = true;
      } else {
        this.isFilled = false;
      }

      this.$emit('update:value', value);
    }
  },
  props: {
    type: String,
    title: String,
    placeholder: String,
    value: String,
  },
  emits: [
    'update:value'
  ]
}

export default {
  name: 'Checkbox',
  data() {
    return {
      classChecked: '--checked'
    }
  },
  props: {
    value: String,
    group: String,
    checked: Boolean
  },
  emits: ['update:checked'],
  methods: {
    toggleChecked() {
      this.$emit('update:checked', !this.checked);
    }
  }
}

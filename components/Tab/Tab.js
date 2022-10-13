export default {
  name: 'Tab',
  emits: [
    'update:value'
  ],
  props: {
    value: String,
    type: String,
    title: String,
  }
}

export default {
  name: 'Field',
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

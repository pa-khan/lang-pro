export default {
  name: 'Form',
  data() {
    return {
      inputName: '',
      inputPhone: '',
      policy: false,
    }
  },
  props: {
    title: String,
    desc: String
  }
}

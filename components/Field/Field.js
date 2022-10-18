import IMask from 'imask';

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
      this.value = value;
      this.$emit('update:modelValue', value);
    }
  },
  mounted() {
    if (this.validation) {
      switch (this.validation) {
        case "phone":
          IMask(this.$refs.area, {
            mask: '+{7} (900) 000-00-00'
          })
      }
    }

  },
  props: {
    type: String,
    title: String,
    placeholder: String,
    modelValue: String,
    validation: String,
    maxlength: Number
  },
  emits: [
    'update:modelValue'
  ]
}

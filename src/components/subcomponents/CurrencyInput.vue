<template>
  <div>
    <label v-if="label">{{ label }}</label>
    $
    <input
      ref="input"
      v-bind:value="value"
      v-on:input="updateValue($event.target.value)"
      v-on:focus="selectAll"
      v-on:blur="formatValue"
    >
  </div>
</template>

<script>
export default {
  name: 'CurrencyInput',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    label: {
      type: String,
      default: '',
    },
  },
  mounted() {
    this.formatValue();
  },
  created() {
    const currencyValidator = document.createElement('script');
    currencyValidator.setAttribute(
      'src',
      'https://cdn.rawgit.com/chrisvfritz/5f0a639590d6e648933416f90ba7ae4e/raw/974aa47f8f9c5361c5233bd56be37db8ed765a09/currency-validator.js',
    );
    document.head.appendChild(currencyValidator);
  },
  methods: {
    updateValue(value) {
      // eslint-disable-next-line no-undef
      const result = currencyValidator.parse(value, this.value);
      if (result.warning) {
        this.$refs.input.value = result.value;
      }
      this.$emit('input', result.value);
    },
    formatValue() {
      // eslint-disable-next-line no-undef
      this.$refs.input.value = currencyValidator.format(this.value);
    },
    selectAll() {
      // Workaround for Safari bug
      // http://stackoverflow.com/questions/1259722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
      setTimeout(() => {
        event.target.select();
      }, 0);
    },
  },
};
</script>

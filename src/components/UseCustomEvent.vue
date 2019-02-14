<template>
  <div class="demoMain">
    <div class="demo">
      <currency-input label="Price" v-model="price"></currency-input>
      <currency-input label="Shipping" v-model="shipping"></currency-input>
      <currency-input label="Handling" v-model="handling"></currency-input>
      <currency-input label="Discount" v-model="discount"></currency-input>

      <p>Total: ${{ total }}</p>
    </div>
  </div>
</template>

<script>
import CurrencyInput from './subcomponents/CurrencyInput';

export default {
  name: 'UseCustomEvent',
  components: {
    'currency-input': CurrencyInput,
  },
  data() {
    return {
      price: 0,
      shipping: 0,
      handling: 0,
      discount: 0,
    };
  },
  computed: {
    total() {
      /* eslint-disable no-mixed-operators */
      return (
        (this.price * 100 +
          this.shipping * 100 +
          this.handling * 100 -
          this.discount * 100) /
        100
      ).toFixed(2);
    },
  },
};
</script>

<style scoped>
.demoMain {
  width: 100%;
  text-align: -webkit-center;
}
.demo {
  font-size: 28px;
  font-weight: bold;
  color: chocolate;
  width: 500px;
  border: 1px solid rgb(83, 255, 4);
  border-radius: 2px;
  padding: 2px 3px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow-x: auto;
}
</style>


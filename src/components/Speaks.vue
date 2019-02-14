<template>
  <doggie :size.sync="size" :color.sync="color"/>
</template>

<script>
import Doggie from './subcomponents/Doggie';

export default {
  name: 'Speaks',
  components: {
    doggie: Doggie,
  },
  data() {
    return {
      size: 'big',
      color: 'brown',
    };
  },
  mounted() {
    setInterval(() => {
      // eslint-disable-next-line no-console
      console.log('size', this.size, 'color', this.color);
    }, 3000);
  },
};
</script>

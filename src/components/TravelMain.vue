<template>
  <div>
    <TravelMap class="travel-map"/>
  </div>
</template>

<script>
import TravelMap from './TravelMap';

export default {
  name: 'TravelMain',
  components: {
    TravelMap,
  },
};
</script>

<style lang="scss" scoped>
.travel-map {
  height: 400px;
}
</style>

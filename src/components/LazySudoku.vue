<template>
  <div class="main">
    <div id="sudoku-demo" class="demo">
      <h1>Lazy Sudoku</h1>
      <p>Keep hitting the shuffle button until you win.</p>

      <button @click="shuffle">Shuffle</button>
      <transition-group name="cell" tag="div" class="container">
        <div v-for="cell in cells" :key="cell.id" class="cell">{{ cell.number }}</div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SudokuDemo',
  data() {
    return {
      cells: Array(...{ length: 81 }).map((_, index) => ({
        id: index,
        number: (index % 9) + 1,
      })),
    };
  },
  methods: {
    shuffle() {
      this.cells = this.lodash.shuffle(this.cells);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  text-align: -webkit-center;
}
.container {
  display: flex;
  flex-wrap: wrap;
  width: 238px;
  margin-top: 10px;
}
.cell {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaa;
  margin-right: -1px;
  margin-bottom: -1px;
}
.cell:nth-child(3n) {
  margin-right: 0;
}
.cell:nth-child(27n) {
  margin-bottom: 0;
}
.cell-move {
  transition: transform 1s;
}
</style>

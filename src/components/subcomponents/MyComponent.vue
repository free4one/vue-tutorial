<template>
  <div id="example">
    <h2>나는 자식 컴포넌트의 제목입니다.</h2>
    <slot>제공된 컨텐츠가 없는 경우에만 보실 수 있습니다.</slot>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      title: '사용자 정의 컴포넌트 입니다!',
    };
  },
};
</script>

<style scoped>
.example {
  border: 1px solid orange;
}
.title {
  font-weight: bold;
  color: rgb(255, 137, 2);
}
</style>

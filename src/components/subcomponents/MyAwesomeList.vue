<template>
  <ul>
    <slot name="item" v-for="item in items" :text="item.text">
      <!-- 대체 컨텐츠는 여기입니다. -->
    </slot>
  </ul>
</template>

<script>
export default {
  name: 'MyAwesomeList',
  data() {
    return {
      items: [
        {
          id: 1,
          text: 'test 01',
        },
        {
          id: 2,
          text: 'test 02',
        },
        {
          id: 3,
          text: 'test 03',
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <div id="example-1">
      <p>아래 버튼을 클릭한 횟수는 {{ counter }} 번 입니다.</p>
      <button v-on:click="counter += 1">Add 1</button>
    </div>
    <br>
    <br>
    <div id="example-2">
      <!-- `greet`는 메소드 이름으로 아래에 정의되어 있습니다 -->
      <button v-on:click="greet">Greet</button>
    </div>
    <br>
    <br>
    <div id="example-3">
      <button v-on:click="say('hi')">Say hi</button>
      <button v-on:click="say('what')">Say what</button>
      <button v-on:click="warn('Form cannot be submitted yet.', $event)">submit</button>
      <br>
      <div>
        <!-- 클릭 이벤트 전파가 중단됩니다. -->
        <a v-on:click.stop="doThis">stop</a>

        <!-- 제출 이벤트가 페이지를 다시 로드 하지 않습니다. -->
        <form v-on:submit.prevent="onSubmit"></form>

        <!-- 수직어는 체이닝이 가능합니다. -->
        <a v-on:click.stop.prevent="doThat">stop&amp;prevent</a>

        <!-- 단순히 수식어만 사용할 수 있습니다. -->
        <form v-on:submit.prevent></form>

        <!-- 이벤트 리슨너를 추가할 때 캡쳐모드를 사용합니다. -->
        <!-- 즉, 내부 엘리먼트를 대상으로 하는 이벤트가 해당 엘리먼트에서 처리되기 전에 여기서 처리합니다. -->
        <div v-on:click.capture="doThat">...</div>

        <!-- event.target이 엘리먼트 자체인 경우에만 트리거를 처리합니다. -->
        <!-- 자식 엘리먼트에서는 안됩니다. -->
        <div v-on:click.self="doThat">...</div>

        <!-- 클릭 이벤트는 최대 한번만 트리거 됩니다. -->
        <a v-on:click.once="doThis">once</a>

        <!-- 스크롤의 기본 이벤트를 취소할 수 없습니다. -->
        <div v-on:scroll.passive="onScroll">...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListenEvent',
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    greet(event) {
      // 메소드 안에서 사용하는 'this'는 Vue 인스턴스를 가리킵니다.
      // eslint-disable-next-line no-alert
      alert(`Hello${this.name}!`);
      // 'event'는 네이티브 DOM 이벤트 입니다.
      if (event) {
        // eslint-disable-next-line no-alert
        alert(event.target.nodeName);
      }
    },
    say(message) {
      // eslint-disable-next-line no-alert
      alert(message);
    },
    warn(message, event) {
      // 이제 네이티브 이벤트에 액세스 할 수 있습니다.
      if (event) event.preventDefault();
      // eslint-disable-next-line no-alert
      alert(message);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #b9428b;
}
a {
  color: #bccbbc;
}
button {
  padding: 2px;
}
</style>

<template>
  <div class="main">
    <codemirror v-model="code" :options="cmOptions"></codemirror>
    <button @click="onRun">Run</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "codemirror/mode/javascript/javascript";
import "codemirror/keymap/sublime";

@Component
export default class App extends Vue {
  code = "console.log('hello world');";
  cmOptions = {
    tabSize: 4,
    mode: "text/javascript",
    theme: "material",
    lineNumbers: true,
    line: true,
    keyMap: "sublime"
  };

  onRun() {
    const func = new Function(this.code);
    func();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

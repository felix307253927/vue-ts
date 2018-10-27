<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>姓名：{{ name$ }}</span>
    <span>年龄：{{ age$ }}</span>
    <button v-stream:click="setName$">点击设置name的值</button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Observable } from 'rxjs'
import { Component, Mixins } from 'vue-property-decorator'

@Component<About>({
  domStreams: [
    'setName$'
  ],
  subscriptions() {
    return {
      age$: Observable.of(23).map(data => data),
      name$: this.setName$.map((e) => {
        console.log(e);
        return "set name"
      }).startWith('click')
    }
  }
})
export default class About extends Vue {
  name: string = 'test'
  setName$!: Observable<Event>
  beforeRouteEnter(to: any, from: any, next: Function) {
    console.log('beforeRouteEnter')
    next()
  }
  beforeRouteLeave(to: any, from: any, next: Function) {
    console.log('leave');
    next()
  }
  beforeCreate() {
    console.log('breforeCreate');
  }
  created() {
    console.log('created');
  }
  mounted() {
    console.log('mounted');
  }
  updated() {
    console.log("updated");
  }
  activated() {
    console.log('activated');
  }
  destroyed() {
    console.log('destroyed');
  }
}
</script>

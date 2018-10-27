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
import Component from 'vue-class-component'
console.log('about')

@Component<About>({
  domStreams: [
    'setName$'
  ],
  subscriptions() {
    const ob = Observable.of(23).map(data => data)
    console.log(ob)
    return {
      age$: Observable.of(23).map(data => data),
      name$: this.setName$.map((e: any) => 'myName').startWith('')
    }
  }
})
export default class About extends Vue {
  setName$: any
}

let obs = Observable.from([1, 2, 3, 4, 5])
obs.subscribe(x => console.log('a', x))
obs.subscribe(x => console.log('b', x))
setTimeout(() => {
  obs.subscribe(x => console.log('object', x))
}, 500)
</script>

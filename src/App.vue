<template>
  <div class="container">
    <GlobalHeader :user="userData" />
    <ColumnList :lists="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalHeader from './components/GlobalHeader.vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import './global.css'

const testData: Array<ColumnProps> = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '描述1',
    avatar: 'https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_5139.jpg'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '描述2',
    avatar: 'https://images.dog.ceo/breeds/clumber/n02101556_5137.jpg'
  },
  {
    id: 3,
    title: 'test2的专栏',
    description: '描述2',
    avatar: 'https://images.dog.ceo/breeds/clumber/n02101556_5137.jpg'
  },
  {
    id: 4,
    title: 'test2的专栏',
    description: '描述2',
    avatar: 'https://images.dog.ceo/breeds/clumber/n02101556_5137.jpg'
  },
  {
    id: 5,
    title: 'test2的专栏',
    description: '描述2',
    avatar: 'https://images.dog.ceo/breeds/clumber/n02101556_5137.jpg'
  }
]

const userData = {
  isLogin: true,
  name: 'lx70770',
  id: '12122'
}

export default defineComponent({
  name: 'App',
  components: { ColumnList, GlobalHeader },
  setup() {
    return {
      list: testData,
      userData
    }
  }
})
</script>

<style></style>

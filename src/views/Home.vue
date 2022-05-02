<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50" />
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">发现精彩 </h4>
    <ColumnList :lists="lists"></ColumnList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ColumnList, { ColumnProps } from '../components/ColumnList.vue'

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

export default defineComponent({
  name: 'Home',
  components: { ColumnList },
  setup() {
    return {
      lists: testData
    }
  }
})
</script>

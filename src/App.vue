<template>
  <div class="container">
    <GlobalHeader :user="userData" />
    <ColumnList :lists="list" />
    <form action="">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <ValidateInput :rules="emailRules" v-model="emailVal" placeholder="请输入邮箱地址" type="text" />
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <ValidateInput :rules="emailRules" v-model="emailVal" placeholder="请输入密码" type="password" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import GlobalHeader from './components/GlobalHeader.vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'

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
  components: { ColumnList, GlobalHeader, ValidateInput },
  setup() {
    const emailVal = ref('')
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    return {
      list: testData,
      userData,
      emailRules,
      emailVal
    }
  }
})
</script>

<style></style>

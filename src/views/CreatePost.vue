<template>
  <div class="login-page mx-auto p-3 w-330">
    <h5 class="my-4 text-center">新建文章</h5>
    <ValidateForm @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">文章标题</label>
        <ValidateInput :rules="titleRules" v-model="titleVal" placeholder="请输入邮箱地址" type="text" ref="inputRef" />
      </div>
      <div class="mb-3">
        <label class="form-label">文章内容</label>
        <ValidateInput type="text" tag="textarea" rows="10" placeholder="请输入内容" :rules="contentRuls" v-model="contentVal" />
      </div>
      <template #submit>
        <button type="submit" class="btn btn-primary btn-block btn-large">登录</button>
      </template>
    </ValidateForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalDataProps } from '@/store'
import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import { PostProps } from '../testData'

export default defineComponent({
  name: 'CreatePost',
  components: { ValidateForm, ValidateInput },
  setup() {
    const router = useRouter()
    const store = useStore<GlobalDataProps>()
    const titleVal = ref('')
    const titleRules: RulesProp = [{ type: 'required', message: '文章标题不能为空' }]
    const contentVal = ref('')
    const contentRuls: RulesProp = [{ type: 'required', message: '文章内容不能为空' }]

    const onFormSubmit = (result: boolean) => {
      if (result) {
        const { columnId } = store.state.user
        if (columnId) {
          const newPost: PostProps = {
            id: new Date().getTime(),
            title: titleVal.value,
            content: contentVal.value,
            columnId,
            createdAt: new Date().toLocaleString()
          }

          store.commit('createPost', newPost)
          router.push({ name: 'column', params: { id: columnId } })
        }
      }
    }

    return {
      titleRules,
      titleVal,
      contentVal,
      contentRuls,
      onFormSubmit
    }
  }
})
</script>

<style scoped></style>

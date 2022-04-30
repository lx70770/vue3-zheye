<template>
  <div class="row">
    <div v-for="list in lists" :key="list.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="list.avatar" :alt="list.title" class="card-avatar-img" />
          <h5 class="card-title">{{ list.title }}</h5>
          <p class="card-text text-left">{{ list.description }}</p>
          <a href="#" class="btn btn-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export interface ColumnProps {
  id: number
  title: string
  avatar: string
  description: string
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    lists: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  }
})
</script>

<style scoped>
.card-avatar-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 15px;
}
</style>

import { createStore } from 'vuex'

import { testData, testPosts, ColumnProps, PostProps } from './testData'

interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
  columnId?: number
}

export interface GlobalDataProps {
  columns: ColumnProps[]
  posts: PostProps[]
  user: UserProps
}

const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false, columnId: 1 }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: 'lx70770' }
    },
    createPost(state, newPost) {
      state.posts.push(newPost)
    }
  },
  getters: {
    getColumnById: state => (id: number) => state.columns.find(c => c.id === id),
    getPostsByid: state => (cid: number) => state.posts.filter(p => p.columnId === cid)
  }
})

export default store

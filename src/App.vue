<template>
  <div>名字:{{ userStore.name }}</div>
  <div>年纪:{{ userStore.age }}</div>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive" />
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive" />
  </router-view>
</template>
<script setup>
import { useUserStore } from '@/stores'
const userStore = useUserStore()
</script>

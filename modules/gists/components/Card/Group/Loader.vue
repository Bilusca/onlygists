<script lang="ts" setup>
const props = withDefaults(defineProps<{ loading: boolean; amount?: number }>(), {
  loading: false,
  amount: 4,
})
</script>

<template>
  <template v-if="props.loading">
    <Skeleton v-for="card in props.amount" :key="`gist-${card}`" width="100%" height="13.375rem" />
  </template>
  <slot v-else />
</template>

<script lang="ts" setup>
const props = defineProps<{ title?: string; subTitle?: string }>()
</script>

<template>
  <div class="rounded-lg p-5 bg-white overflow-x-inherit w-full max-w-screen-lg">
    <div class="flex justify-between items-center" v-if="props.title">
      <div class="flex flex-col gap-1">
        <h3 class="text lg font-bold text-left text-gray-700">{{ props.title }}</h3>
        <p v-if="props.subTitle" class="text-sm text-gray-500 text-left">{{ props.subTitle }}</p>
      </div>

      <slot name="header-action" />
    </div>
    <div class="py-2">
      <slot />
    </div>
  </div>
</template>

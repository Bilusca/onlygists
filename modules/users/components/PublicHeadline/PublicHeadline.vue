<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    name: string
    avatarUrl: string
    bio?: string
    city?: string
    state?: string
  }>(),
  {
    name: 'Lucas Vieira',
    avatarUrl: 'https://avatars.githubusercontent.com/u/8138318?v=4',
    bio: 'Software Engineer',
    city: 'Goiânia',
    state: 'GO',
  }
)
</script>

<template>
  <div class="w-full flex flex-col justify-center items-center gap-2">
    <div class="w-24 md:w-32 rounded-full overflow-hidden">
      <img :src="props.avatarUrl" alt="foto do usuário" />
    </div>
    <h1 class="text-gray-700 text-center font-bold text-2xl md:text-3xl">{{ props.name }}</h1>
    <p class="text-gray-700 text-center font-medium md:text-lg" v-if="props.bio">{{ props.bio }}</p>
    <p class="font-medium text-gray-500 text-sm md:text-base" v-if="props.city && props.state">
      <i class="pi pi-map-marker"></i>
      {{ props.city }}, {{ props.state }}
    </p>
  </div>
</template>

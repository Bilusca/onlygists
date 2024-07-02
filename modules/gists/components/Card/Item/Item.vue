<script lang="ts" setup>
const { render } = useMarkdown()

const emit = defineEmits<{
  tap: [id: string]
}>()

const props = withDefaults(
  defineProps<{
    id: string
    title: string
    description: string
    price: number
    lang: string
  }>(),
  {
    id: '123',
    title: 'useCurrentUser.ts',
    description: 'Hook para controlar o **usuário** logado',
    price: 10,
    lang: 'typescript',
  }
)

const isFree = computed(() => props.price === 0)
const description = computed(() => render(props.description))
const amount = computed(() =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.price)
)

const handleClick = () => {
  emit('tap', props.id)
}
</script>

<template>
  <div class="card">
    <Card>
      <template #title>
        {{ props.title }}
        <Chip :label="props.lang" class="text-sm" icon="pi pi-bolt" />
      </template>
      <template #content>
        <div v-html="description" />
      </template>
      <template #footer>
        <Button
          v-if="isFree"
          @click="handleClick"
          label="Baixar gratuitamente"
          class="w-full"
          icon-pos="right"
          icon="pi pi-shopping-bag"
        />
        <Button
          v-else
          @click="handleClick"
          :label="`Comprar por ${price}`"
          class="w-full"
          icon-pos="right"
          icon="pi pi-shopping-bag"
        />
      </template>
    </Card>
  </div>
</template>

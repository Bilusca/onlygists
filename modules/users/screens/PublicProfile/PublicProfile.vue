<script lang="ts" setup>
import PublicHeadline from '@/modules/users/components/PublicHeadline/PublicHeadline.vue'
import WidgetGroup from '@/modules/reports/components/Widgets/Group/Group.vue'
import WidgetCondensed from '@/modules/reports/components/Widgets/Condensed/Condensed.vue'
import WidgetGroupLoader from '@/modules/reports/components/Widgets/Group/Loader.vue'
import GistsCardGroup from '@/modules/gists/components/Card/Group/Group.vue'
import GistsCardItem from '@/modules/gists/components/Card/Item/Item.vue'
import GistsCardGroupLoader from '@/modules/gists/components/Card/Group/Loader.vue'

const route = useRoute()
const router = useRouter()

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 3000)
})

const handleNavigateToDetail = (id: string) => {
  const { username } = route.params
  router.push(`/${username}/gist/${id}`)
}
</script>
<template>
  <PublicHeadline />
  <WidgetGroup>
    <WidgetGroupLoader :loading="loading" :amount="3">
      <WidgetCondensed :value="10" label="Gists no total" />
      <WidgetCondensed :value="5" label="Gists gratuitos" />
      <WidgetCondensed :value="5" label="Gists pagos" />
    </WidgetGroupLoader>
  </WidgetGroup>
  <WidgetsDefault title="Todos os gists">
    <GistsCardGroup>
      <GistsCardGroupLoader :loading="loading">
        <GistsCardItem @tap="handleNavigateToDetail" />
      </GistsCardGroupLoader>
    </GistsCardGroup>
  </WidgetsDefault>
</template>

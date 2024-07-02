<script lang="ts" setup>
const visible = defineModel<boolean>('visible')
</script>

<template>
  <Dialog v-model:visible="visible" modal header="Compra efetuada com sucesso" :style="{ width: '400px' }">
    <div class="flex flex-col m-0 items-center hustify-center w-full">
      <i class="pi pi-check-circle text-primary-500 text-6xl my-5"></i>
      <p class="text-gray-700 text-center">
        Parabéns pela compra! <br />
        Você receberá no e-mail fornecido no checkour o seu gist 🤩
      </p>

      <div class="flex justify-center w-full mt-10">
        <Button label="Voltar" icon="pi pi-arrow-left" autofocus @click="visible = false" />
      </div>
    </div>
  </Dialog>
</template>

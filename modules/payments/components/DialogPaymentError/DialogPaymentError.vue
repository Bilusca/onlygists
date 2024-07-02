<script lang="ts" setup>
const visible = defineModel<boolean>('visible')
</script>

<template>
  <Dialog v-model:visible="visible" modal header="Compra efetuada com sucesso" :style="{ width: '400px' }">
    <div class="flex flex-col m-0 items-center hustify-center w-full">
      <i class="pi pi-times-circle text-primary-500 text-6xl my-5"></i>
      <p class="text-gray-700 text-center">
        Sentimos muito por isso! <br />
        Por favor, tente efetuar a compra novamente
      </p>

      <div class="flex justify-center w-full mt-10">
        <Button label="Voltar" icon="pi pi-arrow-left" autofocus @click="visible = false" />
      </div>
    </div>
  </Dialog>
</template>

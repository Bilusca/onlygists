<template>
  <div class="w-full h-full flex flex-col">
    <slot class="flex-1" name="header" />
    <div class="w-full h-full p-5 mx-auto max-w-screen-xl">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>
import IconDarkMode from './icons/IconDarkMode.vue'
import IconDownload from './icons/IconDownload.vue'
import IconLigthMode from './icons/IconLightMode.vue'
import IconTranslate from './icons/IconTranslate.vue'
</script>

<template>
  <nav class="w-full h-full flex items-center justify-between py-1 px-5 max-w-5xl xl:max-w-6xl">
    <div class="w-7 h-7 bg-brand-dark flex items-center justify-center p-5 rounded-xl">
      <span class="text-white font-semibold text-base">MA</span>
    </div>
    <div class="flex items-center gap-4">
      <button title="translate" class="text-xl">
        <IconTranslate />
      </button>
      <!-- TODO :: Cambia dependiendo del tema y el title -->
      <button title="Switch to dark Mode">
        <IconDarkMode />
        <IconLigthMode />
      </button>
      <a
        class="w-auto h-7 px-4 font-medium flex items-center gap-2 bg-brand-dark text-white rounded-3xl lg:h-10 lg:px-6 cursor-pointer active:scale-[1.1] transition-transform duration-300"
        href="/CV-Eng.pdf"
        download="MiguelAbache_CV"
        target="_blank"
      >
        <IconDownload />
        <div class="flex items-center">
          <span class="hidden lg:flex"> Download {{ '&nbsp;' }}</span>
          <span>CV</span>
        </div>
      </a>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>

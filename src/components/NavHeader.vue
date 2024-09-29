<script setup>
import { useDark, useToggle } from '@vueuse/core';
import IconDarkMode from './icons/IconDarkMode.vue';
import IconDownload from './icons/IconDownload.vue';
import IconLigthMode from './icons/IconLightMode.vue';
import IconTranslate from './icons/IconTranslate.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <nav
    class="w-full h-full flex items-center justify-between py-1 px-5 max-w-5xl xl:max-w-6xl bg-brand-gray dark:bg-brand-dark"
  >
    <div
      class="w-7 h-7 bg-brand-dark dark:bg-brand-gray flex items-center justify-center p-5 rounded-xl"
    >
      <span
        class="text-brand-gray font-semibold dark:text-brand-dark dark:font-semibold dark:text-base font-outfit"
        >MA</span
      >
    </div>
    <div class="flex items-center gap-4">
      <!-- TODO :: Realizar lo del cambio de idioma -->
      <button title="translate" class="text-xl dark:text-brand-gray">
        <IconTranslate />
      </button>
      <button title="Switch to dark Mode" @click="toggleDark()">
        <IconDarkMode v-if="!isDark" class="text-brand-dark" />
        <IconLigthMode v-if="isDark" class="text-yellow-500" />
      </button>
      <a
        class="w-auto h-7 px-4 font-medium flex items-center gap-2 bg-brand-dark dark:bg-brand-gray text-brand-gray dark:text-brand-dark rounded-3xl lg:h-10 lg:px-6 cursor-pointer active:scale-[1.1] transition-transform duration-300"
        href="/CV-Eng.pdf"
        download="MiguelAbache_CV"
        target="_blank"
      >
        <IconDownload />
        <div class="flex items-center">
          <span class="hidden lg:flex text-brand-gray dark:text-brand-dark font-outfit">
            Download{{ '&nbsp;' }}</span
          >
          <span>CV</span>
        </div>
      </a>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>

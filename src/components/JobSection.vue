<template>
  <div class="w-full h-96 px-1 md:px-10 flex flex-col gap-2 text-center">
    <h3 class="text-3xl font-semibold dark:text-brand-gray font-outfit">Experience</h3>
    <p class="opacity-80 dark:text-brand-gray font-outfit">
      I have worked for the following companies.
    </p>

    <div class="flex flex-col md:flex-row justify-center md:gap-10">
      <div class="w-full md:w-64 h-74 rounded-2xl border-2 p-1 mt-6">
        <div
          class="px-8 py-5 flex flex-col border-2 rounded-xl bg-white dark:bg-brand-dark gap-4 items-start"
        >
          <IconLinkedIn class="w-12 h-12 dark:text-brand-gray" />
          <div class="flex items-center gap-3 mt-2">
            <p class="font-bold text-xl font-outfit opacity-75 dark:text-brand-gray">Grupo Inca</p>
            <IconVerifyBadge class="w-5 h-5 dark:text-brand-gray" />
          </div>

          <p class="text-base text-brand-gray2 font-outfit opacity-80 dark:text-brand-gray">
            JR FrontEnd Developer
          </p>
          <p class="text-base text-brand-gray2 font-outfit opacity-80 dark:text-brand-gray">
            2010 - 2014
          </p>

          <div class="flex gap-2">
            <span
              class="border-2 rounded-lg px-3 border-brand-dark dark:border-brand-gray dark:text-brand-gray"
              >Onsite</span
            >
            <span
              class="border-2 rounded-lg px-3 border-brand-dark dark:border-brand-gray dark:text-brand-gray"
              >Fulltime</span
            >
          </div>
        </div>
        <div class="flex justify-center items-center gap-2 py-2">
          <IconMapPin class="w-5 h-5 dark:text-brand-gray" />
          <span class="font-base text-brand-gray2 font-outfit opacity-80 pt-1 dark:text-brand-gray"
            >Venezuela, Porlamar</span
          >
        </div>
      </div>
      <!-- OTRA TARJETA -->
      <div class="w-full md:w-64 h-74 rounded-2xl border-2 p-1 mt-6">
        <div
          class="px-8 py-5 flex flex-col border-2 rounded-xl bg-white dark:bg-brand-dark gap-4 items-start"
        >
          <IconLinkedIn class="w-12 h-12 dark:text-brand-gray" />
          <div class="flex items-center gap-3 mt-2">
            <p class="font-bold text-xl font-outfit opacity-75 dark:text-brand-gray">Grupo Inca</p>
            <IconVerifyBadge class="w-5 h-5 dark:text-brand-gray" />
          </div>

          <p class="text-base text-brand-gray2 font-outfit opacity-80 dark:text-brand-gray">
            JR FrontEnd Developer
          </p>
          <p class="text-base text-brand-gray2 font-outfit opacity-80 dark:text-brand-gray">
            2010 - 2014
          </p>

          <div class="flex gap-2">
            <span
              class="border-2 rounded-lg px-3 border-brand-dark dark:border-brand-gray dark:text-brand-gray"
              >Onsite</span
            >
            <span
              class="border-2 rounded-lg px-3 border-brand-dark dark:border-brand-gray dark:text-brand-gray"
              >Fulltime</span
            >
          </div>
        </div>
        <div class="flex justify-center items-center gap-2 py-2">
          <IconMapPin class="w-5 h-5 dark:text-brand-gray" />
          <span class="font-base text-brand-gray2 font-outfit opacity-80 pt-1 dark:text-brand-gray"
            >Venezuela, Porlamar</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue';
import IconMapPin from '@/components/icons/IconMapPin.vue';
import IconVerifyBadge from '@/components/icons/IconVerifyBadge.vue';
</script>

<style scoped></style>

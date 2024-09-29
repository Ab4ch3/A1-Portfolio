<script setup>
import IconEmail from '@/components/icons/IconEmail.vue';
import IconGitHub from '@/components/icons/IconGitHub.vue';
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue';
import MainHeader from '../components/MainHeader.vue';
</script>

<template>
  <div
    class="w-full bg-brand-gray select-none subpixel-antialiased dark:bg-brand-dark flex flex-col items-center scroll-smooth gap-5 lg:gap-10 mb-10"
  >
    <MainHeader />
    <main
      class="w-full h-screen flex flex-col gap-10 items-center max-w-5xl px-5 xl:max-w-6xl mt-[5.5rem]"
    >
      <section class="w-full grid auto-rows-[172px] grid-cols-6 gap-4">
        <div
          class="row-span-2 col-span-6 rounded-3xl relative flex flex-col overflow-hidden gap-10 justify-end p-6 dark:bg-brand-gray2 xl:col-span-4 lg:items-end sm:flex-row lg:p-10"
        >
          <div>
            <!-- IDEA :: PROBAR LUEGO EL GRANDIENTE  -->
            <div
              class="absolute bg-gradient-to-t from-brand-dark to-transparent top-10 left-0 bottom-0 right-0 z-[2]"
            ></div>
            <img
              class="absolute w-full h-full object-cover left-0 top-0"
              src="@/assets//portada.webp"
              title="portolio picture"
              alt="portolio picture"
            />
            <div
              class="w-full flex flex-col z-[2] absolute left-0 bottom-0 leading-4 p-5 text-brand-gray font-outfit"
            >
              <span class="text-3xl font-bold leading-7 font-outfit">Miguel Abache</span>
              <span class="text-lg font-medium leading-9 font-outfit">Full-Stack Developer</span>

              <div class="flex flex-wrap items-center gap-2 mt-1 lg:gap-3">
                <a
                  href="https://github.com/Ab4ch3"
                  target="_blank"
                  title="GitHub"
                  class="flex items-center font-medium bg-brand-gray px-3 py-2 rounded-lg text-brand-gray2 gap-2 active:scale-[1.1] transition-transform duration-300"
                >
                  <IconGitHub />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/miguelabache/"
                  target="_blank"
                  title="LinkedIn"
                  class="flex items-center font-medium bg-brand-gray px-3 py-2 rounded-lg text-brand-gray2 gap-2 active:scale-[1.1] transition-transform duration-300"
                >
                  <IconLinkedIn />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:miiguel.abache@gmail.com"
                  target="_blank"
                  title="Email"
                  class="flex items-center font-medium bg-brand-gray px-3 py-2 rounded-lg text-brand-gray2 gap-2 active:scale-[1.1] transition-transform duration-300"
                >
                  <IconEmail />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="row-span-1 col-span-6 rounded-3xl bg-white relative flex flex-col overflow-hidden border-2 border-transparent gap-2 p-7 dark:bg-brand-gray2 lg:p-6 xl:col-span-2"
        >
          <h2 class="text-xl font-bold z-[1] dark:text-brand-gray font-outfit">About Me</h2>
          <p class="text-base w-full z-[1] opacity-70 dark:text-brand-gray font-outfit">
            Hi there, thanks for visit my profile , <br />
            I'm web developer with experience in design and maintaining web applications.
          </p>
        </div>
        <div
          class="row-span-1 col-span-3 rounded-3xl bg-white relative flex flex-col overflow-hidden border-2 border-transparent gap-2 items-center justify-center dark:bg-brand-gray2 xl:col-span-1"
        >
          <p
            class="text-7xl z-[1] font-bold flex items-center gap-1 dark:text-brand-gray font-outfit"
          >
            <span>+</span>
            <span>5</span>
          </p>
          <p class="text-sm font-semibold max-w-fit opacity-70 z-[1] dark:text-brand-gray">
            Years of experience
          </p>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="w-full h-full absolute -right-10 -bottom-12 opacity-5 dark:opacity-[0.02] dark:text-brand-gray p-5 z-[0]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M14.06 9.94 12 9l2.06-.94L15 6l.94 2.06L18 9l-2.06.94L15 12l-.94-2.06zM4 14l.94-2.06L7 11l-2.06-.94L4 8l-.94 2.06L1 11l2.06.94L4 14zm4.5-5 1.09-2.41L12 5.5 9.59 4.41 8.5 2 7.41 4.41 5 5.5l2.41 1.09L8.5 9zm-4 11.5 6-6.01 4 4L23 8.93l-1.41-1.41-7.09 7.97-4-4L3 19l1.5 1.5z"
            ></path>
          </svg>
        </div>
        <div
          class="row-span-1 col-span-3 rounded-3xl bg-white dark:bg-brand-gray overflow-hidden border-2 border-transparent xl:col-span-1 flex items-center justify-center relative"
        >
          no se aun
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
const { gsap, ScrollTrigger } = useGsap();
const section = ref(0);

onMounted(() => {
  gsap.timeline({
    scrollTrigger: {
      trigger: section.value,
      start: "top bottom-=0%",
    },
  });
});
</script>

<template>
  <div ref="section">
    <NuxtWelcome />
    <NuxtWelcome />
    <NuxtWelcome />
    <NuxtWelcome />
  </div>
</template>
<style>
html {
  scroll-behavior: smooth;
}
</style>

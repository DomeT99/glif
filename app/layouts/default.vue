<script setup lang="ts"></script>
<template>
  <section class="bg-background font-sans">
    <CommonNavbar />
    <main class="container mx-auto min-h-[80vh]">
      <slot />
    </main>
    <CommonFooter />
  </section>
</template>

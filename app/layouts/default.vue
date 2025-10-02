<template>
  <VitePwaManifest />
  <section class="bg-background font-sans">
    <CommonNavbar />
    <main class="container mx-auto min-h-[82vh]">
      <slot />
    </main>
    <CommonFooter />
  </section>
</template>

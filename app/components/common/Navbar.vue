<template>
  <nav class="bg-primary text-surface shadow-minimal">
    <div class="flex items-center justify-between py-4 px-6">
      <NuxtLink to="/"
        ><h1 class="text-2xl font-heading font-bold tracking-wide">
          Glif
        </h1></NuxtLink
      >

      <ul class="flex gap-8 items-center">
        <li>
          <NuxtLink
            to="/"
            class="flex items-center gap-1 hover:text-accent transition-colors"
          >
            <HomeIcon class="w-5 h-5" /> Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/"
            class="flex items-center gap-1 hover:text-accent transition-colors"
          >
            <PlusCircleIcon class="w-5 h-5" /> Create
          </NuxtLink>
        </li>
      </ul>
      <GenericButton bg-color="secondary">SIGN IN</GenericButton>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { HomeIcon, PlusCircleIcon } from "@heroicons/vue/24/outline";
</script>

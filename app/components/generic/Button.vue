<script setup lang="ts">
const props = defineProps<{
  disabled?: boolean;
  bgColor?: string;
}>();

const btnColorsClass = computed(() => {
  if (props.bgColor === "secondary") {
    return "bg-secondary text-surface hover:bg-primary focus:bg-primary focus:ring-secondary";
  }

  return "bg-primary text-surface hover:bg-green-600 focus:bg-green-600 focus:ring-primary";
});
</script>

<template>
  <button
    :disabled="disabled"
    :class="btnColorsClass"
    class="shadow-minimal font-bold rounded transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-[.8rem] text-base"
  >
    <slot />
  </button>
</template>

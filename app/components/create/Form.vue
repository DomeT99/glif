<script setup lang="ts">
import { ref } from "vue";
import { useCreateStore } from "~/store/createStore";

const store = useCreateStore();

const toggleImageSection = ref<boolean>(false);
</script>
<template>
  <form>
    <div>
      <label for="default-range" class="block mb-2 text-lg text-surface"
        >Value<span
          class="ml-4 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-600 text-white"
          >RQ</span
        ></label
      >
      <textarea
        v-model="store.qrCodeData.value"
        class="block w-full md:w-[90%] rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Enter text or URL to encode"
      />
    </div>
    <div class="grid grid-cols-1 gap-4">
      <div class="mt-6">
        <label class="block mb-2 text-lg text-surface">Size</label>
        <input
          v-model="store.qrCodeData.size"
          type="range"
          min="100"
          max="250"
          class="w-full md:w-[90%] h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div class="mt-6">
        <label class="block mb-2 text-lg text-surface">Background</label>
        <input
          v-model="store.qrCodeData.background"
          type="color"
          class="w-12 sm:w-14 md:w-16 h-8 rounded-md border bg-background px-3"
        />
      </div>
      <div class="mt-6">
        <label class="block mb-2 text-lg text-surface">Foreground</label>
        <input
          v-model="store.qrCodeData.foreground"
          type="color"
          class="w-12 sm:w-14 md:w-16 h-8 rounded-md border bg-background px-3"
        />
      </div>
    </div>

    <!-- FUTURE IMPLEMENTATION -->
    <template v-if="false">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="mt-6 sm:mt-[8vh]">
          <label class="inline-flex items-center cursor-pointer">
            <input
              v-model="toggleImageSection"
              type="checkbox"
              role="switch"
              class="sr-only peer"
            />
            <div
              class="relative w-11 h-6 bg-background peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring rounded-full peer dark:bg-muted-foreground peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-surface after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"
            ></div>
            <span class="ms-3 text-lg text-surface">Insert image</span>
          </label>
        </div>
      </div>
      <div :class="{ 'opacity-50': !toggleImageSection }" class="mt-6">
        <div class="flex w-full">
          <label
            for="dropzone-file"
            class="flex flex-col justify-center w-full sm:w-[90%] h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-surface hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              :disabled="!toggleImageSection"
              id="dropzone-file"
              type="file"
              class="hidden"
            />
          </label>
        </div>
      </div>
    </template>
  </form>
</template>

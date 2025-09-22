<script setup lang="ts">
import QrcodeVue from "qrcode.vue";
import { useCreateStore } from "~/store/createStore";

const store = useCreateStore();
</script>
<template>
  <section>
    <div class="grid grid-cols-3 gap-4 h-[50vh] mt-[20vh] bg-accent p-10 rounded-lg">
      <div class="col-span-2">
        <CreateForm />
      </div>
      <div
        class="flex justify-center items-center p-4 bg-background rounded-lg"
      >
        <QrcodeVue
          :value="store.qrCodeData.value"
          :level="store.qrCodeData.level"
          :render-as="store.qrCodeData.renderAs"
          :background="store.qrCodeData.background"
          :foreground="store.qrCodeData.foreground"
          :size="store.qrCodeData.size"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import QrcodeVue from "qrcode.vue";
import { useCreateStore } from "~/store/createStore";

const store = useCreateStore();
</script>
<template>
  <section>
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 md:mt-[20vh] bg-accent p-4 sm:p-6 md:p-10 rounded-lg md:h-[50vh]"
    >
      <!-- QR preview on mobile appears above the form (order-1), on desktop it's on the right -->
      <div
        class="flex justify-center items-center p-4 bg-background rounded-lg order-1 md:order-2"
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

      <div class="md:col-span-2 order-2 md:order-1">
        <CreateForm />
      </div>
    </div>

    <div
      class="bg-accent mt-4 px-4 py-4 sm:px-6 sm:py-4 rounded-lg flex flex-col sm:flex-row justify-center sm:justify-end gap-4"
    >
      <GenericButton @click="store.resetForm">RESET</GenericButton>
      <GenericButton @click="store.downloadQRCode">DOWNLOAD</GenericButton>
    </div>
  </section>
</template>

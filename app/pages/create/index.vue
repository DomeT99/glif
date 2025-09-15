<script setup lang="ts">
import { ref } from "vue";
import QrcodeVue from "qrcode.vue";
import type { Level, RenderAs, GradientType, ImageSettings } from "qrcode.vue";

const value = ref("qrcode");
const level = ref<Level>("M");
const renderAs = ref<RenderAs>("svg");
const background = ref("#ffffff");
const foreground = ref("#000000");

const imageSettings = ref<ImageSettings>({
  src: "https://ugc.production.linktr.ee/00950208-e396-4c39-9dc1-d001cdb7af23_ProfileImage--copy-.png?io=true&size=avatar-v3_0",
  width: 80,
  height: 80,
  excavate: true,
});

const gradient = ref(false);
const gradientType = ref<GradientType>("linear");
const gradientStartColor = ref("#000000");
const gradientEndColor = ref("#38bdf8");
</script>
<template>
  <section>
    <div class="grid grid-cols-3 gap-4 mt-[15vh] bg-accent p-10 rounded-lg">
      <div class="col-span-2">
        <CreateForm />
      </div>
      <div
        class="flex justify-center items-center p-4 bg-background rounded-lg"
      >
        <QrcodeVue
          :value="value"
          :level="level"
          :render-as="renderAs"
          :background="background"
          :foreground="foreground"
          :gradient="gradient"
          :gradient-type="gradientType"
          :gradient-start-color="gradientStartColor"
          :gradient-end-color="gradientEndColor"
          :image-settings="imageSettings"
          :size="250"
        />
      </div>
    </div>
  </section>
</template>

import { defineStore } from "pinia";
import type { QRCodeData } from "~/types/createTypes";

export const useCreateStore = defineStore("createStore", () => {
  const qrCodeData = ref<QRCodeData>({
    value: "",
    size: 250,
    level: "M",
    renderAs: "canvas",
    background: "#ffffff",
    foreground: "#000000",
    imageSettings: {
      src: "",
      height: 80,
      width: 80,
      excavate: true,
    },
  });

  function resetForm() {
    qrCodeData.value = {
      value: "",
      size: 250,
      level: "M",
      renderAs: "canvas",
      background: "#ffffff",
      foreground: "#000000",
      imageSettings: {
        src: "",
        height: 80,
        width: 80,
        excavate: true,
      },
    };
  }
  function downloadQRCode() {
    // Implementation for downloading the QR code
  }

  return { qrCodeData, resetForm,downloadQRCode };
});

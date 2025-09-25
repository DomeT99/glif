import { defineStore } from "pinia";
import type { QRCodeData } from "~/types/createTypes";

export const useCreateStore = defineStore("createStore", () => {
  const qrCodeData = ref<QRCodeData>({
    value: "",
    size: 150,
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
      size: 150,
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
    if (qrCodeData.value.value.trim() == "" || qrCodeData.value.value == null) {
      alert("Please insert a value to generate QR Code.");
      return;
    }

    const link = document.createElement("a") as HTMLAnchorElement;
    const canvas = document
      .querySelector("canvas")!
      .toDataURL("image/png") as string;
    link.href = canvas;
    link.download = `${new Date().getTime()}.png`;
    link.click();
  }

  return { qrCodeData, resetForm, downloadQRCode };
});

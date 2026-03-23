<template>
  <main
    class="grow relative flex font-sans flex-col items-center justify-center gap-8 px-4 md:px-16 lg:px-64 py-16"
  >
    <aside class="absolute inset-0 opacity-30 pointer-events-none">
      <section
        class="relative w-full h-full [&>pre]:absolute [&>pre]:w-full md:[&>pre]:w-1/2 [&>pre]:h-1/2 md:[&>pre]:h-1/2 [&>pre]:translate-y-1/2 md:[&>pre]:translate-x-1/2 [&>pre]:mb-8 [&>pre]:bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] [&>pre]:bg-size-[20px_20px] [&>pre]:mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_30%,transparent_100%)] z-0"
      >
        <pre></pre>
      </section>
    </aside>

    <h1 class="text-3xl sm:text-5xl text-white font-black text-center z-10">
      About <span class="text-primary">Glif</span>
    </h1>

    <section
      class="max-w-2xl w-full flex flex-col gap-6 z-10 bg-neutral-900/60 backdrop-blur-md p-6 sm:p-10 rounded-2xl border border-neutral-800 shadow-2xl"
    >
      <p
        class="text-lg text-neutral-300 text-center sm:text-left leading-relaxed"
      >
        <strong>Glif</strong> is a modern application designed for creating,
        customizing, and downloading high-quality QR codes with an intuitive
        user interface.
      </p>

      <div
        class="h-px w-full bg-linear-to-r from-transparent via-neutral-700 to-transparent"
      ></div>

      <p
        class="text-lg text-neutral-300 text-center sm:text-left leading-relaxed"
      >
        Developed and maintained entirely by
        <a
          href="https://github.com/Domenico-Tenace-Open-Labs"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary hover:text-white transition-colors duration-300 font-semibold"
        >
          Domenico Tenace Open Labs </a
        >.
      </p>

      <div
        class="bg-neutral-800/40 rounded-xl p-6 border border-primary/20 flex flex-col gap-3 mt-2"
      >
        <h2 class="text-xl font-bold text-white">Feedback & Contributions</h2>
        <p class="text-neutral-400">
          Have an idea for a new feature? Found a bug? We would love to hear
          from you. Let us know on our
          <a
            href="https://github.com/Domenico-Tenace-Open-Labs/glif/issues"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary hover:underline font-medium"
          >
            GitHub Issues page </a
          >.
        </p>
      </div>

      <div class="flex justify-center mt-4">
        <NuxtLink to="/">
          <GenericButton>Back to Home</GenericButton>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<template>
  <form>
    <div>
      <label for="default-range" class="block mb-2 text-lg text-surface"
        >Value</label
      >
      <textarea
        class="block w-[90%] rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Enter text or URL to encode"
      />
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div class="mt-6">
        <label class="block mb-2 text-lg text-surface">Size</label>
        <input
          type="range"
          min="100"
          max="720"
          value="100"
          class="w-[80%] h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
        />
      </div>
      <div class="mt-6">
        <label class="block mb-2 text-lg text-surface">Margin</label>
        <input
          type="range"
          min="0"
          max="10"
          value="0"
          class="w-[80%] h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
        />
      </div>
      <div class="mt-6">
        <label class="block mb-2 text-lg text-surface">Level</label>
        <select class="block w-[80%] h-8 rounded-md border bg-background px-3">
          <option>L</option>
          <option>M</option>
          <option>Q</option>
          <option>H</option>
        </select>
      </div>
      <div class="mt-6">
        <label class="block mb-2 text-lg text-gray-900">Render as</label>
        <select class="block w-[80%] h-8 rounded-md border bg-background px-3">
          <option>SVG</option>
          <option>CANVAS</option>
        </select>
      </div>
      <div class="mt-6">
        <label class="block mb-2 text-lg text-surface">Background</label>
        <input
          type="color"
          value="#ffffff"
          class="w-[15%] h-8 rounded-md border bg-background px-3"
        />
      </div>
      <div class="mt-6">
        <label class="block mb-2 text-lg text-surface">Foreground</label>
        <input
          type="color"
          value="#000"
          class="w-[15%] h-8 rounded-md border bg-background px-3"
        />
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4 mt-6">
      <div class="mt-6">
        <label class="block mb-2 text-lg text-surface">Image</label>
        <input
          type="file"
          class="block w-[80%] rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <div class="mt-6">
        <label class="block mb-2 text-lg text-surface">Width</label>
        <input
          type="number"
          class="block w-[40%] rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <div class="mt-6">
        <label class="block mb-2 text-lg text-surface">Height</label>
        <input
          type="number"
          class="block w-[40%] rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </div>
  </form>
</template>

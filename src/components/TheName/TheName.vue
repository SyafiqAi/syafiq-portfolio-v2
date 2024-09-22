<script setup lang="ts">
import TheContacts from "./TheContacts.vue";
</script>

<template>
    <div class="flex items-center justify-center h-svh select-none flex-col">
        <div class="flex flex-col items-center group py-32">
            <span class="font-extralight mb-2">Syafiq</span>
            <h1
                class="font-black text-4xl md:text-6xl lg:text-9xl text-nowrap max-w-[100lvw] gradient-animation"
            >
                Web Developer
            </h1>
            <TheContacts />
        </div>
    </div>
</template>
<style scoped>
.gradient-animation {
    --bg-size: 400%;
    --color-one: #fa3e00ff;
    --color-two: #fc216dff;
    --color-three: #ff04daff;
    background: linear-gradient(
            90deg,
            var(--color-one),
            var(--color-two),
            var(--color-three),
            var(--color-one)
        )
        0 0 / var(--bg-size) 100%;
    color: transparent;
    background-clip: text;
}

@media (prefers-reduced-motion: no-preference) {
    .gradient-animation {
        animation: move-bg 6s linear infinite;
    }
    @keyframes move-bg {
        to {
            background-position: var(--bg-size) 0;
        }
    }
}
</style>

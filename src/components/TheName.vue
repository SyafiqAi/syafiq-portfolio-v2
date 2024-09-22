<script setup lang="ts"></script>

<template>
    <div class="flex items-center justify-center h-lvh select-none">
        <span class="font-extralight">Syafiq</span>
        <div class="w-10" />
        <span class="font-black text-4xl gradient-animation">
            Web Developer
        </span>
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

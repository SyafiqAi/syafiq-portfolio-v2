<script setup lang="ts"></script>

<template>
    <div class="h-dvh gradient-animation flex justify-center">
        <p class="text-center text-neutral-900 font-black text-6xl md:text-9xl">
            Let's go. <br />
            <br />
            LinkedIn <br />
            Gmail <br />
            GitHub <br />
        </p>
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
    /* color: transparent;
    background-clip: text; */
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

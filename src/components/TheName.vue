<script setup lang="ts">
import IconBox from "./SideContacts/IconBox.vue";
import IconGitHub from "./icons/IconGitHub.vue";
import IconGmail from "./icons/IconGmail.vue";
import IconLinkedIn from "./icons/IconLinkedIn.vue";
</script>

<template>
    <div class="flex items-center justify-center h-lvh select-none flex-col">
        <span class="font-extralight mb-2">Syafiq</span>
        <span class="font-black text-4xl gradient-animation">
            Web Developer
        </span>
        <div class="font-extralight flex gap-10 mt-4">
            <IconBox><IconLinkedIn /></IconBox>
            <IconBox><IconGmail /></IconBox>
            <IconBox><IconGitHub /></IconBox>
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

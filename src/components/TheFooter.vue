<script setup lang="ts">
import CopyIcon from "./icons/CopyIcon.vue";
import CopyIcon2 from "./icons/CopyIcon2.vue";
import IconGitHub from "./icons/IconGitHub.vue";
import IconLinkedIn from "./icons/IconLinkedIn.vue";
import IconBox from "./SideContacts/IconBox.vue";
</script>

<template>
    <div
        class="h-dvh bg-gray-500 flex flex-col justify-center text-center text-neutral-900 font-black text-[7dvw]"
    >
        <div>Let's go.</div>
        <div class="flex justify-center">
            <div class="flex items-center">
                <IconLinkedIn class="min-h-[70%] min-w-full" />
            </div>
            LinkedIn
        </div>
        <div class="flex gap-4 md:gap-10 justify-center">
            email@gmail.com
            <div class="flex items-center">
                <CopyIcon2 class="min-h-[70%] min-w-full" />
            </div>
        </div>
        <div class="flex justify-center">
            <div class="flex items-center">
                <IconGitHub class="min-h-[70%] min-w-full" />
            </div>
            GitHub
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

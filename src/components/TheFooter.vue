<script setup lang="ts">
import { ref } from "vue";
import CheckIcon from "./icons/CheckIcon.vue";
import CopyIcon2 from "./icons/CopyIcon2.vue";
import IconEmail from "./icons/IconEmail.vue";
import IconGitHub from "./icons/IconGitHub.vue";
import IconLinkedIn from "./icons/IconLinkedIn.vue";

const nav = navigator;
const email = "isyafiq@gmail.com";
const linkedInUrl = "https://www.linkedin.com/in/syafiq-aiman-b10b58303";
const gitHubUrl = "https://github.com/SyafiqAi";

const showCheckIcon = ref(false);

function copyEmailToClipboard() {
    navigator.clipboard.writeText(email).then(() => {
        showCheckIcon.value = true;
        setTimeout(() => {
            showCheckIcon.value = false;
        }, 1300);
    });
}
</script>

<template>
    <div
        class="min-h-lvh gradient-animation flex flex-col justify-center text-center text-neutral-900 font-black overflow-hidden"
    >
        <div class="text-[15dvw] justify-self-start-start">Let's go.</div>
        <div class="text-[7dvw]">
            <div class="flex justify-center">
                <div class="flex justify-center gap-2">
                    <div class="flex items-center">
                        <IconEmail class="min-h-[70%] min-w-full" />
                    </div>
                    {{ email }}
                    <div
                        class="flex items-center"
                        @click="copyEmailToClipboard"
                        v-if="nav.clipboard"
                    >
                        <CheckIcon
                            v-if="showCheckIcon"
                            class="min-h-[70%] min-w-full animate-bounce"
                        />
                        <CopyIcon2
                            v-else
                            class="min-h-[70%] min-w-full hover:text-white cursor-pointer"
                        />
                    </div>
                </div>
            </div>
            <div class="flex justify-center">
                <a
                    :href="linkedInUrl"
                    target="_blank"
                    class="flex justify-center gap-2 hover:underline"
                >
                    <div class="flex items-center">
                        <IconLinkedIn
                            class="min-h-[70%] min-w-full"
                            fill="currentColor"
                        />
                    </div>
                    LinkedIn
                </a>
            </div>
            <div class="flex justify-center">
                <a
                    :href="gitHubUrl"
                    target="_blank"
                    class="flex justify-center gap-2 hover:underline"
                >
                    <div class="flex items-center">
                        <IconGitHub
                            class="min-h-[70%] min-w-full"
                            fill="currentColor"
                        />
                    </div>
                    GitHub
                </a>
            </div>
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

::selection {
    background: rgb(23 23 23);
    color: white;
}
</style>

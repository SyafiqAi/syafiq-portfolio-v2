<script setup lang="ts">
import { ref } from "vue";
import CopyIcon from "../icons/CopyIcon.vue";
import IconGmail from "../icons/IconGmail.vue";
import IconBox from "../SideContacts/IconBox.vue";
import CheckIcon from "../icons/CheckIcon.vue";
import CrossIcon from "../icons/CrossIcon.vue";

const email = "isyafiq@gmail.com";
const showCheckIcon = ref(false);
const showXIcon = ref(false);

function copyEmailToClipboard() {
    navigator.clipboard
        .writeText(email)
        .then(() => {
            showCheckIcon.value = true;

            setTimeout(() => {
                showCheckIcon.value = false;
            }, 1300);
        })
        .catch(() => {
            showXIcon.value = true;

            setTimeout(() => {
                showXIcon.value = false;
            }, 1300);
        });
}
</script>

<template>
    <div class="relative group/email">
        <IconBox><IconGmail /></IconBox>
        <div
            class="text-nowrap absolute top-full left-[50%] -translate-x-[50%] mt-2 invisible opacity-0 origin-top scale-0 group-hover/email:scale-100 group-hover/email:opacity-100 group-hover/email:visible transition-all ease-out delay-300 group-hover/email:delay-0 flex items-center gap-1 p-2"
        >
            <span class="select-text">
                {{ email }}
            </span>
            <div
                class="size-4 inline-block cursor-pointer text-neutral-400 hover:text-white"
                @click="copyEmailToClipboard"
            >
                <CheckIcon
                    v-if="showCheckIcon"
                    class="text-white animate-bounce"
                />
                <div v-else-if="showXIcon" class="scale-150">
                    <CrossIcon class="text-white animate-bounce" />
                </div>
                <CopyIcon v-else />
            </div>
        </div>
    </div>
</template>

<style scoped></style>

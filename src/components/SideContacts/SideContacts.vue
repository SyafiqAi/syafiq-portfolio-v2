<script setup lang="ts">
import { markRaw, ref } from "vue";
import IconGitHub from "../icons/IconGitHub.vue";
import IconGmail from "../icons/IconGmail.vue";
import IconLinkedIn from "../icons/IconLinkedIn.vue";
import IconBox from "./IconBox.vue";

const github = markRaw(IconGitHub);
const gmail = markRaw(IconGmail);
const linkedin = markRaw(IconLinkedIn);
const icons = ref([github, gmail, linkedin]);
</script>

<template>
    <div class="fixed h-lvh items-center flex">
        <div
            class="flex flex-col gap-6 ml-4 opacity-50 hover:opacity-100 transition-opacity duration-200 pr-44"
        >
            <div v-for="(Icon, index) in icons" :key="index">
                <IconBox>
                    <component :is="Icon" />
                </IconBox>
            </div>
        </div>
    </div>
</template>

<style scoped></style>

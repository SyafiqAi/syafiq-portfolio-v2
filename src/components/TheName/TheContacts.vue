<script setup lang="ts">
import IconBox from "../SideContacts/IconBox.vue";
import IconGitHub from "../icons/IconGitHub.vue";
import IconLinkedIn from "../icons/IconLinkedIn.vue";
import TheGmail from "./TheGmail.vue";

const linkedInLink = "https://www.linkedin.com/in/syafiq-aiman-b10b58303";
const gitHubLink = "https://github.com/SyafiqAi";
</script>

<template>
    <div
        class="font-extralight flex gap-10 mt-4 lg:mt-8 opacity-50 group-hover:opacity-100 transition-opacity"
    >
        <a :href="linkedInLink" target="_blank">
            <IconBox><IconLinkedIn /></IconBox>
        </a>
        <TheGmail />
        <a :href="gitHubLink" target="_blank">
            <IconBox><IconGitHub /></IconBox>
        </a>
    </div>
</template>

<style scoped></style>

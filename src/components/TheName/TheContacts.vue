<script setup lang="ts">
import IconBox from "../SideContacts/IconBox.vue";
import IconGitHub from "../icons/IconGitHub.vue";
import IconLinkedIn from "../icons/IconLinkedIn.vue";
import TheGmail from "./TheGmail.vue";
</script>

<template>
    <div
        class="font-extralight flex gap-10 mt-4 lg:mt-8 opacity-50 group-hover:opacity-100 transition-opacity"
    >
        <IconBox><IconLinkedIn /></IconBox>
        <TheGmail />
        <IconBox><IconGitHub /></IconBox>
    </div>
</template>

<style scoped></style>

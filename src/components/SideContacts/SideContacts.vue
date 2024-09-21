<script setup lang="ts">
import IconGitHub from "../icons/IconGitHub.vue";
import IconGmail from "../icons/IconGmail.vue";
import IconLinkedIn from "../icons/IconLinkedIn.vue";
import IconBox from "./IconBox.vue";
</script>

<template>
    <div class="fixed h-lvh items-center flex">
        <div class="flex flex-col gap-6 ml-4">
            <IconBox>
                <IconLinkedIn />
            </IconBox>
            <IconBox>
                <IconGitHub />
            </IconBox>
            <IconBox>
                <IconGmail />
            </IconBox>
        </div>
    </div>
</template>

<style scoped></style>

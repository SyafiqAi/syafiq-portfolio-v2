<script setup lang="ts">
import GradientText from "../GradientText.vue";
import TheContacts from "./TheContacts.vue";
</script>

<template>
    <div
        class="flex items-center justify-center min-h-svh select-none flex-col"
    >
        <div class="flex flex-col items-center group py-32">
            <span class="font-extralight mb-2">Syafiq</span>
            <h1 class="font-black text-[9vw] text-nowrap max-w-[100lvw]">
                <GradientText>Web Developer</GradientText>
            </h1>
            <TheContacts />
        </div>
    </div>
</template>
<style scoped></style>

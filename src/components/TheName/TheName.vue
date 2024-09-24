<script setup lang="ts">
import GradientText from "../GradientText.vue";
import TheContacts from "./TheContacts.vue";
</script>

<template>
    <div class="flex items-center justify-center h-svh select-none flex-col">
        <div class="flex flex-col items-center group py-32">
            <span class="font-extralight mb-2">Syafiq</span>
            <h1
                class="font-black text-4xl md:text-6xl lg:text-9xl text-nowrap max-w-[100lvw]"
            >
                <GradientText text="Web Developer" />
            </h1>
            <TheContacts />
        </div>
    </div>
</template>
<style scoped></style>

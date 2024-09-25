<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef } from "vue";
import GradientText from "../GradientText.vue";
import TheContacts from "./TheContacts.vue";

const ref = useTemplateRef("section");

function onScroll() {
    if (window.scrollY > 0) {
        ref.value?.classList.add("short-section");
    } else {
        setTimeout(() => {
            ref.value?.classList.remove("short-section");
        }, 1000);
    }
}

onMounted(() => {
    window.addEventListener("scroll", onScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll);
});
</script>

<template>
    <div
        class="flex items-center justify-center h-[100svh] select-none flex-col transition-all duration-[1s]"
        ref="section"
    >
        <div class="flex flex-col items-center group py-32">
            <span class="font-extralight mb-2">Syafiq</span>
            <h1
                class="font-black text-4xl md:text-6xl lg:text-9xl text-nowrap max-w-[100lvw]"
            >
                <GradientText>Web Developer</GradientText>
            </h1>
            <TheContacts />
        </div>
    </div>
</template>
<style scoped>
.short-section {
    height: 30lvh;
}
</style>

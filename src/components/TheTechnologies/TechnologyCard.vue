<script setup lang="ts">
import { onMounted, useTemplateRef } from "vue";
import TiltCard from "./TiltCard.vue";

const { technology, src, shadowColor } = defineProps<{
    technology: string;
    src: string;
    shadowColor: string;
}>();

const shadowRef = useTemplateRef("shadowRef");

onMounted(() => {
    shadowRef.value?.style.setProperty("--shadow-color", shadowColor);
});
</script>

<template>
    <div class="card-container group">
        <div
            ref="shadowRef"
            class="shadow-lg group-hover:shadow-xl group-hover:animate-pulse rounded-lg size-full absolute shadow-black transition-shadow duration-500 group-hover:shadow-[var(--shadow-color)]"
        />
        <TiltCard class="card">
            <img :src="src" class="h-8" />
            <p>
                {{ technology }}
            </p>
        </TiltCard>
    </div>
</template>

<style scoped lang="postcss">
.card {
    @apply h-24 w-24 p-4 text-center align-text-bottom transition-colors duration-300 rounded-xl bg-neutral-800 flex flex-col justify-between select-none;
}

.card-container {
    @apply flex justify-center items-center relative;
}
</style>

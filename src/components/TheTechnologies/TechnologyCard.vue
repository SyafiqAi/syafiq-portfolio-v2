<script setup lang="ts">
import TiltCard from "./TiltCard.vue";

const { technology, src, classname } = defineProps<{
    technology: string;
    src: string;
    classname: string;
}>();
</script>

<template>
    <div class="card-container group">
        <div
            class="shadow-lg group-hover:shadow-xl group-hover:animate-pulse rounded-lg size-full absolute shadow-black transition-shadow duration-500"
            :class="classname"
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
    @apply h-24 w-24 p-4 text-center align-text-bottom cursor-pointer transition-colors duration-300 rounded-xl bg-neutral-800 flex flex-col justify-between;
}

.card-container {
    @apply flex justify-center items-center relative;
}
</style>

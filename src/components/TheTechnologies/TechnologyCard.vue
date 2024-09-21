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
            class="shadow-xl group-hover:animate-pulse rounded-lg size-full absolute"
            :class="classname"
        />
        <TiltCard class="card">
            <img :src="src" class="scale-75" /> {{ technology }}
        </TiltCard>
    </div>
</template>

<style scoped lang="postcss">
.card {
    @apply h-32 w-24 p-2 text-center align-text-bottom cursor-pointer transition-colors duration-300 rounded-md bg-neutral-900 flex flex-col justify-between;
}

.card-container {
    @apply flex justify-center items-center relative;
}
</style>

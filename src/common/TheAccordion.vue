<script setup lang="ts">
const { isOpen } = defineProps<{ isOpen: boolean }>();
</script>

<template>
    <div
        :class="`accordion-content grid  ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} transition-[grid-template-rows] duration-500`"
    >
        <div class="overflow-hidden">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped></style>

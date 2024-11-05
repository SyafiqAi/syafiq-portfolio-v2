<script setup lang="ts">
const { title } = defineProps<{ title?: string }>();
</script>

<template>
    <section>
        <h2 v-if="!!title">{{ title }}</h2>
        <div class="ml-[20px] my-6">
            <slot></slot>
        </div>
    </section>
</template>

<style scoped></style>

<script setup lang="ts">
import { onMounted, useTemplateRef } from "vue";
import VanillaTilt from "vanilla-tilt";

const card = useTemplateRef("card");

onMounted(() => {
    VanillaTilt.init(card.value!, {
        transition: true,
        // max: 5,
        scale: 1.1,
        reverse: true,
        glare: true,
        "max-glare": 0.1,
    });
});
</script>

<template>
    <div ref="card" data-tilt>
        <slot></slot>
    </div>
</template>

<style scoped></style>

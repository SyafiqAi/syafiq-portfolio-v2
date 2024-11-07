<script setup lang="ts">
import TheSection from "@/common/TheSection.vue";
import { skills } from "@/data/skills";
</script>

<template>
    <TheSection title="Skills">
        <ul class="columns-2">
            <li v-for="(skill, index) in skills" :key="index + skill">
                {{ skill }}
            </li>
        </ul>
    </TheSection>
</template>

<style scoped></style>

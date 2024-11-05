<script setup lang="ts">
import TheSection from "@/common/TheSection.vue";
import { skills } from "@/data/skills";
</script>

<template>
    <TheSection title="Skills">
        <div class="grid grid-cols-2">
            <span v-for="(skill, index) in skills" :key="index + skill">
                {{ skill }}
            </span>
        </div>
    </TheSection>
</template>

<style scoped></style>

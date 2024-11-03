<script setup lang="ts">
import TheSection from "@/common/TheSection.vue";
import { skills } from "@/data/skills";
</script>

<template>
    <div>
        <h2>Skills</h2>
        <TheSection>
            <div class="grid grid-cols-2">
                <span v-for="(skill, index) in skills" :key="index + skill">
                    {{ skill }}
                </span>
            </div>
        </TheSection>
    </div>
</template>

<style scoped></style>

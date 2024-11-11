<script setup lang="ts">
import TheSection from "@/common/TheSection.vue";
import { skills } from "@/data/skills";
import ExperienceCardListItem from "../../common/GreenListItem.vue";
</script>

<template>
    <TheSection title="Skills">
        <ul class="columns-2">
            <ExperienceCardListItem v-for="(skill, index) in skills" :key="index + skill">
                {{ skill }}
            </ExperienceCardListItem>
        </ul>
    </TheSection>
</template>

<style scoped></style>

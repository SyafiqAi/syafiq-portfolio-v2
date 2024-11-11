<script setup lang="ts">
import "@/assets/main.css";
import EducationSection from "@/components/Sections/EducationSection.vue";
import ExperienceSection from "@/components/Sections/Experience/ExperienceSection.vue";
import SkillsSection from "@/components/Sections/SkillsSection.vue";
import TheFooter from "@/components/Sections/TheFooter.vue";
import TitleSection from "@/components/Sections/TitleSection.vue";
</script>

<template>
    <div class="mx-auto sm px-10 pt-8 max-w-[640px]">
        <main>
            <TitleSection />
            <ExperienceSection />
            <SkillsSection />
            <EducationSection />
        </main>
        <hr class="opacity-20" />
        <footer>
            <TheFooter />
        </footer>
    </div>
</template>

<style lang="postcss"></style>

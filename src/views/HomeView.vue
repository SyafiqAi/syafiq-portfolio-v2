<script setup lang="ts">
import "@/assets/main.css";
import ExperienceSection from "@/components/Sections/ExperienceSection.vue";
import SkillsSection from "@/components/Sections/SkillsSection.vue";
import TheFooter from "@/components/Sections/TheFooter.vue";
import EducationSection from "@/components/Sections/EducationSection.vue";
</script>

<template>
    <div class="mx-auto sm px-10 pt-8 max-w-[640px]">
        <main>
            <h1>Syafiq's Portfolio</h1>
            <p>I do web stuff.</p>
            <ExperienceSection />
            <SkillsSection />
            <EducationSection />
        </main>
        <hr class="mt-20" />
        <footer>
            <TheFooter />
        </footer>
    </div>
</template>

<style lang="postcss"></style>

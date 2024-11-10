<script setup lang="ts">
import "@/assets/main.css";
import EducationSection from "@/components/Sections/EducationSection.vue";
import ExperienceSection from "@/components/Sections/Experience/ExperienceSection.vue";
import SkillsSection from "@/components/Sections/SkillsSection.vue";
import TheFooter from "@/components/Sections/TheFooter.vue";
</script>

<template>
    <div class="mx-auto sm px-10 pt-8 max-w-[640px]">
        <main>
            <h1 class="border-l-8 border-l-neonGreen-500 pl-6">
                Syafiq's <br />
                Portfolio
            </h1>
            <p class="mb-[30px]">I do web stuff.</p>
            <ExperienceSection />
            <SkillsSection />
            <EducationSection />
        </main>
        <hr class="my-section opacity-20" />
        <footer>
            <TheFooter />
        </footer>
    </div>
</template>

<style lang="postcss"></style>

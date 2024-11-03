<script setup lang="ts">
import '@/assets/main.css'
import ExperienceSection from '@/components/Sections/ExperienceSection.vue';
import SkillsSection from '@/components/Sections/SkillsSection.vue';

</script>

<template>
        <div >
            <main class="mx-auto sm px-[40px] py-[100px] max-w-[640px]">
                <h1>Syafiq's Portfolio</h1>
                <p>I do web stuff.</p>
                <ExperienceSection />
                <SkillsSection />
            </main>
        </div>
</template>

<style lang="postcss">
</style>
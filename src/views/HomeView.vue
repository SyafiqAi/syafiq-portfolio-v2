<script setup lang="ts">
import '@/assets/main.css'
import ExperienceSection from '@/components/Sections/ExperienceSection.vue';
import SkillsSection from '@/components/Sections/SkillsSection.vue';
import TheFooter from '@/components/Sections/TheFooter.vue';

</script>

<template>

        <div class="bg-white py-[100px]">
            <div class="mx-auto sm px-[40px] py-[50px] max-w-[640px] drop-shadow-2xl shadow-black bg-white rounded-2xl">
                <main >
                    <h1>Syafiq's Portfolio</h1>
                    <p>I do web stuff.</p>
                    <ExperienceSection />
                    <SkillsSection />
                </main>
                <footer>
                    <TheFooter />
                </footer>
            </div>
        </div>
</template>

<style lang="postcss">
</style>
<script setup lang="ts">
import SectionTitle from "../SectionTitle.vue";
import ExperienceCard from "./ExperienceCard.vue";

interface Experience {
    position: string;
    company: string;
    date: string;
    content: string[];
}

const rfLaiyonExperience: Experience = {
    position: "Front End Web Developer",
    company: "RF Laiyon Interactive",
    date: "May 2024 - Present",
    content: [
        "Front end development using React - Next.js.",
        "Worked closely with back-end developers to integrate RESTful APIs.",
        "Learned authorisation using JWT.",
        "CI/CD development.",
        "Contributed to the development of a textbook management system for the public education sector.",
        "Self-learned React - Next.js, Node.js, Laravel.",
    ],
};

const dsmExperience: Experience = {
    position: "Front End Web Developer",
    company: "Digital System Malaysia",
    date: "Oct 2022 - Jan 2023",
    content: [
        "Front end development using Vue.js. ",
        "Worked in a team of 7 developers in an agile development method using Microsoft Azure (DevOps).",
        "Contributed to the development of an ERP suite for trucking companies.",
        "Exposure to CI/CD development.",
        "Self-learned Vue.js, Nuxt.js.",
    ],
};

const experiences = [rfLaiyonExperience, dsmExperience];
</script>

<template>
    <div class="my-20">
        <SectionTitle class="flex justify-center mt-10 w-full font-extralight">
            Experience
        </SectionTitle>
        <div class="flex flex-col gap-y-20 items-center my-16">
            <ExperienceCard
                v-for="experience in experiences"
                :key="experience.company"
            >
                <template #position>
                    {{ experience.position }}
                </template>
                <template #company> {{ experience.company }}</template>
                <template #date> {{ experience.date }}</template>
                <ul class="list-disc list-outside pl-4 space-y-2">
                    <li
                        v-for="(item, index) in experience.content"
                        :key="index"
                    >
                        {{ item }}
                    </li>
                </ul>
            </ExperienceCard>
        </div>
    </div>
</template>

<style scoped></style>

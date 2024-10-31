<script setup lang="ts">
import { ref } from "vue";
import SectionTitle from "../SectionTitle.vue";
import ExperienceCard from "./ExperienceCard.vue";
import rfLogo from "@/assets/logos/rflaiyon.png";
import dsmLogo from "@/assets/logos/dsm.png";
import alphaLogo from "@/assets/logos/alphared.png";
interface Experience {
    position: string;
    company: string;
    date: string;
    content: string[];
    logoSrc: string;
    logoMainColor: string;
    companyWebsiteUrl: string;
}

const rfLaiyonExperience: Experience = {
    position: "Front-End Web Developer",
    company: "RF Laiyon Interactive",
    date: "28 May 2024 - 13 Nov 2024",
    content: [
        "Front-end development using React, Next.js.",
        "Worked closely with back-end developers to integrate RESTful APIs.",
        "Learned authorisation using JWT.",
        "CI/CD development.",
        "Contributed to the development of a textbook management system for the public education sector.",
        "Self-learned React, Next.js, Node.js, Laravel.",
    ],
    logoSrc: rfLogo,
    logoMainColor: "hover:shadow-[#49c0a0ff]",
    companyWebsiteUrl: "https://rflaiyon.com/",
};

const dsmExperience: Experience = {
    position: "Front-End Web Developer",
    company: "Digital System Malaysia",
    date: "Oct 2022 - Jan 2023",
    content: [
        "Front-end development using Vue.js. ",
        "Worked in a team of 7 developers in an agile development method using Microsoft Azure (DevOps).",
        "Contributed to the development of an ERP suite for trucking companies.",
        "Exposure to CI/CD development.",
        "Self-learned Vue.js, Nuxt.js.",
    ],
    logoSrc: dsmLogo,
    logoMainColor: "hover:shadow-[#ff0000ff]",
    companyWebsiteUrl: "https://www.dsm.com.my/",
};
const alphaRedExperience: Experience = {
    position: "Back-End Web Developer",
    company: "Alpha Red Solutions",
    date: "Nov 14 2024 - Present",
    content: [
        "TBA. ",
    ],
    logoSrc: alphaLogo,
    logoMainColor: "hover:shadow-[#d14437ff]",
    companyWebsiteUrl: "https://www.alphareds.com/",
};

const experiences = [alphaRedExperience, rfLaiyonExperience, dsmExperience];

const currentIsOpen = ref(-1);

function handleOpen(index: number) {
    if (currentIsOpen.value === index) currentIsOpen.value = -1;
    else currentIsOpen.value = index;
}
</script>

<template>
    <div class="my-20 mb-48">
        <SectionTitle class="flex justify-center mt-10 w-full font-extralight">
            Experience
        </SectionTitle>

        <div class="flex flex-col gap-y-10 items-center my-16">
            <ExperienceCard
                v-for="(experience, index) in experiences"
                :key="experience.company"
                :logo-src="experience.logoSrc"
                :company="experience.company"
                :company-logo-main-color="experience.logoMainColor"
                :is-open="currentIsOpen === index"
                :company-website-url="experience.companyWebsiteUrl"
                @click="handleOpen(index)"
            >
                <template #position>
                    {{ experience.position }}
                </template>
                <template #company> {{ experience.company }}</template>
                <template #date> {{ experience.date }}</template>
                <ul>
                    <li
                        v-for="(item, index) in experience.content"
                        :key="index"
                        class="text-sm md:text-base px-4 py-2 rounded-xl text-justify"
                    >
                        {{ item }}
                    </li>
                </ul>
            </ExperienceCard>
        </div>
    </div>
</template>

<style scoped></style>

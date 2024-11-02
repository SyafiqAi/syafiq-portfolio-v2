<script setup lang="ts">
import alphaLogo from "@/assets/logos/alphared.png";
import dsmLogo from "@/assets/logos/dsm.png";
import rfLogo from "@/assets/logos/rflaiyon.png";
import TheSection from "../Common/TheSection.vue";
import ExperienceCard from "./ExperienceCard.vue";
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
    logoMainColor: "#49c0a0ff",
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
    logoMainColor: "#ff0000ff",
    companyWebsiteUrl: "https://www.dsm.com.my/",
};
const alphaRedExperience: Experience = {
    position: "Back-End Web Developer",
    company: "Alpha Red Solutions",
    date: "Nov 14 2024 - Present",
    content: ["TBA. "],
    logoSrc: alphaLogo,
    logoMainColor: "#d14437ff",
    companyWebsiteUrl: "https://www.alphareds.com/",
};

const experiences = [alphaRedExperience, rfLaiyonExperience, dsmExperience];
</script>

<template>
    <TheSection title="Experience">
        <div class="flex flex-col gap-y-10 items-center">
            <ExperienceCard
                v-for="experience in experiences"
                :key="experience.company"
                :logo-src="experience.logoSrc"
                :company="experience.company"
                :company-logo-main-color="experience.logoMainColor"
                :company-website-url="experience.companyWebsiteUrl"
                :position="experience.position"
                :date="experience.date"
            >
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
    </TheSection>
</template>

<style scoped></style>

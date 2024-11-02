<script setup lang="ts">
import unitenLogo from "@/assets/logos/uniten-logo.png";
import utarLogo from "@/assets/logos/utar-logo.png";
import SectionTitle from "../SectionTitle.vue";
import EducationCard from "./EducationCard.vue";

interface Education {
    university: string;
    date: string;
    level: string;
    program: string;
    logo: string;
    website: string;
    logoMainColor: string;
}

const utar: Education = {
    logo: utarLogo,
    university: "Universiti Tunku Abdul Rahman",
    logoMainColor: "#17169fff",
    date: "Oct 2020 - May 2024",
    program: "Applied Mathematics",
    level: "B.Sc. (Hons)",
    website: "https://study.utar.edu.my/applied-math-computing.php",
};

const uniten: Education = {
    logo: unitenLogo,
    university: "Universiti Tenaga Nasional",
    logoMainColor: "#e54225ff",
    date: "2018 - 2020",
    program: "Mechanical Engineering",
    level: "Diploma",
    website:
        "https://www.uniten.edu.my/programmes/engineering/diploma-in-mechanical-engineering/",
};

const educationList = [utar, uniten];
</script>

<template>
    <div class="min-h-[100vh]">
        <div class="text-center my-24">
            <SectionTitle>Education</SectionTitle>
        </div>

        <div class="w-full flex items-center flex-col gap-10">
            <EducationCard
                v-for="education in educationList"
                :key="education.university"
                :university="education.university"
                :date="education.date"
                :level="education.level"
                :program="education.program"
                :logo="education.logo"
                :website="education.website"
                :logoMainColor="education.logoMainColor"
            >
            </EducationCard>
        </div>
    </div>
</template>

<style scoped></style>

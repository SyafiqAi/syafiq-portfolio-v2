<script setup lang="ts">
import SectionTitle from "../SectionTitle.vue";
import TechnologyCard from "./TechnologyCard.vue";
import nodeIcon from '@/assets/logos/node-icon.svg'
import reactIcon from "@/assets/logos/react-icon.svg"
import nextIcon from "@/assets/logos/next-icon.svg"
import gitIcon from "@/assets/logos/git-icon.svg"
import vueIcon from "@/assets/logos/vue-icon.svg"
import typescriptIcon from "@/assets/logos/typescript-icon.svg"
</script>

<template>
    <div class="min-h-lvh font-extralight text-sm flex flex-col justify-center">
        <div class="flex justify-center items-center">
            <SectionTitle>My Tech Stack</SectionTitle>
        </div>
        <div class="size-full flex justify-center items-center my-16">
            <div
                class="grid grid-rows-3 md:grid-rows-2 grid-cols-2 md:grid-cols-3 size-fit gap-x-10 md:gap-x-40 gap-y-10 md:gap-y-28"
            >
                <TechnologyCard
                    technology="Node.js"
                    :src="nodeIcon"
                    shadow-color="#8cc84bff"
                />
                <TechnologyCard
                    technology="React"
                    :src="reactIcon"
                    shadow-color="#53c1deff"
                />
                <TechnologyCard
                    technology="Next.js"
                    :src="nextIcon"
                    shadow-color="white"
                />
                <TechnologyCard
                    technology="Git"
                    :src="gitIcon"
                    shadow-color="#ee513bff"
                />
                <TechnologyCard
                    technology="Vue"
                    :src="vueIcon"
                    shadow-color="#4dba87ff"
                />
                <TechnologyCard
                    technology="TypeScript"
                    :src="typescriptIcon"
                    shadow-color="#3178c6ff"
                />
            </div>
        </div>
    </div>
</template>

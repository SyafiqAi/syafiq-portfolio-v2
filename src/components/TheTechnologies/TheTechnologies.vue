<script setup lang="ts">
import gitIcon from "@/assets/logos/git-icon.svg";
import nextIcon from "@/assets/logos/next-icon.svg";
import nodeIcon from '@/assets/logos/node-icon.svg';
import reactIcon from "@/assets/logos/react-icon.svg";
import typescriptIcon from "@/assets/logos/typescript-icon.svg";
import vueIcon from "@/assets/logos/vue-icon.svg";
import TheSection from "../Common/TheSection.vue";
import TechnologyCard from "./TechnologyCard.vue";
</script>

<template>
    <TheSection title="My Skills">
        <div class="size-full flex justify-center items-center">
            <div
                class="grid grid-rows-3 md:grid-rows-2 grid-cols-2 md:grid-cols-3 size-fit gap-x-10 md:gap-x-40 gap-y-10 md:gap-y-28 font-extralight text-sm"
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
    </TheSection>
</template>

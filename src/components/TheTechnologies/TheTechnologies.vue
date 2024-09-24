<script setup lang="ts">
import GradientText from "../GradientText.vue";
import TechnologyCard from "./TechnologyCard.vue";
</script>

<template>
    <div class="h-lvh font-extralight text-sm grid grid-rows-[4fr_8fr_4fr]">
        <div class="text-4xl md:text-6xl flex items-center justify-center">
            <GradientText text="My Tech Stack" />
        </div>
        <div class="size-full flex justify-center items-center">
            <div
                class="grid grid-rows-3 md:grid-rows-2 grid-cols-2 md:grid-cols-3 size-fit gap-x-10 md:gap-x-40 gap-y-10 md:gap-y-28"
            >
                <TechnologyCard
                    technology="Node.js"
                    src="src/assets/logos/node-icon.svg"
                    shadow-color="#8cc84bff"
                />
                <TechnologyCard
                    technology="React"
                    src="src/assets/logos/react-icon.svg"
                    shadow-color="#53c1deff"
                />
                <TechnologyCard
                    technology="Next.js"
                    src="src/assets/logos/next-icon.svg"
                    shadow-color="white"
                />
                <TechnologyCard
                    technology="Git"
                    src="src/assets/logos/git-icon.svg"
                    shadow-color="#ee513bff"
                />
                <TechnologyCard
                    technology="Vue"
                    src="src/assets/logos/vue-icon.svg"
                    shadow-color="#4dba87ff"
                />
                <TechnologyCard
                    technology="TypeScript"
                    src="src/assets/logos/typescript-icon.svg"
                    shadow-color="#3178c6ff"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TechnologyCard from "./TechnologyCard.vue";
</script>

<template>
    <div class="h-lvh font-extralight flex items-center justify-center text-sm">
        <div
            class="grid grid-rows-3 md:grid-rows-2 grid-cols-2 md:grid-cols-3 size-fit gap-x-20 md:gap-x-44 gap-y-20 md:gap-y-28"
        >
            <TechnologyCard
                technology="Node.js"
                src="src/assets/logos/node-icon.svg"
                classname="group-hover:shadow-[#8cc84bff]"
            />
            <TechnologyCard
                technology="React"
                src="src/assets/logos/react-icon.svg"
                classname="group-hover:shadow-[#53c1deff]"
            />
            <TechnologyCard
                technology="Next.js"
                src="src/assets/logos/next-icon.svg"
                classname="group-hover:shadow-white"
            />
            <TechnologyCard
                technology="Git"
                src="src/assets/logos/git-icon.svg"
                classname="group-hover:shadow-[#ee513bff]"
            />
            <TechnologyCard
                technology="Vue"
                src="src/assets/logos/vue-icon.svg"
                classname="group-hover:shadow-[#4dba87ff]"
            />
            <TechnologyCard
                technology="TypeScript"
                src="src/assets/logos/typescript-icon.svg"
                classname="group-hover:shadow-[#3178c6ff]"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import TiltCard from "./TiltCard.vue";

const hoverBorderColors = {
    react: "hover:border-[#53c1deff] shadow-[#53c1deff]",
};
</script>

<template>
    <div
        class="h-lvh font-extralight box-red flex items-center justify-center text-sm"
    >
        <div
            class="grid grid-rows-3 md:grid-rows-2 grid-cols-2 md:grid-cols-3 size-fit gap-x-20 md:gap-x-44 gap-y-20 md:gap-y-28"
        >
            <div class="grid-item relative group">
                <div
                    class="shadow-xl shadow-[#53c1deff] group-hover:animate-pulse rounded-lg size-full absolute"
                />
                <TiltCard class="card" :class="hoverBorderColors.react">
                    <img src="@/assets/logos/react-icon.svg" /> React
                </TiltCard>
            </div>
            <div class="grid-item relative group">
                <div
                    class="shadow-xl shadow-[#4dba87ff] group-hover:animate-pulse rounded-lg size-full absolute"
                />
                <TiltCard class="card">
                    <img src="@/assets/logos/vue-icon.svg" /> Vue
                </TiltCard>
            </div>
            <div class="grid-item">
                <TiltCard class="card hover:border-blue-500">
                    typescript
                </TiltCard>
            </div>
            <div class="grid-item">
                <TiltCard class="card hover:border-green-500">
                    nodejs
                </TiltCard>
            </div>
            <div class="grid-item">
                <TiltCard class="card hover:border-gray-800"> nextjs </TiltCard>
            </div>
            <div class="grid-item">
                <TiltCard class="card hover:border-orange-500"> git </TiltCard>
            </div>
        </div>
    </div>
</template>

<style scoped lang="postcss">
.card {
    @apply h-32 w-24 p-2 text-center align-text-bottom cursor-pointer transition-colors duration-300 rounded-md bg-neutral-900 flex flex-col justify-between;
}

.grid-item {
    @apply flex justify-center items-center;
}
</style>

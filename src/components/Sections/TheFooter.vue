<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
    <div
        class="py-section flex flex-col items-center md:flex-row gap-4 md:gap-6 md:justify-center"
    >
        <span>isyafiq@gmail.com</span>
        <span>
            <a href="http://www.linkedin.com/in/syafiq-aiman-b10b58303">
                LinkedIn
            </a>
        </span>
        <span><a href="https://github.com/SyafiqAi">GitHub</a></span>
        <span> &#169; {{ currentYear }} Syafiq Aiman </span>
    </div>
</template>

<style scoped></style>

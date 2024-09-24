<script setup lang="ts">
import TheExperience from "@/components/TheExperience/TheExperience.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheName from "@/components/TheName/TheName.vue";
import TheTechnologies from "@/components/TheTechnologies/TheTechnologies.vue";
</script>

<template>
    <div>
        <main class="relative">
            <aside>
                <!-- <SideContacts /> -->
            </aside>
            <TheName />
            <TheTechnologies />
            <TheExperience />
        </main>
        <footer>
            <TheFooter />
        </footer>
    </div>
</template>

<script setup lang="ts">
import SideContacts from "@/components/SideContacts/SideContacts.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheName from "@/components/TheName.vue";
import TheTechnologies from "@/components/TheTechnologies/TheTechnologies.vue";
</script>

<template>
    <div>
        <main class="relative">
            <aside>
                <SideContacts />
            </aside>
            <TheName />
            <TheTechnologies />
        </main>
        <footer>
            <TheFooter />
        </footer>
    </div>
</template>

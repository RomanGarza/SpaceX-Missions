<template>
  <div class="bg-base-200">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else class="grid grid-cols-3 gap-4">
      <div v-for="launch in result.launchesPast" :key="launch.id" class="m-4">
        <LaunchCard :launch="launch" style="cursor: pointer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { PAST_LAUNCHES } from "../graphql/queries";
import LaunchCard from "../components/LaunchCard.vue";

const missionAmount = ref(3);

if (localStorage.limit9) {
  missionAmount.value = parseInt(localStorage.limit);
}

const { result, loading, error } = useQuery(PAST_LAUNCHES, {
  limit: missionAmount.value,
});
</script>

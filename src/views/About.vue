<template>
  <p v-if="error">Something went wrong...</p>
  <p v-else-if="loading">Loading...</p>

  <div v-else class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      <img
        src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BhY2UlMjB4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        class="w-2/3 rounded-lg shadow-2xl"
        alt="company image"
      />
      <div>
        <h1 class="text-5xl font-bold">{{ result.company.name }}</h1>
        <p class="pt-2 mt-6">
          <span class="font-bold">Ceo:</span> {{ result.company.ceo }}
        </p>
        <p class="pt-2">
          <span class="font-bold">Founded:</span> {{ result.company.founded }}
        </p>
        <p class="pt-2">
          <span class="font-bold">Valuation:</span>
          {{ result.company.valuation }}
        </p>
        <p class="pt-2">
          <span class="font-bold">Employees:</span>
          {{ result.company.employees }}
        </p>
        <p class="pt-2">
          <span class="font-bold">Headquarters:</span>
          {{ result.company.headquarters.city }},
          {{ result.company.headquarters.state }}
        </p>
        <p class="pt-2">
          <span class="font-bold">About:</span> {{ result.company.summary }}
        </p>
        <router-link class="btn btn-primary mt-6" to="/missions"
          ><a>Missions</a></router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { COMPANY_INFO } from "../graphql/queries";
import { useQuery } from "@vue/apollo-composable";

const { result, loading, error } = useQuery(COMPANY_INFO);
</script>

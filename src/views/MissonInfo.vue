<template>
  <div class="bg-base-200">
    <div v-if="!result" class="text-center flex">Loading...</div>
    <div v-else class="card flex items-stretch bg-slate-400 text-black">
      <h1 class="fw-bold text-center m-lg-5 m-3">
        {{ result.launch.mission_name }}
      </h1>
      <div class="px-10 pt-10 card-body items-center text-center">
        <img v-if="result.launch.links.mission_patch" :id="result.launch.links.mission_patch"
          :src="result.launch.links.mission_patch" alt="mission patch" class="h-96 m-3" />
        <img v-else :id="result.launch.links.flickr_images[0]" :src="result.launch.links.flickr_images[0]"
          alt="mission photo" class="h-96 m-3 rounded-xl" />
        <h6 class="m-2 mt-4">Rocket: {{ result.launch.rocket.rocket_name }}</h6>
        <h6 class="m-2">
          Launch site: {{ result.launch.launch_site.site_name_long }}
        </h6>
        <h6 class="text-muted m-2">
          Launch date: {{ convertDate(result.launch.launch_date_utc) }}
        </h6>
      </div>

      <p class="m-4">{{ result.launch.details }}</p>
      <div class="card-body items-center text-center">
        <a :id="result.launch.links.wikipedia" class="link link-primary" :href="result.launch.links.wikipedia">Wikipedia
          Link</a>
      </div>
      <div class="card-body items-center text-center">
        <router-link class="btn btn-primary items-center text-center" to="/missions">
          <span>Go Back</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { LAUNCH_DETAILS } from "../graphql/queries";

const props = defineProps({
  id: {
    type: String,
    default: "0",
  },
})

const { result, loading, error } = useQuery(LAUNCH_DETAILS, {
  id: props.id,
});

function convertDate(dateString: string) {
  const dt = new Date(dateString);
  return dt.toLocaleString();
}



// export default defineComponent({
//   props: {
//     id: {
//       type: String,
//       default: "0",
//     },
//   },
//   setup(props) {
//     const { result, loading, error } = useQuery(LAUNCH_DETAILS, {
//       id: props.id,
//     });

//     return { result, loading, error };
//   },
//   methods: {
//     convertDate(dateString: string) {
//       const dt = new Date(dateString);
//       return dt.toLocaleString();
//     },
//   },
// });
</script>

<style>

</style>

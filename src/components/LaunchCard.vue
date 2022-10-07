<template>
  <div>
    <div
      @click="toDetails"
      class="card w-96 bg-base-100 shadow-xl mt-6 bg-slate-400 text-black"
    >
      <div>
        <figure class="px-10 pt-10">
          <img
            v-if="launch.links.flickr_images.length"
            :id="launch.links.flickr_images[0]"
            :src="launch.links.flickr_images[0]"
            alt="mission image"
            style="height: 25vw; object-fit: cover"
            class="rounded-lg object-contain w-full h-64"
          />
          <img
            v-else
            :id="launch.links.mission_patch"
            :src="launch.links.mission_patch"
            alt="mission patch"
            class="rounded-lg object-contain w-full h-64"
            style="height: 25vw; object-fit: contain"
          />
        </figure>
      </div>
      <div>
        <div class="card-body">
          <h5 class="card-title">{{ launch.mission_name }}</h5>
          <div>Rocket: {{ launch.rocket.rocket_name }}</div>
          <div>Launch Date: {{ convertDate(launch.launch_date_utc) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    launch: {
      type: Object,
      default: null,
    },
  },
  methods: {
    convertDate(dateString: string) {
      const dt = new Date(dateString);
      return dt.toLocaleString();
    },
    toDetails() {
      this.$router.push({
        name: "MissionInfo",
        params: { id: this.launch.id },
      });
    },
  },
};
</script>

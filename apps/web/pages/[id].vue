<template>
  <div>
    <nuxt-link to="/">Back</nuxt-link>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error?.status === 404">Error: {{ error.body.message }}</div>

    <div v-if="data">
      <h2>{{ data.body.title }} ({{ data.body.id }})</h2>
      <p>{{ data.body.content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { $client } = useNuxtApp();

const id = route.params.id as string;

const { data, error, isLoading } = $client.posts.getPost.useQuery(["posts"], () => ({
  params: {
    id,
  },
}));
</script>

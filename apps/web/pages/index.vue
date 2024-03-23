<template>
  <div>
    <div><span>Posts</span> - <nuxt-link to="/create">Create post</nuxt-link></div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">Error: {{ error }}</div>

    <div v-if="data">
      <div v-for="post in data.body" :key="post.id">
        <nuxt-link :to="`/${post.id}`">
          <h2>{{ post.title }}</h2>
        </nuxt-link>
        <p>{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp();

const { data, error, isLoading } = $client.posts.getPosts.useQuery(["posts"]);
</script>

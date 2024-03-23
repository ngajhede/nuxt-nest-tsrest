<template>
  <div>
    <p>Create post</p>
    <form @submit.prevent="createPost">
      <input v-model="title" placeholder="Title" />
      <textarea v-model="content" placeholder="Content"></textarea>
      <button type="submit" :disabled="isLoading">Create</button>
    </form>
  </div>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp();
const router = useRouter();

const title = ref("");
const content = ref("");

const { mutate, isLoading } = $client.posts.createPost.useMutation();
const createPost = async () => {
  await mutate({
    body: {
      title: title.value,
      content: content.value,
    },
  });

  router.push("/");
};
</script>

<script setup>
import DefaultTheme from "vitepress/theme";
import HomeSearch from "./components/HomeSearch.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <HomeSearch class="nav-search" />
    </template>
  </Layout>
</template>

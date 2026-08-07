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
    <!-- Mobile-only search: the desktop search lives in the navbar slot above,
         but on small screens VitePress collapses the navbar to a hamburger and
         hides nav-bar-content-after, so we surface a full-width search here. -->
    <template #layout-top>
      <HomeSearch class="nav-search nav-search--mobile" />
    </template>
  </Layout>
</template>

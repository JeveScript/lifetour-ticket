<template>
  <div class="page-container">
    <v-breadcrumb />
    <div>Dashboard</div>
  </div>
</template>

<script type="text/javascript">
import Breadcrumb from "@/components/BasicBreadcrumb.vue";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    "v-breadcrumb": Breadcrumb
  }
};
</script>

<style type="text/css" lang="less"></style>

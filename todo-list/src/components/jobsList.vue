<template>
  <div class="jobs">
    <div>
      <ul>
        <li v-for="j in jobList">{{ j }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "jobsList",
  props: {
    job: Array,
  },
  //   data() {
  //     return {
  //       jobList: [""],
  //     };
  //   },
  //   },
};
</script>

<style scoped>
</style>
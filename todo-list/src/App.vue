<template>
  <div id="app">
    <addToList @onAddNew="addNewJob($event)" />
    <jobsList :job="jobList" />
  </div>
</template>

<script>
import addToList from "./components/addToList.vue";
import jobsList from "./components/jobsList.vue";
export default {
  name: "App",
  components: {
    addToList,
    jobsList,
  },
  data() {
    return {
      jobList: [""],
    };
  },
  methods: {
    addNewJob(newj) {
      this.jobList.push(newj);
    },
  },
};
</script>

<style>
</style>

<template>
  <div id="app" class="container">
    <h4 class="bi bi-card-checklist mb-3"> Todo List - VueJs</h4>
    <addToList @onAddNew="addNewJob($event)" />
    <jobsList :job="jobList" @deleteJob="deleteJob($event)" />
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
      jobList: [],
    };
  },
  methods: {
    addNewJob(newj) {
      this.jobList.push(newj);
    },
    deleteJob(index) {
      this.jobList.splice(index, 1)
    }
  },
};
</script>

<style>
.container {
  background: #1b5f62;
  padding: 20px;
  border-radius: 10px;
  margin-top: 10vh;
}

h4 {
  color: white;
  padding: 10px;
  border-bottom: solid 1px #ffffff90;
  margin-bottom: 15px;
}

button.btn {
  width: 90px;
}
</style>

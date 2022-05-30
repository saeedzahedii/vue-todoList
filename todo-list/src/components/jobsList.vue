<template>
  <div class="jobs">
    <div>
      <ul>
        <div class="job-row" v-for="(j, index) in job" :key="j.index">
          <div>
            <li><i v-if="repeat.includes(j)" class="bi bi-check-lg"></i> {{ index + 1 }}-{{ job[index] }}</li>
          </div>
          <div>
            <button class="btn btn-danger me-2 bi bi-trash" @click="onDelete(j, index)">delete</button>
            <button v-if="!repeat.includes(j)" class="btn btn-success me-2 bi bi-check-lg"
              @click="onDone(j, index)">done</button>
            <button v-if="repeat.includes(j)" class="btn btn-warning me-2 bi bi-arrow-repeat"
              @click="onRepeat(j, index)">repeat</button>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "jobsList",
  props: ['job'],
  data() {
    return {
      doneJob: document.getElementsByClassName('job-row'),
      repeat: []
    }
  },
  methods: {
    onDelete(j, index) {
      if (this.repeat.includes(j)) {
        let i = this.repeat.indexOf(j);
        this.repeat.splice(i, 1);
      }
      this.$emit("deleteJob", index)
    },
    onDone(j, index) {
      if (this.repeat.includes(j)) {
        alert("this Job Has Done Before")
      } else {
        this.doneJob[index].classList.add("active")
        this.repeat.push(j);
        console.log('done', this.repeat)
      }
    },
    onRepeat(j, index) {
      this.doneJob[index].classList.remove("active");
      let i = this.repeat.indexOf(j);
      this.repeat.splice(i, 1);
      console.log('repeat', this.repeat);
    }
  }
};
</script>

<style scoped>
.jobs {
  padding: 20px 20px 10px;
  border-radius: 10px;
  background: lightcyan;
  margin-top: 20px;
}

.job-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: nowrap;
  background: #1b5f62;
  padding: 10px 25px;
  border-radius: 10px;
  margin-bottom: 10px;
  color: white;
}

ul {
  margin: 0px;
  padding: 0px;
}

li {
  list-style: none;
}

.job-row.active {
  background: green;
}
</style>
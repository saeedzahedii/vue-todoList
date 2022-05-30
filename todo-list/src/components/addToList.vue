<template>
  <div class="add-main">
    <div class="add-to-list">
      <input class="form-control" type="text" placeholder="please add your job title here" v-model="value" />
      <button @click="onAddList()" class="btn btn-primary bi bi-plus-lg">add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "toDoList",
  data() {
    return {
      //   jobsList: [],
      value: "",
    };
  },
  methods: {
    onAddList() {
      if (this.value == "") {
        alert("the Entered Job Is Empty");
      } else {
        this.$emit("onAddNew", this.value);
        // this.jobsList.push(this.value);
        this.value = "";
      }
    },
  },
};
</script>

<style scoped>
.add-main {
  background: lightcyan;
  padding: 20px;
  border-radius: 10px;
}

.add-to-list {
  display: flex;
  gap: 5px;
  flex-wrap: nowrap;
}
button.btn.btn-primary.bi.bi-plus-lg {
    display: flex;
    align-items: center;
    gap: 5px;
}
</style>
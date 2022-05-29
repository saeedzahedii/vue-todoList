<template>
  <div>
    <div class="add-to-list">
      <input type="text" v-model="value" />
      <button @click="onAddList()">add</button>
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
</style>
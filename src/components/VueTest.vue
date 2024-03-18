<template>
  <div class="container">
    <input type="test" v-model="text" />
    <div>
      <button @click="show()" class="btn btn-primary">show</button>
      <button @click="change()" class="btn btn-success">change</button>
    </div>
    <div class="text">{{ text }}</div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      text: "",
    };
  },
  methods: {
    show: function () {
      alert(this.text);
    },
    change: function () {
      this.text = "change";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 40px;
}
input {
  border: 1px solid #000;
}

button {
  padding: 4px;
  border: 1px solid #000;
  border-radius: 4px;
}

.text {
  margin-top: 10px;
  color: #3f3f3f;
  font-size: 14px;
}
</style>

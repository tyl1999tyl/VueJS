<template>
  <input type="text" ref="name"/>
  <button @click="handleClick">Click me</button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$refs.name.focus();
      this.$refs.name.value = "Enter here!";
    }
  }
}
</script>
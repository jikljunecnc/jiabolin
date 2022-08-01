<template>
  <div :class="status"></div>
</template>

<script>
export default {
  props: {
    status: {
      required: true,
      type: String,
      validator: function (value) {
        return ['up', 'down', 'none'].includes(value)
      }
    }
  }
}
</script>

<style scoped>
div {
  width: 32px;
  height: 32px;
  display: inline-block;
  background-repeat: no-repeat;
  vertical-align: middle;
}
.up {
  background-image: url('./arrow-red.png');
}
.down {
  background-image: url('./arrow-red.png');
  transform: rotate(180deg);
}
.none {
  background-image: url('./arrow-down.png');
}
</style>

<template>
  <button @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: $white;
}
</style>

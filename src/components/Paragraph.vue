<template>
  <p :style="{ fontSize, color }">
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    fontSize: {
      type: String,
      default: '16px',
    },
    color: {
      type: String,
      default: '#000',
    },
  },
};
</script>

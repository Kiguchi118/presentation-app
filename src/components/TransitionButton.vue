<template>
  <div>
    <div class="fixed_btn_left">
      <router-link :to="`${leftTransition}`">←</router-link>
    </div>
    <div class="fixed_btn_right">
      <router-link :to="`${rightTransition}`">→</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leftTransition: {
      type: String,
      default: undefined,
    },
    rightTransition: {
      type: String,
      default: undefined,
    },
  },
};
</script>

<style></style>

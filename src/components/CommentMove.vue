<template>
  <div class="marquee">
    <p
      :style="`color: ${fontColor}; top: ${top}px;`"
      style="font-weight: bolder;"
    >
      {{ comment }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: String,
      default: undefined,
    },
    top: {
      type: Number,
      default: 0,
    },
    fontColor: {
      type: String,
      default: "#000000",
    },
  },
};
</script>

<style scoped>
.marquee p {
  margin: 0;
  position: fixed;
  padding-left: 100vw;
  display: inline-block;
  white-space: nowrap;
  animation-name: marquee;
  animation-timing-function: linear;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}
@keyframes marquee {
  from {
    transform: translate(0%);
  }
  99%,
  to {
    transform: translate(-100%);
  }
}
</style>

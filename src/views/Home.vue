<template>
  <div>
    <v-card
      class="parent pos-center-center z-index-infinite"
      width="700px"
      height="400px"
    >
      <div class="main-padding">
        <div class="d-flex justify-center">
          <h1 class="sentence-center">サンプルです。</h1>
        </div>
      </div>
    </v-card>
    <transition-button
      :leftTransition="`/`"
      :rightTransition="`/`"
    ></transition-button>
  </div>
</template>

<script>
import TransitionButton from "../components/TransitionButton.vue";

export default {
  name: "Home",
  components: {
    TransitionButton,
  },
  data: () => ({}),
};
</script>

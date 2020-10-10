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
    <div class="fixed_btn_left">
      <router-link to="/">←</router-link>
    </div>
    <div class="fixed_btn_right">
      <router-link to="/">→</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({}),
};
</script>

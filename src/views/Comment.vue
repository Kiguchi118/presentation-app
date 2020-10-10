<template>
  <!--コメント入力フォーム-->
  <v-card class="margin-top">
    <div id="message" v-if="message">
      <p class="alert alert-success">{{ message }}</p>
    </div>
    <v-container>
      <div class="pos-relative form-size" style="width: 700px;">
        <h2 style="">コメント投稿</h2>

        <v-checkbox
          v-model="isQuestion"
          label="質問の場合はチェックをしてください🙇‍♂️"
          class="label-size"
        ></v-checkbox>

        <v-form ref="form" v-model="valid" lazy-validation @submit.prevent>
          <v-text-field
            v-model="inputComment"
            :rules="commentRules"
            label="コメント記入（匿名で投稿します。）"
            required
          ></v-text-field>

          <div class="form-group">
            <div :style="`color: ${fontColor}`" class="sample-comment">
              ⬇︎文字の色を選択できます⬇︎
            </div>
            <div class="select-color">
              <input class="form-control" type="color" v-model="fontColor" />
            </div>
          </div>

          <v-btn :disabled="!valid" @click="addComment">
            <span v-if="this.isQuestion">質問する</span>
            <span v-else>投稿する</span>
          </v-btn>
        </v-form>
      </div>
    </v-container>
  </v-card>
</template>

<script>
import { db } from "../plugins/firebase";

export default {
  name: "Comment",
  data: () => ({
    // form入力データ
    inputComment: "",
    // 質問であればTrue
    isQuestion: false,
    message: null,
    // バリデーション
    valid: true,
    commentRules: [(v) => !!v || "コメントしていただけると嬉しいです😂"],
    fontColor: "#000000",
  }),
  methods: {
    // コメント追加
    addComment() {
      const now = new Date();
      // コメントをFirestoreへ登録
      db.collection("comments").add({
        content: this.inputComment,
        createdAt: now,
        question: this.isQuestion,
        isDeleted: true,
        fontColor: this.fontColor,
      });
      // ダイアログを閉じる
      this.hideCreateForm();
      this.message = "コメントありがとうございます！";
      setTimeout(() => {
        this.message = null;
      }, 3000);
    },
    // Formの初期化
    clear() {
      this.$refs.form.reset();
      this.isQuestion = false;
      this.fontColor = "#000000";
    },
    //
    // Formダイアログの非表示
    hideCreateForm() {
      this.clear();
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 25px;
}

span {
  font-weight: bolder;
  margin-right: 5px;
}

input {
  border: 1px solid rgb(192, 192, 192);
  border-radius: 3px;
  padding: 0 10px;
}

.form-group {
  margin: 15px 0 5px;
}

.form-control {
  width: 50%;
}

.sample-comment {
  text-align: center;
  width: 50%;
  margin: 5px auto 10px;
  padding: 10px 0;
  font-weight: bolder;
  background-color: #fff3e0;
  border: 1px solid orange;
  border-radius: 3px;
}

.select-color {
  text-align: center;
}

@media screen and (max-width: 480px) {
  .form-size {
    max-width: 330px;
  }
  .margin-top {
    margin: 0 auto;
  }
  .sample-comment {
    width: 70%;
    font-size: 16px;
  }
  .form-control {
    width: 70%;
  }
  input {
    padding: 0 1px;
  }
  button {
    display: block;
    margin: 28px 0 0 auto;
  }
}

#message {
  padding: 10px;
}

.alert-success {
  font-size: 18px;
  padding: 10px;
  width: 95%;
  margin: 0 auto;
  border-radius: 3px;
  color: rgb(0, 129, 32);
  background-color: rgb(209, 248, 219);
  border: 2px solid rgb(154, 243, 176);
}

.fadeout {
  animation: fadeOut 1s;
  animation-fill-mode: both;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>

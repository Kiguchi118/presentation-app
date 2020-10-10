<template>
  <v-app>
    <div class="orange lighten-5" style="height: 100%;">
      <div v-if="this.$route.path !== '/comment'">
        <template v-for="(comment, key) in comments">
          <comment-move
            v-if="comment.isDeleted"
            :comment="comment.content"
            :top="(key % 11) * 22"
            :fontColor="comment.fontColor"
            :key="
              `${comment.createdAt.seconds}${comment.createdAt.nanoseconds}`
            "
          ></comment-move>
        </template>
        <div class="delete-comment-btn">
          <v-btn @click="clearDisplayComment" icon color="green" outlined
            ><v-icon>mdi-cached</v-icon></v-btn
          >
        </div>
      </div>

      <div v-if="this.$route.path !== '/comment'" class="main-box">
        <div class="main-slide">
          <router-view />
        </div>
        <div class="comment-area">
          <ul>
            <li v-for="(comment, key) in comments" :key="key">
              <span class="comment-time">
                {{
                  comment.createdAt.toDate().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                }}
              </span>
              <span v-if="comment.question" class="under-light-red">
                {{ comment.content }}
              </span>
              <span v-else>
                {{ comment.content }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div v-else class="main-box">
        <router-view />
      </div>
    </div>
  </v-app>
</template>

<script>
import { db } from "../src/plugins/firebase";
import CommentMove from "../src/components/CommentMove.vue";

export default {
  name: "App",

  components: {
    CommentMove,
  },

  data: () => ({
    comments: [],
    isDeletedList: [],
  }),
  firestore() {
    return {
      // firestoreのcommentsコレクションを参照
      comments: db.collection("comments").orderBy("createdAt", "desc"),
    };
  },

  methods: {
    // 画面上に表示されているコメント非表示
    clearDisplayComment() {
      const displaycomment = this.comments.filter(function(comment) {
        return comment.isDeleted === true;
      });
      displaycomment.forEach(function(comment) {
        db.collection("comments")
          .doc(comment.id)
          .update({ isDeleted: false });
      });
    },
  },
};
</script>

<style>
@import "./css/styles.css";
</style>

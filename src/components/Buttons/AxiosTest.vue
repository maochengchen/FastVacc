<template>
  <div>
    <button @click="sendPostRequest">發送 POST 請求</button>
    <p>這是一個測試按鈕</p>
  </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue';
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);

export default {
  methods: {
    sendPostRequest() {
      // 設定要發送的資料


      // 發送 POST 請求
      Vue.axios
        .get("/api/api-health-check")
        .then((response) => {
          // 處理成功回應
          console.log("成功:", response.data);//
        })
        .catch((error) => {
          // 處理錯誤回應
          console.error("錯誤:", error);
        });
    },
  },
};
</script>

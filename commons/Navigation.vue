<template>
  <div class="d-flex justify-content-between nav-pills mochuk-navbar">
    <div>
      <h1 class="mochuk-title">Mochuk</h1>
      <p class="festive-text">모두의 축제</p>
    </div>
    <div>로그인</div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
};
</script>

<style scoped>
.mochuk-title {
  background-color: skyblue;
  padding: 5px 10px;
  color: white;
}

.festive-text {
  color: #ff6347; /* 화이어엔진 레드 */
  margin-top: 5px;
}
.mochuk-navbar {
  background-color: skyblue;
  padding: 10px;
}
</style>

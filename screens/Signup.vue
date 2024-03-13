<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div
      class="signup border border-1 d-flex flex-column justify-content-between"
    >
      <div class="text-center py-3 px-3">
        <p class="fw-bold fs-5">
          간편하게 가입하고<br />다양한 서비스를 이용하세요.
        </p>
        <div class="py-2">
          <input
            type="text"
            placeholder="이메일주소"
            class="form-control fs-5"
            v-model="id"
          />
        </div>
        <div class="py-2">
          <input
            type="password"
            placeholder="영문,숫자 포함 8자 이상"
            class="form-control fs-5"
            v-model="password"
          />
        </div>
        <div class="py-2">
          <input
            type="password"
            placeholder="비밀번호 재입력"
            class="form-control fs-5"
            v-model="passwordCheck"
          />
        </div>
      </div>
      <div class="py-3 px-2">
        <button
          class="w-100 btn btn-warning text-light py-3 fs-5"
          @click="handleSubmit"
        >
          다음
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      id: null,
      password: null,
      passwordCheck: null,
    };
  },
  methods: {
    handleSubmit: function () {
      if (!this.id || !this.password || !this.passwordCheck) return;
      console.log("??");
      fetch("http://192.168.4.46:7030/api/user/signup", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: this.id,
          password: this.password,
          passwordCheck: this.passwordCheck,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.success) {
            this.$router.push("/login/email");
          } else {
            window.alert(result.cause);
          }
        });
    },
  },
};
</script>
<style scoped>
.signup {
  width: 380px;
  height: 488px;
}
.form-control {
  padding: 0.75rem 1.25rem;
}
.form-control:focus {
  box-shadow: none;
}
</style>

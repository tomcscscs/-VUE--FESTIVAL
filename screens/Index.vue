<template>
  <div class="d-flex flex-column vh-100">
    <Navigation />
    <div class="flex-fill d-flex flex-column align-items-center py-5">
      <h2 class="mb-4">어떤 축제를 찾고 계세요?</h2>
      <input
        type="text"
        class="fs-5 w-50 px-4 py-2 rounded-1 mb-2"
        placeholder="원하시는 지역명, 축제명을 입력해주세요"
        ref="srch"
        @input="handleChange"
      />

      <div class="list-group w-50 border" v-if="items">
        <a
          href="#"
          class="list-group-item list-group-item-action"
          v-for="one in items"
          v-bind:key="one.title"
        >
          <div class="d-flex justify-content-between">
            <span>{{ one.title }}</span>
            <span>{{ one.subtitle }}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from "@/components/common/Navigation.vue";
export default {
  components: { Navigation },
  data: function () {
    return { items: null, job: null };
  },
  methods: {
    handleChange: function () {
      const q = this.$refs.srch.value;
      if (this.job) clearTimeout(this.job);
      if (!q) {
        this.items = null;
        return;
      }

      this.job = setTimeout(() => {
        fetch("http://192.168.4.22:8030/api/search?q=" + q)
          .then((response) => response.json())
          .then((result) => {
            this.items = result.items;
          });
      }, 500);
    },
  },
};
</script>

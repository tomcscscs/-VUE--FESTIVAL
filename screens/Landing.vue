<template>
  <div class="d-flex flex-column vh-100">
    <div class="flex-fill d-flex">
      <div class="flex-fill" ref="map"></div>
      <div style="width: 360px; overflow-y: scroll; height: 100%">
        <ul>
          <li v-for="one in currentFestivals">
            {{ one.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return { festivals: [], total: 0, jobId: null, currentFestivals: [] };
  },

  methods: {
    initMap: function () {
      const options = {
        center: new kakao.maps.LatLng(36.3322006, 127.8367481),
        level: 12,
      };
      const map = new kakao.maps.Map(this.$refs.map, options);

      map.setMaxLevel(12);

      const clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 1, // 클러스터 할 최소 지도 레벨
        minClusterSize: 1,
      });

      fetch("http://192.168.4.46:7030/api/festival/comming")
        .then((response) => response.json())
        .then((result) => {
          this.total = result.total;
          this.festivals = result.items;
          const markers = this.festivals.map(
            (elm) =>
              new kakao.maps.Marker({
                position: new kakao.maps.LatLng(elm.latitude, elm.longitude),
              })
          );
          clusterer.addMarkers(markers);
        });

      kakao.maps.event.addListener(map, "bounds_changed", () => {
        if (this.jobId) {
          clearTimeout(this.jobId);
        }
        this.jobId = setTimeout(() => {
          if (map.getLevel() > 10) {
            this.currentFestivals = [];
            return;
          }
          const bounds = map.getBounds();
          // south : qa, north : pa , west: ha,  east : oa
          const { qa, pa, ha, oa } = bounds;
          const filtered = this.festivals.filter((elm) => {
            return (
              elm.latitude >= qa &&
              elm.latitude <= pa &&
              elm.longitude >= ha &&
              elm.longitude <= oa
            );
          });
          if (filtered.length === 0) {
            return;
          }
          const ids = filtered.map((elm) => "id=" + elm.id);
          console.log(ids.join("&"));
          //
          const q = ids.join("&"); // 1, 3 , 7 같은 페스티벌 아이디값은 어디서 확보해서?
          fetch("http://192.168.4.46:7030/api/festival/inform?" + q)
            .then((response) => response.json())
            .then((result) => (this.currentFestivals = result.items));
        }, 500);
      });
    },
  },
  mounted: function () {
    this.initMap();
  },
};
</script>
<style scoped>
.root {
  height: 100vh;
}
</style>

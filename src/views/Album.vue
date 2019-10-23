<template>
  <div>
    <photo-list />
  </div>
</template>
<script>
import photoList from "_c/photoList.vue";
export default {
  components: {
    photoList
  }
}
</script>
<style lang="less" scoped>
h2 {
  text-align: center;
  padding: 1vw;
}
</style>
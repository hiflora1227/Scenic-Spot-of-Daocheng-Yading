<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    back(){
      this.$router.back()
    }
  },
};
</script>

<style scoped>
  
</style>
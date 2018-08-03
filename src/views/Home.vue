<template>
  <div class="home">
     
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import {getTodayData } from '../api/gank'
export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  methods: {
   getlist: function() {
        getTodayData().then((res)=>{
            console.log(res);
        });
  }
  },
  mounted: function() {
    this.getlist();

  },
  
};
</script>


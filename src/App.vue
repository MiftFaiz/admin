<template>
<persyaratan/>

</template>

<script>
//import Listkategori from './components/B1/kategori/listkategori.vue'
import persyaratan from './components/B1/persyaratan/persyaratan.vue';
import inreview from './components/B1/articel/inreview.vue';
export default{
  name: 'App',
  components: {
    //inreview,
    persyaratan,
    //Listkategori,
    //Editkategori
    //Buatkategori
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

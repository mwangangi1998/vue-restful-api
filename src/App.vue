
<template>
  <header>
     <div class="max-w-7xl mx-auto">
          <nav class="m-2 p-2">
        <RouterLink to="/"
         class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rouded text-white
         ">Home</RouterLink>
        <RouterLink to="/skills"
        class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rouded text-white
         ">skills</RouterLink>
      </nav>
    </div>
  </header>
<main class="max-w-7xl max-auto min-h-screen">
  <RouterView/>
</main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<style scoped>

.px-4{
  padding-right: 16px;
  margin-right: 16px;
  background: rgb(79,70,229);
  opacity: 1;
 
  color: white;
 
  
  
}
.px-4:hover{
  background:#35c411 ;
}
nav{
  padding: 12px ;
  display: flex;
  justify-content: center;
}
</style>
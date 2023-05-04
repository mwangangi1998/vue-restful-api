<script setup>
import useSkills from '../../composables/skills';
import {onMounted} from "vue";
const {skills,getSkills}=useSkills();
onMounted(()=>getSkills())
</script>
<template>
<div class="mt-12 taby">
    <table id="customers">
  <tr>
 <th></th>
    <th>Name</th>
    <th>Skill</th>
    <th></th>
    
   
  </tr>
  <tr v-for="skill in skills" :key="skill.id">
    <td>{{ skill.id }}</td>
    <td>{{ skill.name }}</td>
    <td>{{ skill.slug }}</td>
    <td>edit/delete</td>
  
    
  </tr>
  
 


  
</table>
</div>
</template>
<style scoped>
#customers {
  
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
.taby{
    padding: 3% 10%;
}
</style>
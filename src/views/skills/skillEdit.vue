<script setup>
import useSkills from '../../composables/skills';
import {onMounted} from 'vue';
const { skill,getSkill,updateSkill,errors}=useSkills();
const props=defineProps({
    id:{
        requred:true,
        type:String,
    },
});
onMounted(()=>getSkill(props.id));
</script>
<template>
    <div class="myfor">
    <h4>Edit skill</h4></div>
 <div class="form-container">
    
  <form @submit.prevent="updateSkill($route.params.id)">
    <input type="text" id="name"  v-model="skill.name"
    placeholder="enter skill name">
    <div v-if="errors.name">
        <span class="erro">{{ 
            errors.name }}</span>

    </div>
    <input type="text" 
    id="slug" v-model="skill.slug" placeholder="enter slug">
    <div v-if="errors.slug">
        <span class="erro">{{ 
            errors.slug }}</span>

    </div>
    <button type="submit">save</button>
  </form>
</div>
</template>
<style scoped>

.myfor{
    margin-top: 24px;
  
}

h4{
    font-family: 'Courier New', Courier, monospace;
    font-size: x-large;
    font-weight: 400;
    text-align: center;
    
}
.form-container {
  display: flex;
  justify-content: center;
  height: 30vh;
}

form {
  display: flex;
  flex-direction: column;
  background: #223d;
}

input[type="text"], button {
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
}
input{
    color: black;
}
button {
  background-color: #3498db;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #1d28c5;
}
.erro{
    color: crimson;
}

</style>
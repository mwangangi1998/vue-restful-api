<script setup>
import{reactive} from'vue';
import useSkills from '../../composables/skills';
const {storeSkill,errors}=useSkills();
const form=reactive({
    name: '',
    slug: '',
})
</script>
<template>
<div class="myfor">
    <h4>create skill</h4>
    <div class="form-container">
  <form @submit.prevent="storeSkill(form)">
    <input type="text" id="name"  v-model="form.name"
    placeholder="enter skill name">
    <div v-if="errors.name">
        <span class="erro">{{ 
            errors.name }}</span>

    </div>
    <input type="text" 
    id="slug" v-model="form.slug" placeholder="enter slug">
    <div v-if="errors.slug">
        <span class="erro">{{ 
            errors.slug }}</span>

    </div>
    <button type="submit">save</button>
  </form>
</div>

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
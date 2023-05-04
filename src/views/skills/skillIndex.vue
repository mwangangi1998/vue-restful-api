<script setup>
import useSkills from '../../composables/skills';
import { onMounted } from "vue";
import SkillEdit from './skillEdit.vue';
const { skills, getSkills,destroySkill } = useSkills();
onMounted(() => getSkills())
</script>
<template>
    <div class="addnew">
        <router-link :to="{ name: 'skillCreate' }">Add skill</router-link>
    </div>
    <div class="mt-12 taby">
        <table id="customers">
            <tr>
                <th></th>
                <th>Name</th>
                <th>Skill</th>
                <th>Action</th>


            </tr>
            <tr v-for="skill in skills" :key="skill.id">
                <td>{{ skill.id }}</td>
                <td>{{ skill.name }}</td>
                <td>{{ skill.slug }}</td>
                <td>
                    <RouterLink :to="{ name: 'skillEdit', params: { id: skill.id } }" class="editbtn">Edit</RouterLink>
                    <button 
                    @click="destroySkill(skill.id)"
                    class="delete">Delete</button>
                </td>


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

#customers td,
#customers th {
    border: 1px solid #ddd;
    padding: 8px;
}

#customers tr:nth-child(even) {
    background-color: #f2f2f2;
}

#customers tr:hover {
    background-color: #ddd;
}

#customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
}

.taby {
    padding: 3% 10%;
}

.addnew {
    width: 7%;
    margin-right: 10%;
    padding-top: 8px;
    float: right;
    text-align: center;
    background: rgb(79, 70, 229);
    opacity: 1;
    color: #fff;
    justify-content: flex-end;

}

.addnew:hover {
    background: #0ba2dd;
    opacity: 0.44;
}

.editbtn { 
   margin-right: 2%;
    padding: 4px;
    text-align: center;
    background: rgb(16, 199, 16);
    opacity: 1;
    color: #fff;
    /* justify-content: flex-end; */
}

.editbtn:hover {
    background: #0ba2dd;
    opacity: 0.44;
}

.delete {
    
    padding: 2px;
    background: crimson;
    color: #fff;
}</style>
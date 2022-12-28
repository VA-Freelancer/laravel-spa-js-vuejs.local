<template>
    <div class="w-25">
        <div class="mb-3">
            <input type="text" v-model="name" id="name" placeholder="Name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="namber" v-model="age" id="age" placeholder="Age" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="job" id="job" placeholder="Job" class="form-control">
        </div>
        <div class="mb-3">
            <input  @click.prevent="store()" type="submit"  id="submit" value="Add"  class="btn btn-primary">
        </div>
    </div>
</template>

<script>
import router from "../../router";
export default {
    name: "Create",
    data(){
        return{
            name: null,
            age: null,
            job: null,
        }

    },
    methods:{
        store(){

            axios.post('/api/people', {name: this.name, age: this.age, job: this.job})
                .then(res =>{
                    router.push({name: 'person.index'});
                })
        }
    }
}
</script>

<style scoped>

</style>

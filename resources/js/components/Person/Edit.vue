<template>
    <div class="d-flex mb-3" style="gap: 20px">
        <span><router-link :to="{name: 'person.index'}" class="btn btn-dark">Listing</router-link></span>
        <span><router-link :to="{name: 'person.show', params: {id: this.$route.params.id}}" class="btn btn-dark">Detail</router-link></span>
    </div>
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
            <input @click.prevent="update" type="submit"  id="submit" value="Update"  class="btn btn-primary">
        </div>
    </div>
</template>

<script>
import axios from "axios";
import router from "../../router";
export default {
    name: "Edit",
    data(){
        return{
            name: null,
            age: null,
            job: null,
        }

    },
    mounted() {
        this.getPerson()
        },
    methods: {
        getPerson(){
            axios.get( `/api/people/${this.$route.params.id}` )
                .then(res =>{
                    this.name = res.data.name
                    this.age = res.data.age
                    this.job = res.data.job
                    this.id = res.data.id
                    console.log(res)
                })
        },
        update(){
            axios.patch(`/api/people/${this.$route.params.id}`, {name: this.name, age: this.age, job: this.job})
                .then(res =>{
                    router.push({ name: 'person.show', params: { id: this.$route.params.id} })
                })
        }
    }
}
</script>

<style scoped>

</style>

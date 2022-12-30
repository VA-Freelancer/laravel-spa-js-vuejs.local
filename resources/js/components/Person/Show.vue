<template>
    <div class="d-flex flex-column" v-if="person">
        <div class=""><router-link :to="{name: 'person.edit', params: {id: this.person.id}}">Edit</router-link></div>
        <ul>
            <li>Name: {{this.person.name}}</li>
            <li>Age: {{this.person.age}}</li>
            <li>Job: {{this.person.job}}</li>
        </ul>
        <div class=""><router-link :to="{name: 'person.index'}">Listing</router-link></div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Show",
    data(){
       return{
           person: null
       }
    },
    mounted() {
        this.getPerson()
    },
    methods: {
        getPerson(){
            axios.get( `/api/people/${this.$route.params.id}` )
                .then(res =>{
                    this.person = res.data
                    console.log(this.person)
                })
        },
    },

}
</script>

<style scoped>

</style>

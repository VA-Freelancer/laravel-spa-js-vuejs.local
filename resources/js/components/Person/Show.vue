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
                    console.log(res.data.data)
                    this.person = res.data.data

                })
        },
    },

}
</script>

<style scoped>

</style>

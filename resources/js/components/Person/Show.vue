<template>
    <div class="d-flex flex-column" v-if="person">
        <div class=""><router-link :to="{name: 'person.edit', params: {id: person.id}}">Edit</router-link></div>
        <ul>
            <li>Name: {{person.name}}</li>
            <li>Age: {{ person.age}}</li>
            <li>Job: {{ person.job}}</li>
        </ul>
        <div class=""><router-link :to="{name: 'person.index'}">Listing</router-link></div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Show",

    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id)
    },
    computed:{
        person(){
            return this.$store.getters.person
        }
    }


}
</script>

<style scoped>

</style>

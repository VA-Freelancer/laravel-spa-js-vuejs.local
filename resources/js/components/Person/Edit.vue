<template>
    <div class="d-flex mb-3" style="gap: 20px">
        <span><router-link :to="{name: 'person.index'}" class="btn btn-dark">Listing</router-link></span>
        <span><router-link :to="{name: 'person.show', params: {id: this.$route.params.id}}" class="btn btn-dark">Detail</router-link></span>
    </div>
    <div class="w-25" v-if="person">
        <div class="mb-3">
            <input type="text" v-model="person.name" id="name" placeholder="Name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="namber" v-model="person.age" id="age" placeholder="Age" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="person.job" id="job" placeholder="Job" class="form-control">
        </div>
        <div class="mb-3">
            <input :disabled="!isDisabled" @click.prevent="$store.dispatch('update', {id: person.id, name: person.name, age: person.age, job: person.job})" type="submit"  id="submit" value="Update"  class="btn btn-primary">
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Edit",

    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id)
        },
    methods: {


    },
    computed:{
        isDisabled(){
            return this.person.name && this.person.age && this.person.job;
        },
        person(){
            return this.$store.getters.person
        }
    }
}
</script>

<style scoped>

</style>

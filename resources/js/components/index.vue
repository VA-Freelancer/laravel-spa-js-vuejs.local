<template>
    <div class="">
        <router-link to="/posts">Posts</router-link> <br />
        <router-link to="/tags">Tags</router-link>
        <router-view></router-view>

    </div>
</template>

<script>
export default {
    name: "index"
}
</script>

<style scoped>

</style>

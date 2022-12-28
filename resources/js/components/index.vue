<template>
    <div class="">

        <nav class="navbar  navbar-dark bg-dark navbar-expand-lg  dar mb-2" data-bs-theme="dark">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <li class="nav-item">
                            <router-link :to="{ name: 'person.index'}"  class="nav-link">People</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'person.create'}" class="nav-link">Add</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <router-view></router-view>
        </div>


    </div>
</template>

<script>
export default {
    name: "index"
}
</script>

<style scoped>

</style>

<script setup lang="ts">

</script>

<template>
    <div class="h-20">
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><RouterLink to="ubuntu">Ubuntu</RouterLink></li>
                        <li><RouterLink to="rockyLinux">Rocky Linux</RouterLink></li>
                        <li><RouterLink to="nodejs">Node.js</RouterLink></li>
                        <li><RouterLink to="laravel">Laravel</RouterLink></li>
                        <li><RouterLink to="php">PHP</RouterLink></li>
                    </ul>
                </div>
                <RouterLink class="btn btn-ghost text-xl" to="/">Home</RouterLink>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li><RouterLink to="ubuntu">Ubuntu</RouterLink></li>
                    <li><RouterLink to="rockyLinux">Rocky Linux</RouterLink></li>
                    <li><RouterLink to="nodejs">Node.js</RouterLink></li>
                    <li><RouterLink to="laravel">Laravel</RouterLink></li>
                    <li><RouterLink to="php">PHP</RouterLink></li>
                </ul>
            </div>
            <div class="navbar-end">
<!--                <a class="btn">Button</a>-->
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
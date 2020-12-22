<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-pink mb-3">
        <router-link to='/' class="navbar-brand">
            <img src="../../assets/img/logo.png" alt="Logo" width="50">
        </router-link>

        <div class="navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item px-2">
                    <b><router-link to='/dashboard' class="nav-link"><i class="fas fa-chart-line"></i> Dashboard</router-link></b>
                </li>

                <li class="nav-item px-2">
                    <b><router-link to='/team' class="nav-link"><i class="fas fa-users"></i> Time</router-link></b>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style>
    .bg-pink {
        background-color: pink;
    }

    .nav-item a {
        color: white !important;
    }

    .nav-item a:hover {
        background-color: white;
        color: pink !important;
        border-radius: 6px !important;
    }
</style>
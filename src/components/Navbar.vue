<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-pink mb-3">
        <a class="navbar-brand" href="/">
            <img src="../assets/logo.png" alt="Logo" width="50">
        </a>

        <div class="navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item px-2">
                    <b><a class="nav-link" href="/dashboard"><i class="fas fa-chart-line"></i> Dashboard</a></b>
                </li>

                <li class="nav-item px-2">
                    <b><a class="nav-link" href="/time"><i class="fas fa-users"></i> Time</a></b>
                </li>

                <li class="nav-item px-2">
                    <b><a class="nav-link" href="/contatos"><i class="fas fa-phone"></i> Contatos</a></b>
                </li>
            </ul>

            <form class="form-inline" v-on:submit="buscar">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Buscar (Ctrl + Q)" ref="search_page" v-on:blur="desfocarSearch">

                    <div class="input-group-append">
                        <button class="btn btn-info" type="submit">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        props: {
            search_page: Boolean
        },
        watch: { 
            search_page: function() {
                this.$refs.search_page.focus();
            }
        },
        methods: {
            desfocarSearch: function() {
                this.$emit('mudarFocoSearch');
            },
            buscar: function() {
                alert('Funcionalidade ainda não implementada!');
            }
        }
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
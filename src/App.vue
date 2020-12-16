<template>
    <div id="app" v-on:keyup.ctrl.81="pesquisar" tabindex="0">
        <Navbar :search_page="search_page_focus" @mudarFocoSearch="mudarFocoSearch" />
        <Content/>
        <Footer/>
    </div>
</template>

<script>
    import Content from './components/Content.vue'
    import Navbar from './components/Navbar.vue'
    import Footer from './components/Footer.vue'

    export default {
        name: 'App',
        components: {
            Content,
            Navbar,
            Footer
        },
        methods: {
            pesquisar: function() {
                this.search_page_focus = true;
            },
            mudarFocoSearch: function() {
                this.search_page_focus = false;
            }
        },
        data() {
            return {
                search_page_focus: false
            }
        }
    }
</script>

<style>
    #app:focus {
        outline: none;
    }
</style>

<template>
    <div>
        <Navbar />
        
        <main role="main" class="container-fluid">
            <h2>Todos os Arquétipos</h2>

            <div class="row">
                <div class="col-sm-3 offset-sm-6">
                    <b-form-input id="filter-input" v-model="table.filter" type="search" placeholder="Pesquisar" class="mb-3"></b-form-input>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <b-table striped bordered hover :items="archetypes" :fields="fields_table" class="table-sm" id="table-archetypes" :per-page="table.perPage" :current-page="table.currentPage"></b-table>

                    <b-pagination v-model="table.currentPage" :total-rows="rows" :per-page="table.perPage" aria-controls="table-archetypes"></b-pagination>
                </div>
            </div>
        </main>

        <Footer/>
    </div>
</template>

<script>
    import Navbar from '../components/shared/Navbar.vue'
    import Footer from '../components/shared/Footer.vue'
    import axios from 'axios'

    export default {
        name: 'Dashboard',
        components: {
            Navbar,
            Footer
        },
        data () {
            return {
                archetypes: null,
                table: {
                    perPage: 20,
                    currentPage: 1,
                    filter: null
                },
                fields_table: [
                    {
                        key: 'archetype_id',
                        label: '#',
                        sortable: true
                    },
                    {
                        key: 'archetype_name',
                        label: 'Nome',
                        sortable: true
                    },
                ],
            }
        },
        mounted () {
            let _this = this;

            axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
                .then(function (response) {
                    _this.archetypes = response.data;
                    let index = 1;

                    _this.archetypes.forEach(function (archetype) {
                        archetype.archetype_id = index;
                        index++;
                    });
                });
        },
        computed: {
            rows() {
                let length = this.archetypes ? this.archetypes.length : 0;

                return length;
            }
        }
    }
</script>
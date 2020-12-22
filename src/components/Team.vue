<template>
    <div>
        <Navbar />
        
        <main role="main" class="container-fluid">
            <h2>Time</h2>

            <div class="card border-secondary mb-3" style="max-width: 18rem;">
                <div class="card-header text-center">Administrador</div>

                <div class="card-body text-secondary">
                    <img class="card-img-top mb-2" src="../assets/img/michel.jpg" alt="Card image cap">
                    
                    <h5 class="card-title">Michel Berigo</h5>

                    <p class="card-text">
                        Entusiasta do conhecimento e apaixonado pela tecnologia, sempre buscando aprender mais!
                    </p>
                </div>
            </div>
        </main>

        <Footer/>
    </div>
</template>

<script>
    import Navbar from '../components/shared/Navbar.vue'
    import Footer from '../components/shared/Footer.vue'

    export default {
        name: 'Team',
        components: {
            Navbar,
            Footer
        },
    }
</script>
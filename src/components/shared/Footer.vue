<template>
    <footer class="footer" id="footer">
        <div class="container">
            <div class="text-center p-3">
                <h5 class="text-black">Site criado por {{ admin.nome }}™</h5>

                <div class="text-muted">Um site simples usando vue.js.</div>

                <div class="text-muted mb-2">Copyrights - {{ ano_atual }}</div>

                <div class="d-flex justify-content-center">
                    <div class="mr-2">
                        <a href="https://www.facebook.com/michel.berigo.3/" class="color-inherit" target="_blank" rel="noopener">
                            <i class="fab fa-facebook fa-2x"></i>
                        </a>
                    </div>

                    <div class="mr-2">
                        <a href="https://www.instagram.com/michelberigo/" class="color-inherit" target="_blank" rel="noopener">
                            <i class="fab fa-instagram fa-2x"></i>
                        </a>
                    </div>

                    <div class="mr-2">
                        <a href="https://twitter.com/michel_berigo" class="color-inherit" target="_blank" rel="noopener">
                            <i class="fab fa-twitter fa-2x"></i>
                        </a>
                    </div>

                    <div>
                        <a href="https://www.linkedin.com/in/michel-berigo-bb11a816b/" class="color-inherit" target="_blank" rel="noopener">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        data: function () {
            return {
                admin: {
                    nome: 'Michel Berigo'
                },
                ano_atual: new Date().getFullYear()
            }
        }
    }
</script>

<style>
    .footer {
        bottom: 0;
        width: 100%;
        background-color: #f5f5f5;
    }

    .color-inherit {
        color: inherit;
    }

    .fa-facebook {
        color: #3b5998;
    }

    .fa-instagram {
        color: #517fa4;
    }

    .fa-twitter {
        color: #00aced
    }

    .fa-linkedin {
        color: #007bb6
    }
</style>
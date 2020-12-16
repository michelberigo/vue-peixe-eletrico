<template>
    <footer class="footer" id="footer">
        <div class="container">
            <div class="text-center p-3">
                <h5 class="text-muted">Site criado por Michel Rayes Berigo™</h5>

                <p class="text-muted">Um site simples usando vue.js.</p>

                <p class="text-muted">Copyrights - {{ ano_atual }}</p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        data: function () {
            return {
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
</style>
<template>
    <div>
        <Navbar />
        
        <main role="main" class="container-fluid">
            <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">
                <div class="px-0 text-center">
                    <h1 class="display-4 font-italic">Peixe Elétrico</h1>
                    <p class="lead my-3">Um blog eletrizante!</p>
                </div>
            </div>

            <div class="blog-post">
                <h2 class="blog-post-title">O que significa "Peixe Elétrico"?</h2>

                <hr>
            
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed mauris erat. 
                    Ut dictum pulvinar dignissim. Fusce lacinia dui sit amet lacus efficitur tempus sed a odio. 
                    Praesent varius eget nisi vitae dignissim. Mauris sit amet vehicula purus. Cras maximus ipsum id dolor 
                    vestibulum congue. Fusce eu ex nec libero lacinia efficitur ac nec urna. Ut quis felis augue. Donec ante arcu, 
                    varius id aliquet varius, aliquam eu nibh.
                </p>

                <p>
                    Sed tincidunt eleifend tempus. Cras tempor efficitur volutpat. Suspendisse volutpat hendrerit tellus sed 
                    euismod. Phasellus vel malesuada orci. Proin in ipsum eu tellus efficitur finibus sit amet quis nisi. 
                    Phasellus tellus diam, fermentum vel mi nec, aliquam iaculis libero. Nulla dignissim, arcu et congue luctus, 
                    nisi sem ornare est, id rhoncus velit nulla molestie orci. Etiam ex arcu, varius eget porttitor euismod, 
                    rutrum in nisi. Proin sit amet risus quis magna finibus tincidunt. Nunc in maximus dui. Nunc lacinia sem 
                    ac orci suscipit, et facilisis mi porta. Cras viverra tortor ac ligula interdum ultricies. Nullam posuere interdum 
                    mollis. Ut ornare neque nisi, nec pharetra velit vehicula in.
                </p>
            </div>
        </main>

        <Footer/>
    </div>
</template>

<script>
    import Navbar from '../components/shared/Navbar.vue'
    import Footer from '../components/shared/Footer.vue'

    export default {
        name: 'Home',
        components: {
            Navbar,
            Footer
        }
    }
</script>
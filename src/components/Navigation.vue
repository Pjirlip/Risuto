<template>
    <nav id="nav" class="outerContainer">
        <img class="sp-r" id="logo" :src="logo" />
        <h1 class="lsp-r"> Risuto </h1>
        <router-link class="sp-r link-bottom" to="/anime">Anime</router-link>
        <router-link class="sp-r link-bottom" to="/manga">Manga</router-link>
        <router-link class="sp-r link-bottom" to="/personallist">Meine Liste</router-link>
    </nav>
</template>

<script>
    export default {
        name: 'Navigation',
        data() {
            return {
                logo: require("@/assets/logo.png")
            };
        }
    }
</script>

<style lang="scss" scoped>
    nav {
        background: $accent;
        grid-area: Navigation;
        display: flex;
        border-top: 2px solid $highligth;
        align-items: center;
        justify-content: flex-start;
        max-width: 100%;
        overflow: hidden;

        img {
            height: 50px;
            width: 50px;
        }

        a {
            font-size: large;
        }
    }
 
</style>
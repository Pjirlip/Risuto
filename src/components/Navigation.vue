<template>
    <nav id="nav">
        <img class="sp-r" id="logo" :src="logo" />
        <h1 class="lsp-r"> Risuto </h1>
        <router-link class="sp-r link-bottom" to="/anime">Anime</router-link>
        <router-link class="sp-r link-bottom" to="/manga">Manga</router-link>
        <router-link class="sp-r link-bottom" to="/manga">Meine Liste</router-link>
        <Search></Search>
    </nav>
</template>

<script>

    import Search from "./Search";
    import Profile from "./Profile";


    export default {
        name: 'Navigation',
        data() {
            return {
                logo: require("@/assets/logo.png")
            };
        },
        components: 
        {
            Search,

        }
    }
</script>

<style lang="scss" scoped>
    nav {
        background: $accent;
        grid-area: Navigation;
        display: flex;
        padding: 10px 50px;
        border-bottom: 1px solid $highligth;
        box-shadow: 0 -1px 10px 0 $highligth;
        align-items: center;
        justify-content: flex-start;

        img {
            height: 100%;
            width: auto;
        }

        a {
            font-size: large;
        }
    }
 
</style>
<template>
    <main class="outerContainer">
        <InfoCard v-for="cardElement in cardElements" :key="cardElement.id" :cardElement="cardElement"> </InfoCard>
    </main>
</template>

<script>
    import InfoCard from "../components/InfoCard/InfoCard";

    export default {
        name: 'PersonalList',
        data() {
            return {
                cardElements: this.$eventStore.$data.personalList
            }
        },
        created() {
            this.$eventStore.$on('refreshPersonal', () => {
                this.cardElements = this.$eventStore.$data.personalList;
            })
        },
        components: {
            InfoCard
        }
    }
</script>

<style lang="scss" scoped>
    main {
        -webkit-overflow-scrolling: touch;
        position: relative;
        padding-top: 100 !important;
        grid-gap: 2em;
        grid-area: Content;
        display: grid;
        grid-template-columns: repeat(auto-fill, 300px);
        grid-auto-rows: 500px;
        overflow-y: overlay;
        justify-content: center;

        @media (min-width: 520px) and (max-width: 740px) {
            grid-auto-rows: 700px;
            grid-template-columns: repeat(1, 500px);
        }

    }
</style>
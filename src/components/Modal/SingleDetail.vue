<template>
    <div class="detailContainer">
        <p class="detailName"> {{ detail.name }} </p>
        <p class="detailValue"> {{ detail.value }} </p> 
    </div>
</template>

<script>
export default {
    name: "SingleDetail",
    props: ['detail']
}
</script>

<style lang="scss" scoped>
    .detailContainer {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 5px;
        background: $accent;
        border-top: solid 2px $highligth;
        
        &:not(:last-child){
            margin-right: 10px;
        }

        .detailName {
            font-weight: bold;
        }

        .detailValue {

        }

    }
</style>
<template>
    <div class="searchbar">
        <span class="icon-search"></span>
        <input v-model="searchText" type="search" name="search" > 
    </div>
</template>

<script>
export default {
    name: "Search"
}
</script>

<style lang="scss">
    input[type=search] {
        margin-left: 10px;
        padding: 10px;
        height: 100%;
    }
</style>
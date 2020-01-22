<template>
    <div class="modalDetailsContainer" >
        <SingleDetail v-for="detail in details" :key="detail.name" :detail="detail">
        </SingleDetail>
    </div>
</template>

<script>
import SingleDetail from "./SingleDetail";

export default {
    name: "AnimeDetails",
    props: ["mediaObject"],
    computed: {
        details() {
            let det = []
            if(this.$props.mediaObject.episodes)
                det.push({name: "Episoden", value: this.$props.mediaObject.episodes})
            if(this.$props.mediaObject.status)
                det.push({name: "Status", value: this.$props.mediaObject.status})
            if(this.$props.mediaObject.genres)
                det.push({name: "Genre", value: this.$props.mediaObject.genres[0]})
            if(this.$props.mediaObject.season)
                det.push({name: "Season", value: this.$props.mediaObject.season})
            if(this.$props.mediaObject.seasonYear)
                det.push({name: "Jahr", value: this.$props.mediaObject.seasonYear})
            if(this.$props.mediaObject.averageScore)
                det.push({name: "Score", value: this.$props.mediaObject.averageScore + " %"})
        
            return det;
        }
    },
    components: {
        SingleDetail
    }
}
</script>

<style lang="scss" scoped>
        
        
        .modalDetailsContainer {
            height: 100%;
        }

</style>
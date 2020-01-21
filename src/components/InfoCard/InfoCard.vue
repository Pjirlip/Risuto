<template>
    <article class="previewCard"> 
        <div class="cardTitleOverlay" :style="{ 'background-image': `url(${cardElement.previewImage})` }"> 
            <h5> {{ cardElement.title }} </h5>
        </div>
        
    </article>
</template>

<script>
export default {
    name: "InfoCard",
    props: ['cardElement']
}
</script>

<style lang="scss" scoped>
    
    .previewCard {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: auto auto auto;
        grid-template-areas: 
        "cardCoverImage cardShortInfo"
        "cardCoverImage cardDescription"
        "cardCoverImage cardGenres";
        cursor: pointer;
        background: $accent;
        border-top: 4px solid $highligth;

        .cardTitleOverlay {
             grid-area: cardCoverImage;
             height: 100%;
             width: 100%;
             position: relative;
             z-index: 10;
             padding: 5px;
             background-size: cover;
             background-position: center center;
             background-repeat: no-repeat;
            
        }

        h5 {
            background: rgba(0,0,0,0.7);
            left: 0;
            right: 0;
            bottom: 0;
            height: 50px;
            position: absolute;
            padding: 10px;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

</style>
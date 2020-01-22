<template>
    <article class="previewCard" @click="showDetails" @mouseenter="enableAnimation"
        :class="{disableAnimation: disableAnimation}">
        <div class="previewCardImageContainer">
            <img class="previewCardCoverImage" :src="cardElement.coverImage.large" />
        </div>
        <svg class="previewCardSVG" viewBox="0 0 800 500">
            <path
                d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                stroke="transparent" fill="#1E2529" />
            <path class="previewCardLine"
                d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                stroke="#e7b923" stroke-width="3" fill="transparent" />
        </svg>
        <div class="previewCardContent">
            <h5 class="previewCardTitle"> {{ cardElement.title.english || cardElement.title.romaji }} </h5>
            <p v-html="cardElement.description"> </p>
        </div>

    </article>
</template>

<script>
    export default {
        name: "InfoCard",
        props: ['cardElement'],
        methods: {
            showDetails() {
                this.$eventStore.$emit('showDetails', this.cardElement);
            },
            enableAnimation() {
                this.disableAnimation = false;
            }
        },
        data() {
            return {
                disableAnimation: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .previewCard {
        position: relative;
        width: 300px;
        height: 500px;
        border-radius: 6px;
        padding: 2rem;
        color: #aaa;
        box-shadow: 0 .25rem .25rem rgba(0, 0, 0, 0.2),
            0 0 1rem rgba(0, 0, 0, 0.2);
        overflow: hidden;
        cursor: pointer;
        background: $accent;
        border-top: 4px solid $highligth;
        animation: cardShrink 1s;


        &:hover {

            .previewCardContent {
                overflow-y: scroll;
            }

            color: $text;
            animation: cardGrow 1s forwards;
        }

        @media (min-width: 520px) and (max-width: 740px) {
            height: 700px;
            width: 500px;
        }

        &ImageContainer {
            margin: -2rem -2rem 1rem -2rem;
            overflow: hidden;
            max-height: 300px;

            @media (min-width: 520px) and (max-width: 740px) {
                max-height: 450px;
            }
        }

        &CoverImage {
            opacity: 0;
            animation: ImageFadeIn .5s 1.25s forwards;
            width: 100%;
            max-width: 100%;
            margin-top: -120px;

            @media (min-width: 520px) and (max-width: 740px) {
                margin-top: -260px;
            }
        }

        &SVG {
            position: absolute;
            left: 0;
            top: 120px;
            width: 100%;
            transform: translate3d(0, 0, 0); //Fix für Safari auf iOS, bezüglich flickern beim Rendering wegen fehlender hardware acceleration


            @media (min-width: 520px) and (max-width: 740px) {
                top: 190px;
            }
        }

        &Line {
            opacity: 0;
            animation: LineFadeIn .5s .4s forwards ease-in;
        }

        &Content {
            -webkit-font-smoothing: subpixel-antialiased;
            margin-top: -1rem;
            opacity: 0;
            animation: ContentFadeIn .5s 1.2s forwards;
            overflow: hidden;
            max-height: calc(500px - 350px);


            @media (min-width: 520px) and (max-width: 740px) {
                max-height: calc(700px - 480px);
            }

        }

        h5 {
            -webkit-font-smoothing: subpixel-antialiased;
            color: $highligth;
            margin-top: 0;
            font-weight: 800;
            letter-spacing: 0.01em;
            text-overflow: ellipsis;
            font-size: large;

            @media (min-width: 520px) and (max-width: 740px) {
                font-size: x-large;
            }


        }

        p {
            -webkit-font-smoothing: subpixel-antialiased;
            text-overflow: ellipsis;

            @media (min-width: 520px) and (max-width: 740px) {
                font-size: large;
            }
        }
    }
</style>
<template>
    <transition name="modalFade">
        <aside v-show="overlayVisible" id="modalOverlay">
            <article id="overlayContainer">
                <span class="icon-times-circle" id="closeModal" @click="overlayVisible = false"> </span>
                <span class="icon-plus-circle" :class="[inStore ? 'icon-minus-circle' : 'icon-plus-circle']"
                    id="addRemoveToPersonalList" @click="addRemoveToPersonalList"> </span>
                <h1> {{ mediaObject.title.english || mediaObject.title.romaji }} </h1>
                <img class="coverimage" :src="mediaObject.coverImage.large" />
                <div class="description">
                    <h4> Beschreibung </h4>
                    <p v-html="mediaObject.description"> </p>
                </div>
                <AnimeDetails class="details" :mediaObject="mediaObject"> </AnimeDetails>
            </article>
        </aside>
    </transition>
</template>

<script>
    import AnimeDetails from "./AnimeDetails";
    export default {
        name: "Modal",
        data() {
            return {
                overlayVisible: false,
                mediaObject: {
                    title: {
                        english: "Default Title"
                    },
                    coverImage: {
                        large: ""
                    },
                    description: "Lorem Ipsum"
                },
                inStore: false
            }
        },
        components: {
            AnimeDetails
        },
        methods: {
            addRemoveToPersonalList() {
                if (!this.$eventStore.$data.personalList.includes(this.mediaObject)) {
                    this.$eventStore.$data.personalList.push(this.mediaObject);
                    this.inStore = true;
                } else {
                    this.$eventStore.$data.personalList = this.$eventStore.$data.personalList.filter((element) => {
                        return element.id !== this.mediaObject.id
                    });
                    this.inStore = false;
                    this.$eventStore.$emit('refreshPersonal')
                }
            }
        },
        created() {
            this.$eventStore.$on("showDetails", mediaObject => {
                this.overlayVisible = true;
                this.mediaObject = mediaObject;
                this.inStore = !this.$eventStore.$data.personalList.includes(this.mediaObject) ? false : true;
            });

            if (this.$eventStore.$data.personalList.includes(this.mediaObject))
                this.inStore = true;

        }
    }
</script>

<style lang="scss" scoped>
    #modalOverlay {
        position: absolute;
        background: rgba(0, 0, 0, 0.8);
        bottom: 0;
        left: 0;

        position: fixed;
        right: 0;
        top: 0;
        z-index: 10000;


        #overlayContainer {
            background-color: $main;
            position: relative;
            margin: 0 auto;
            padding: 3em;
            border-radius: 5px;
            border-top: solid 7px $highligth;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-template-rows: auto 1fr 80px;
            grid-template-areas: "modalTitle modalTitle""modalCover modalDescription""modalCover detailsContainer";
            grid-gap: 0.5rem 1.5rem;

            height: 60%;
            margin: 5% auto;
            max-height: 57em;
            max-width: 66em;
            width: 85%;

            @media (max-width: 1080px) {
                height: 40%;
                max-height: 40%;
                grid-gap: 0.5rem 1rem;
                grid-template-columns: auto 1fr;
            }

            @media (max-width: 870px) {
                height: 100%;
                max-height: 100%;
                width: 100%;
                grid-template-columns: 1fr;
                grid-template-rows: auto 1fr auto 80px;
                grid-template-areas: "modalTitle""modalCover""modalDescription""detailsContainer";
            }

            @media (max-width: 600px) {
                height: 100%;
                max-height: 100%;
                width: 100%;
                grid-template-columns: 1fr;
                grid-template-rows: 50px 200px 1fr 80px;
                grid-template-areas: "modalTitle""modalCover""modalDescription""detailsContainer";
                padding: 0.5em;

            }

            h1 {
                font-size: xx-large;
                max-width: 100%;
                text-overflow: ellipsis;
                overflow: hidden;
                grid-area: modalTitle;
            }

            .coverimage {
                grid-area: modalCover;
                height: 100%;
                width: auto;
                border-radius: 3px;
            }


            .description {
                grid-area: modalDescription;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: justify;
                max-height: 100%;

                &:hover {
                    overflow-y: scroll;
                }
            }

            .details {
                grid-area: detailsContainer;
                display: flex;
                height: 100%;
                width: 100%;
                padding: 5px;
                max-width: 100%;
                overflow: hidden;
            }

            #closeModal {
                font-size: x-large;
                position: absolute;
                right: 20px;
                top: 20px;
                cursor: pointer;
                z-index: 10;
                pointer-events: auto;
            }

            #addRemoveToPersonalList {
                font-size: x-large;
                position: absolute;
                right: 60px;
                top: 20px;
                cursor: pointer;
                z-index: 10;
                pointer-events: auto;
            }
        }
    }

    .modalFade-enter,
    .modalFade-leave-to {
        opacity: 0;
    }

    .modalFade-enter-active,
    .modalFade-leave-active {
        transition: opacity .2s;
    }
</style>
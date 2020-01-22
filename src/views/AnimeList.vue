<template>
  <main class="outerContainer">
    <InfoCard v-for="cardElement in cardElements" :key="cardElement.id" :cardElement="cardElement"> </InfoCard>
  </main>
</template>

<script>
  import InfoCard from "../components/InfoCard/InfoCard";
  import DatabaseHandler from "../js/DatabaseHandler";

  export default {
    name: 'AnimeList',
    data() {
      return {
        cardElements: null,
        observer: null,
        currentPage: 1,
        hasNextPage: true
      }
    },
    methods: {
      loadNewEntrys() {
        if (this.hasNextPage){
          DatabaseHandler.queryMediaPaged(this.currentPage + 1, DatabaseHandler.TYPE.ANIME).then((data) => {
            this.currentPage = data.Page.pageInfo.currentPage;
            this.hasNextPage = data.Page.pageInfo.hasNextPage;
            this.cardElements = this.cardElements.concat(data.Page.media);
          });
      }
    }
  },
  created() {
      this.observer = new IntersectionObserver((entry) => {
        if (entry[0].isIntersecting)
          this.loadNewEntrys();
      }, {
        threshold: [0.2]
      });

      DatabaseHandler.queryMediaPaged(this.currentPage, DatabaseHandler.TYPE.ANIME).then((data) => {
        this.currentPage = data.Page.pageInfo.currentPage;
        this.hasNextPage = data.Page.pageInfo.hasNextPage;
        this.cardElements = data.Page.media;
      });
    },
    updated() {
      this.observer.disconnect();
      this.observer.observe(document.querySelectorAll(".previewCard")[document.querySelectorAll(".previewCard").length -
        1]);
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

const QUERYS = {
    getAnimesPaged(page) {return `
    {
        Page(page: ${page}, perPage: 30) {
          pageInfo {
            perPage
            currentPage
            lastPage
            hasNextPage
          }
          
          media(type: ANIME) {
          id
          title {
            romaji
            english
            native
          }
          description
          episodes
          duration
          status
          averageScore
          studios(isMain:true) {
            edges {
              id
            }
          }
          season
          seasonYear
          type
          genres
          coverImage {
            extraLarge
            large
            medium
            color
          }
          bannerImage
        }
        }
      }
    `},

    getMangasPaged(page) {return `
    {
        Page(page: ${page}, perPage: 10) {
          pageInfo {
            perPage
            currentPage
            lastPage
            hasNextPage
          }
          
          media(type: MANGA) {
          id
          title {
            romaji
            english
            native
          }
          description
          episodes
          duration
          status
          averageScore
          studios(isMain:true) {
            edges {
              id
            }
          }
          season
          seasonYear
          type
          genres
          coverImage {
            extraLarge
            large
            medium
            color
          }
          bannerImage
        }
        }
      }
    `

    }
}



export default QUERYS;
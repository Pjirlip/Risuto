import { request } from 'graphql-request'
import APIRequests from "./APIQuerys";

const apiUrl = "https://graphql.anilist.co"

class DatabaseHandler {

    static async queryMediaPaged(pageID, type) {
        try {
            switch (type) {
                case DatabaseHandler.TYPE.ANIME:
                    return await request(apiUrl, APIRequests.getAnimesPaged(pageID));
                    break;
                case DatabaseHandler.TYPE.MANGA:
                    return await request(apiUrl, APIRequests.getMangasPaged(pageID));
                    break;
                default:
                    return await request(apiUrl, APIRequests.getAnimesPaged(pageID));
            }
        } catch (error) {
            console.error(error);
            return {
                error
            };
        }
    }
}

DatabaseHandler.TYPE = {
    "ANIME": 1,
    "MANGA": 2
}

export default DatabaseHandler;
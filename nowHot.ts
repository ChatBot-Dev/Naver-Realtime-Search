import * as Cheerio from "cheerio";
import Axios from "axios";

export class HotSearch {
    constructor() { }

    private async getBody() {
        return await Axios.get("https://datalab.naver.com/keyword/realtimeList.naver");
    }

    public async getNow() {
        let result: string[] = [];
        const body = await this.getBody();
        try {
            const $ = Cheerio.load(body.data);
            $("span.item_title").each((index, element) => {
                result[index] = $(element).text();
            });
        } catch (e) {
            console.error(e);
        }
        return result;
    }
}

// Thanks to okysky1121

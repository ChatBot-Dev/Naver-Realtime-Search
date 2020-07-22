const axios = require('axios'),
    cheerio = require('cheerio'),
    getHTML = async function () {
        return await axios.get('https://datalab.naver.com/keyword/realtimeList.naver');
    };

getHTML()
    .then(html => {
        list = [];
        let $ = cheerio.load(html.data);
        $('span.item_title').each(function (i, elem) {
            list[i] = $(this).text();
        });
        console.log(JSON.stringify(list, null, 4))
    }).catch(e => console.log(e));

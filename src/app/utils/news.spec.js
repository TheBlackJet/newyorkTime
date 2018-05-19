import 'whatwg-fetch';
import { searchArticleFromAPI } from "./news.js";

test('searchArticleFromAPI has data', async () => {
    const param = ['noodle', '1'];
    const result = "OK";

    const data = await searchArticleFromAPI(...param);
    expect(data.status).toEqual(result);
});


test('searchArticleFromAPI returns []', async () => {
    const param = ['ooooooooooooooooooooooooooooooooo', '1'];
    const result = [];

    const data = await searchArticleFromAPI(...param);
    expect(data.response.docs).toEqual(result);
});

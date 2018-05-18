import 'whatwg-fetch';
import { ENGINE_METHOD_NONE } from "constants";

import { searchArticleFromAPI } from "./news.js";

test('searchArticleFromAPI test case 1', async () => {
    const param = ['noodle', '1'];
    const result = [
        "[1/3] It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it ",
        "[2/3] look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected ",
        '[3/3] humour and the like). '
    ];

    const data = await searchArticleFromAPI(...param);
    expect(data).toEqual(result);
});

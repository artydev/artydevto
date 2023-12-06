import { DEVArticle, GetArticlesOptions} from "../models/articles"

const getArticles = async (options?: GetArticlesOptions)
: Promise<DEVArticle[]> => {

    const articles: DEVArticle[] = [];
    const pages = options?.pages || 1;
    const perPage = options?.perPage || 30;

    for (let page = 1; page <= pages; page += 1) {
        const response = await fetch(
            `https://corsproxy.io/?https://dev.to/api/articles/me?per_page=${perPage}&page=${page}`,
            {
                method: 'GET',
                mode: "cors",
                headers: {
                    'api-key': 'FuNSRQxUWJC2hktuc6p6A955',
                    accept: 'application/vnd.forem.api-v1+json',
                    'content-type': 'application/json',
                },
            }
        );
        
        const json = await response.json();

        articles.push(...json);
    }

    return articles;
};

export { getArticles }

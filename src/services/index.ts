import { DEVArticle, GetArticlesOptions} from "../models/articles";
import { marked } from "marked";

const markdownToHTML = (markdown: string): string | Promise<string> => {
    const regex = new RegExp(/^.*{%\s?(.+?) (.+?)\s?%}.*(?:\n|$)/);
    const getEmbedUrl = (embedType: string, input: string): string => {
      switch (embedType) {
        case 'youtube':
          return `https://www.youtube.com/embed/${input}`;
        case 'codepen':
          return input.replace(/\/pen\//, '/embed/');
        case 'codesandbox':
          return `https://codesandbox.io/embed/${input}`;
        default:
          // etc...
          return '';
      }
    };
    const embedExtension = {
      name: 'embedExtension',
      level: 'block',
      start(src) {
        return src.match(/^.*{%/)?.index;
      },
      tokenizer(src) {
        const match = regex.exec(src);
  
        console.log('tokenizer', src, match);
        if (match) {
          return {
            type: 'embedExtension',
            raw: match[0],
            embedType: match[1].trim(),
            input: match[2].trim(),
            tokens: [],
          };
        }
      },
      renderer(token) {
        return `<iframe src="${getEmbedUrl(
          token.embedType,
          token.input
        )}"></iframe>`;
      },
    };
    marked.use({ gfm: true, extensions: [embedExtension] });
  
    return marked.parse(markdown);
  };

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

export { getArticles, markdownToHTML }
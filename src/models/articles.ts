interface DEVArticle {
    type_of: string;
    id: number;
    title: string;
    description: string;
    published: boolean;
    published_at: string;
    slug: string;
    path: string;
    url: string;
    comments_count: number;
    public_reactions_count: number;
    page_views_count: number;
    published_timestamp: string;
    body_markdown: string;
    positive_reactions_count: number;
    cover_image: string;
    tag_list: string[] | string;
    tags?: string[];
    canonical_url: string;
    reading_time_minutes: number;
    user: {
        name: string;
        username: string;
        twitter_username: string | null;
        github_username: string | null;
        user_id: number;
        website_url: string | null;
        profile_image: string;
        profile_image_90: string;
    };
    organization?: {
        name: string;
        username: string;
        slug: string;
        profile_image: string;
        profile_image_90: string;
    };
}
interface GetArticlesOptions {
    pages?: number;
    perPage?: number;
}

export { DEVArticle, GetArticlesOptions }


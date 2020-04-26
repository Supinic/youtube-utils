declare module "youtube-utils" {
    import { YouTubeSearchResults, YouTubeSearchPageResults } from "youtube-search";

    export = YoutubeUtils;

    declare class YoutubeUtils {
        /**
         * based on npm module get-youtube-id by @jmorrell
         * converted into ES6 syntax and simplified by @supinic
         * Matches a Youtube video ID.
         */
        static match(url: string): string | null;

        /** Parses a ISO-8601 duration to a number representing the time in seconds */
        static parseDuration(string: string): number;

        /** Finds basic data about a Youtube video. */
        private static find(key: string, videoID: string): Promise<{
            results: YouTubeSearchResults[],
            pageInfo: YouTubeSearchPageResults
        }>;

        /**
         * Fetches all relevant data about a Youtube video.
         * @param key Youtube API key
         * @param videoString A string describing the Youtube video
         */
        static fullFetch(key: string, videoString: string): Promise<YoutubeUtils.YoutubeDataObject>;
    }

    declare namespace YoutubeUtils {
        export declare interface YoutubeDataObject {
            /** Video ID */
            id: string;
            /** Video author */
            author: string;
            /** Video name */
            name: string;
            /** Video link */
            link: string;
            /** Timestamp of video publishing */
            posted: number;
            /** Length of video in seconds */
            length: number;
            /** Current amount of comments */
            comments: number;
            /** Current amount of views the video has */
            views: number;
            /** Current amount of likes the video has */
            likes: number;
            /** Current amount of dislikes the video has */
            dislikes: number;
        }
    }
}

import Link from "./Link/Link";
import Podcast from "./Podcast/Podcast";
import Post from "./Post/Post";
import Video from "./Video/Video";

/**
 * Create podcast compound
 * Create podcast resources
 * Add resources to compound
 */
const podcast = new Podcast("Podcast NodeCourse");
podcast.appendChild(new Video("VIDEO FOR PODCAST"));
podcast.appendChild(new Link("LINK FOR PODCAST"));

/**
 * Create video compound
 * Create video resources
 * Add resources to compound
 */
const post = new Post("Post NodeCourse");
post.appendChild(new Video("VIDEO FOR POST"));
post.appendChild(new Link("LINK FOR POST"));
podcast.appendChild(post);

console.log("🚀 ~ ", { podcastElements: podcast.listChildren() });
podcast.execute();

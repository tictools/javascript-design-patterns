import Compound from "./Compound/Compound";
import Resource from "./Resource/Resource";

/**
 * Create podcast compound
 * Create podcast resources
 * Add resources to compound
 */
const podcastCompound = new Compound("Podcast Compound");
podcastCompound.addResource(new Resource("POST"));
podcastCompound.addResource(new Resource("LINK"));
podcastCompound.addResource(new Resource("LINK"));

/**
 * Create video compound
 * Create video resources
 * Add resources to compound
 */
const videoCompound = new Compound("Video Compound");
videoCompound.addResource(new Resource("POST"));
videoCompound.addResource(new Resource("LINK"));
videoCompound.addResource(new Resource("PODCAST"));
videoCompound.addResource(podcastCompound);

videoCompound.execute();

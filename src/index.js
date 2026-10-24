/**
 * Cloudflare Worker for Feltham & District Rifle Club.
 * Static pages and images are uploaded and cached through Workers Assets.
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};

import cloudflare from "@astrojs/cloudflare";
// import sitemap from "@astrojs/sitemap";
// import solidJs from "@astrojs/solid-js";
// import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
   output: "server",
   trailingSlash: "never",
   adapter: cloudflare({
      // docs: https://docs.astro.build/en/guides/integrations-guide/cloudflare/
      // https://github.com/withastro/roadmap/discussions/590
      // runtime: {
      // 	model: 'local',
      // 	type: 'pages',
      // },
      // imageService: 'compile', // `compile` here is now default, as of v11 (see all options here: https://docs.astro.build/en/guides/integrations-guide/cloudflare/#options)
      // platformProxy: {
      // 	enabled: true,
      // 	persist: './.cache/wrangler/v3',
      // },
   }),
   integrations: [
      // tailwind(),
      // solidJs(),
      // sitemap({
      // 	serialize(item) {
      // 		if (/movies\/search-thumb-entry/.test(item.url)) {
      // 			return undefined
      // 		}
      // 		return item
      // 	},
      // }),
      // (await import('@playform/compress')).default({
      // 	CSS: false,
      // 	HTML: {
      // 		'html-minifier-terser': {
      // 			removeAttributeQuotes: false,
      // 		},
      // 	},
      // 	Image: false,
      // 	JavaScript: false,
      // 	SVG: false,
      // }),
   ],
   // site: "https://cfpages-astro-bug-min-repo.familymoviedb.com", // for the sitemap plugin
   vite: {
      // optimizeDeps: {
      // 	esbuildOptions: {
      // 		define: {
      // 			global: 'globalThis',
      // 		},
      // 	},
      // },
      // server: {
      // 	proxy: {
      // 		'/api/*': 'http://localhost:8788',
      // 	},
      // },
   },
});

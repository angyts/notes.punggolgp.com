import { defaultTheme, defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { searchPlugin } from "@vuepress/plugin-search";
import { getDirname, path } from "@vuepress/utils";
import { glob } from "glob";

let noteFiles = glob
  .sync("docs/notes/**/*.md")
  .map((f) => f.replace("docs", "").replace("index.md", ""));

import { description } from "../../package.json";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  lang: "en-US",
  title: "Medical Notes",
  description: description,
  head: [
    [
      "script",
      {
        src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
      },
    ],
  ],

  theme: defaultTheme({
    logo: "vue.png",
    notFound: [
      "Sometimes you need to get lost to be found",
    ],

    navbar: [
      {
        text: "Medical Notes",
        link: "/notes/",
      },
      {
        text: "Admin",
        link: "/admin/",
      },
    ],

    sidebar: {
      "/notes": [
        {
          text: "Medical Notes",
          children: noteFiles,
        },
      ],
    },
  }),

  alias: {
    "@theme/HomeFooter.vue": path.resolve(
      __dirname,
      "./components/MyHomeFooter.vue"
    ),
  },

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    searchPlugin({}),
  ],
});
// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Scikit-LLM",
  tagline: "Scikit-Learn Meets Large Language Models",
  favicon:
    "https://raw.githubusercontent.com/gist/OKUA1/43d26803ba9cccd1ea478bb491fd9b83/raw/f4b7a216297b28ac4aef182496d5d0aa915c3e35/skllm_icon_color.svg",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "beastbyteai", // Usually your GitHub org/user name.
  projectName: "scikit-llm-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Scikit-LLM",
        logo: {
          alt: "My Site Logo",
          src: "https://raw.githubusercontent.com/gist/OKUA1/43d26803ba9cccd1ea478bb491fd9b83/raw/f4b7a216297b28ac4aef182496d5d0aa915c3e35/skllm_icon_color.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://medium.com/@iryna230520/list/scikitllm-afe222259a3c",
            label: "Blog",
            position: "left",
          },
          {
            href: "https://github.com/iryna-kondr/scikit-llm",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/YDAbwuWK7V",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://medium.com/@iryna230520/list/scikitllm-afe222259a3c",
              },
              {
                label: "GitHub",
                href: "https://github.com/iryna-kondr/scikit-llm",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} beastbyte.ai. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

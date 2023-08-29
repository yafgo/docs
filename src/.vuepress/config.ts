import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "YAFGO",
  description: "Yafgo 文档",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

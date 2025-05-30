import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from "./types/config";

export const siteConfig: SiteConfig = {
  title: "Skyblocker",
  subtitle: "Blog",
  lang: "en", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
  themeColor: {
    hue: 240, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: true, // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: "assets/images/banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: true, // Display the credit text of the banner image
      text: "powersaj", // Credit text to be displayed
      url: "https://github.com/aiden-powers", // (Optional) URL link to the original artwork or artist's page
    },
  },
  toc: {
    enable: true, // Display the table of contents on the right side of the post
    depth: 2, // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [
    // Leave this array empty to use the default favicon
    {
      src: "/favicon/icon.png", // Path of the favicon, relative to the /public directory
      theme: "light", // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
      sizes: "32x32", // (Optional) Size of the favicon, set only if you have favicons of different sizes
    },
  ],
};

export const navBarConfig: NavBarConfig = {
  links: [],
};

export const profileConfig: ProfileConfig = {
  name: "wohl",
  links: [],
};

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

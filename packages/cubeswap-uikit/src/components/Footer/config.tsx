import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.cubeswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://cubeswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.cubeswap.finance/contact-us/telegram",
      },
      {
        label: "CSE",
        href: "https://docs.cubeswap.finance/tokenomics/cse",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://cubeswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.cubeswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.cubeswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.cubeswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/Cubeswap-exchange",
      },
      {
        label: "Documentation",
        href: "https://docs.cubeswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@cubeswap-1/s/cubeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.cubeswap.finance/help/faq#is-cubeswap-safe-has-cubeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.cubeswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/cubeswap",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/cubeswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/CubeswapSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/CubeswapSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/CubeswapSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/cubeswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/cubeswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/cubeswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/CubeswapSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/CubeswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/cubeswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/cubeswapfr",
      },
      {
        label: "Datch",
        href: "https://t.me/CubeswapSwap_DE",
      },
      {
        label: "Filipino",
        href: "https://t.me/Cubeswap_Ph",
      },
      {
        label: "ქართული ენა",
        href: "https://t.me/CubeswapSwapGeorgia",
      },
      {
        label: "Announcements",
        href: "https://t.me/CubeswapSwapAnn",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com/r/cubeswap",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/cubeswap_official",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/Cubeswap-exchange/",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/cubeswap",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));

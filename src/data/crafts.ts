export type Craft = {
  name: string;
  date: string;
  video: string;
  href?: string;
};

export const crafts: Craft[] = [
  {
    name: "Onix Wallet",
    date: "May 2023",
    video: "/assets/videos/onix-wallet.mp4",
  },
  {
    name: "Typing Animation",
    date: "July 2023",
    video: "/assets/videos/typing-animation.mp4",
    href: "/crafts/typing-animation",
  },
  {
    name: "Blurred Icons",
    date: "July 2023",
    video: "/assets/videos/blurred-icons.mp4",
    href: "/crafts/blurred-icons",
  },
  {
    name: "Matrix Text",
    date: "August 2023",
    video: "/assets/videos/matrix-text.mp4",
    href: "/crafts/matrix-text",
  },
].reverse();

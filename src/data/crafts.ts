export type Craft = {
  name: string;
  date: string;
  video: string;
  href?: string;
};

export const crafts: Craft[] = [
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
].reverse();

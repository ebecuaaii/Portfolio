const config = {
  title: "Ngoc Truc| Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Naresh, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Naresh, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Truc",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Ngoc Truc",
  email: "ngoctrucnguyen3012@gmail.com",
  site: "https://nareshkhatri.site",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/in/nguyen-ho-ngoc-truc-37075133b/",
    instagram: "https://www.instagram.com/ntrc__etc/",
    facebook: "https://www.facebook.com/ngocchucchuche",
    github: "https://github.com/ebecuaaii",
  },
};
export { config };

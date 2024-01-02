import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.instagram.com", icon: "fab fa-instagram" },
  { id: 4, href: "https://www.youtube.com", icon: "fab fa-youtube" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: `Experience budget-friendly adventures with our exclusive deals and
              cost-effective travel packages, ensuring you get the most out of
              your journey without breaking the bank.`,
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: `Discover the thrill of the great outdoors with our diverse range
              of hiking excursions, from scenic strolls to challenging treks,
              tailored to cater to all levels of adventurers.
              `,
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: `Indulge in unparalleled luxury during your travels with our
              carefully selected accommodations and VIP treatment, ensuring that
              every moment of your trip is as comfortable as it is
              unforgettable.`,
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: `Embark on a soul-stirring journey through the roof of the world,
              where ancient traditions meet breathtaking landscapes, in our
              exclusive Tibet Adventure tour designed to immerse you in the
              mystique of this awe-inspiring region.`,
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    info: `Uncover the cultural gems and natural wonders of Java, Indonesia,
              as our Best of Java tour takes you on an exploration of historic
              temples, lush landscapes, and vibrant local communities for an
              enriching and diverse travel experience.`,
    location: "indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    info: `Immerse yourself in the dynamic fusion of tradition and modernity
              with our Explore Hong Kong tour, where iconic skyline views,
              delectable cuisine, and cultural discoveries await around every
              corner of this bustling metropolis.`,
    location: "hong kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    info: `Witness the magic of the African savannah and experience the raw
              beauty of wildlife in our Kenya Highlights tour, where safari
              adventures, majestic landscapes, and encounters with the Big Five
              create unforgettable moments in the heart of East Africa.`,
    location: "kenya",
    duration: 20,
    cost: 3300,
  },
];

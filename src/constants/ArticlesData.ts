import DynamoNetworkMap from "assets/images/articles/dynamo-network-map.jpg";

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  publisher: string;
  /** ISO date, e.g. "2026-10-20" */
  date: string;
  readingTime: string;
  url: string;
  image: string;
  imageAlt: string;
  tags: string[];
};

export const ARTICLES_DATA: Article[] = [
  {
    id: "dynamo-interface",
    title:
      "From complex water data to clearer decisions: designing the Dynamo interface",
    excerpt:
      "A behind-the-scenes look at designing the interface for Dynamo, SME Water's pressure management platform. I explain how we shaped complex hydraulic data around the user's investigation journey, from interactive network maps to longitudinal pressure profiles, revealing detail progressively and refining the design with feedback from our industry partners.",
    publisher: "SME Water",
    date: "2026-10-20",
    readingTime: "9 min read",
    url: "https://sme-water.co.uk/from-complex-water-data-to-clearer-decisions-designing-the-dynamo-interface/",
    image: DynamoNetworkMap,
    imageAlt:
      "Dynamo interface showing an interactive network map with a highlighted district metered area and pressure monitoring assets",
    tags: ["UI/UX Design", "Data Visualisation", "Water Industry"],
  },
];

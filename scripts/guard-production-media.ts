import { hasPrototypeOnlyMedia } from "../src/content/media";

const isPublicationBuild = process.env.PUBLICATION_BUILD === "true";

if (isPublicationBuild && hasPrototypeOnlyMedia) {
  console.error(
    "Publication blocked: owner-cleared media must replace every asset marked prototypeOnly before deployment.",
  );
  process.exit(1);
}

console.log(
  isPublicationBuild
    ? "Publication media guard passed."
    : "Local prototype build: temporary listing imagery is permitted and remains publication-blocked.",
);

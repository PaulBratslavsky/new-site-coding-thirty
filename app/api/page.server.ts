const qs = require("qs");

const params = (slug: string) =>
  qs.stringify({
    populate: {
      Layout: {
        populate: {
          image: {
            fields: ["name", "formats", "alternativeText"],
          },
          HeroLink: {
            fields: ["text", "href"],
          },
        },
      },
    },
    filters: {
      slug: slug,
    },
  });

export async function getPageBySlug(slug: string) {
  const CONTENT_TYPE = "pages";
  const BASE_URL = `https://mucho-valid-night.strapiapp.com/api/${CONTENT_TYPE}/?${params(slug)}`;
  const QUERY = BASE_URL + params(slug);

  try {
    const res = await fetch(QUERY);
    const data = await res.json();
    return data;
  } catch (error) {
    return { error };
  }
}

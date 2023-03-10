export async function getPageBySlug(slug: string) {
  const QUERY = `http://localhost:1337/api/page/find-by-slug/${slug}`;

  try {
    const res = await fetch(QUERY);
    const data = await res.json();
    return data;
  } catch (error) {
    return { error };
  }
}

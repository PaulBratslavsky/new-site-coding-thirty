export async function getPageBySlug(slug: string) {
  const QUERY = `https://squid-app-7h5w9.ondigitalocean.app/api/page/find-by-slug/${slug}`;
  const PUBLIC_API_KEY = "59d398e7f4c27e694d8890671e0563ce535006e61a656bc2ae629c110df3fd75e4fc781788657e3caa46ca918c75ace1b5541910ea7660ee075818d2f0b8da355c7df829c5255a2ec3cf091a3551608c8b611f19158777221fa3d6f5ad13f5fcb039fd317ea3aaf297acc2bd756f65ea64dfa35a9b7a23b6e15fa4266bfc23ac";

  try {
    const res = await fetch(QUERY, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${PUBLIC_API_KEY}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error };
  }
}

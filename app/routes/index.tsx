import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Bio from "~/components/Bio";
import Header from "~/components/Header";
import { getPageBySlug } from "~/api/page.server";

// import FeaturedPosts from "~/components/FeaturedPosts";
// import FeaturedResources from "~/components/FeaturedResources";
import JoinTheCommunity from "~/components/JoinTheCommunity";

export const loader = async () => {
  const data = await getPageBySlug("coding-after-thirty");
  return json({ data });
}

export default function IndexRoute() {
  const { data } = useLoaderData<typeof loader>();
  const pageContent = data.data.attributes.page_layout;

  function blockRenderer(block: any) {
    console.log(block)
    switch (block.__component) {
      case "my-components.hero":
      return <Header key={block.id} data={block} />
    }
    return null;
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      {pageContent && pageContent.map(blockRenderer)}
      <JoinTheCommunity />
      
      {/* <Bio />
      <FeaturedPosts buttonLink="/blog" buttonText="Posts"/>
      <FeaturedResources  buttonLink="/resources" buttonText="Resources"/>
      <JoinTheCommunity /> */}
    </div>
  );
}

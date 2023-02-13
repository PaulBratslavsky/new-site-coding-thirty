import Bio from "~/components/Bio";
import Header from "~/components/Header";
import FeaturedPosts from "~/components/FeaturedPosts";
import FeaturedResources from "~/components/FeaturedResources";
import JoinTheCommunity from "~/components/JoinTheCommunity";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Header />
      <Bio />
      <FeaturedPosts buttonLink="/blog" buttonText="Posts"/>
      <FeaturedResources  buttonLink="/resources" buttonText="Resources"/>
      <JoinTheCommunity />
    </div>
  );
}

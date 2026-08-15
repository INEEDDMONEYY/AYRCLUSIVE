import ResourcesHero from "../components/ResourcesHero";
import { blogPosts } from "../data/blogPosts";
import heroImage from "../../../assets/images/private-plane.jpg";

export default function ResourcesBlogPage() {
  return (
    <div className="w-full bg-white">
      <ResourcesHero
        eyebrow="Resources"
        title="Blog"
        description="Product updates, industry insight, and stories from the marketplace."
        image={heroImage}
      />

      <section className="section w-full">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.title} className="card p-6 flex flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--primary)" }}>
                  {post.category}
                </p>
                <h3 className="mt-3 text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs" style={{ color: "var(--text-muted)" }}>
                  {post.date}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { RelatedPostLink } from "./related-post-link"

interface RelatedPost {
  id: string
  title: string
  category: string
  date: string
  image: string
}

interface BlogRelatedPostsProps {
  posts: RelatedPost[]
}

export function BlogRelatedPosts({ posts }: BlogRelatedPostsProps) {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <RelatedPostLink
              key={post.id}
              id={post.id}
              title={post.title}
              category={post.category}
              date={post.date}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

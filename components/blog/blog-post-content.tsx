import { PortableText } from "next-sanity";

interface BlogPostContentProps {
  content: any[]
}

export function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="prose prose-invert prose-lg max-w-none">
        <div
          className="text-slate-300 leading-relaxed space-y-6" >
        
        {Array.isArray(content) && <PortableText value={content} />}
        </div>    
      </div>
    </div>
  )
}

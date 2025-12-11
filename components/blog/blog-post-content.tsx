interface BlogPostContentProps {
  content: string
}

export function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="prose prose-invert prose-lg max-w-none">
        <div
          className="text-slate-300 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{
            __html: content
              .split("\n")
              .map((line) => {
                if (line.startsWith("<h2>")) {
                  return `<h2 class="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">${line.slice(4)}`
                }
                if (line.startsWith("<h3>")) {
                  return `<h3 class="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">${line.slice(4)}`
                }
                if (line.startsWith("<code>")) {
                  return `<code class="bg-slate-900 text-cyan-400 px-2 py-1 rounded text-sm font-mono">${line.slice(6)}`
                }
                if (line.startsWith("<pre>")) {
                  return `<pre class="bg-slate-900 border border-slate-800 rounded-lg p-6 overflow-x-auto my-6"><code class="text-cyan-400 font-mono text-sm">${line.slice(5)}`
                }
                if (line.startsWith("<p>")) {
                  return `<p class="text-slate-300 mb-4 leading-relaxed">${line.slice(3)}`
                }
                return line
              })
              .join("\n"),
          }}
        />
      </div>
    </div>
  )
}

import { Card } from "@/components/ui/card"

interface BlogPostAuthorProps {
  author: string
}

export function BlogPostAuthor({ author }: BlogPostAuthorProps) {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <Card className="mt-12 bg-slate-900/50 border-slate-800 p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex-shrink-0" />
          <div>
            <p className="text-white font-semibold text-lg mb-1">{author}</p>
            <p className="text-slate-400 text-sm">
              AI Engineer and Content Writer at AgentDevAI. Passionate about building intelligent systems and sharing
              knowledge with the community.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}

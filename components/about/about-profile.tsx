import { Card } from "@/components/ui/card"
import { Award, Code, Zap } from "lucide-react"

export function AboutProfile() {
  return (
    <section className="relative py-24 px-4 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet the Team</h2>
          <p className="text-xl text-slate-400">Agentic AI Engineers & FastAPI/LangChain Specialists</p>
        </div>

        <Card className="bg-slate-900 border-slate-800 p-8 md:p-12">
          <div className="space-y-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed">
                ChatDevAI was founded by experienced software engineers who saw businesses struggling with expensive,
                inflexible no-code solutions. We combine deep expertise in Python, FastAPI, LangChain, and cloud
                infrastructure to deliver custom AI systems that actually solve real problems.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-slate-800">
              <div className="flex items-start gap-3">
                <Code className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Production-First</h4>
                  <p className="text-sm text-slate-400">Every solution is built for scale and reliability</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Fast Delivery</h4>
                  <p className="text-sm text-slate-400">Launch AI agents in weeks, not months</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Expert Support</h4>
                  <p className="text-sm text-slate-400">Ongoing optimization and maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

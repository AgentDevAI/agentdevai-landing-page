import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
}

export function BlogPagination({ currentPage, totalPages }: BlogPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  // Show max 5 page numbers at a time
  const getVisiblePages = () => {
    if (totalPages <= 5) return pages

    if (currentPage <= 3) {
      return [...pages.slice(0, 4), -1, totalPages]
    }

    if (currentPage >= totalPages - 2) {
      return [1, -1, ...pages.slice(totalPages - 4)]
    }

    return [1, -1, currentPage - 1, currentPage, currentPage + 1, -1, totalPages]
  }

  const visiblePages = getVisiblePages()

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      {/* Previous Button */}
      <Button
        variant="outline"
        size="icon"
        asChild
        disabled={currentPage === 1}
        className="bg-slate-900 border-slate-800 hover:bg-slate-800 hover:border-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {currentPage === 1 ? (
          <span>
            <ChevronLeft className="w-4 h-4" />
          </span>
        ) : (
          <Link href={`/blog?page=${currentPage - 1}`}>
            <ChevronLeft className="w-4 h-4" />
          </Link>
        )}
      </Button>

      {/* Page Numbers */}
      {visiblePages.map((page, index) => {
        if (page === -1) {
          return (
            <span key={`ellipsis-${index}`} className="px-2 text-slate-500">
              ...
            </span>
          )
        }

        const isActive = page === currentPage

        return (
          <Button
            key={page}
            variant={isActive ? "default" : "outline"}
            size="icon"
            asChild={!isActive}
            className={
              isActive
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-slate-900 border-slate-800 hover:bg-slate-800 hover:border-primary/50"
            }
          >
            {isActive ? <span>{page}</span> : <Link href={`/blog?page=${page}`}>{page}</Link>}
          </Button>
        )
      })}

      {/* Next Button */}
      <Button
        variant="outline"
        size="icon"
        asChild
        disabled={currentPage === totalPages}
        className="bg-slate-900 border-slate-800 hover:bg-slate-800 hover:border-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {currentPage === totalPages ? (
          <span>
            <ChevronRight className="w-4 h-4" />
          </span>
        ) : (
          <Link href={`/blog?page=${currentPage + 1}`}>
            <ChevronRight className="w-4 h-4" />
          </Link>
        )}
      </Button>
    </div>
  )
}

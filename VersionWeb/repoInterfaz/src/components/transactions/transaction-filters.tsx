// @fp-path: src/components/transactions/transaction-filters.tsx
"use client"

import { useTranslations } from "next-intl"
import { SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface TransactionFiltersProps {
  search: string
  setSearch: (v: string) => void
  categoryFilter: string
  setCategoryFilter: (v: string) => void
  statusFilter: string
  setStatusFilter: (v: string) => void
  typeFilter: string
  setTypeFilter: (v: string) => void
  categories: string[]
}

export function TransactionFilters({
  search,
  setSearch,
  categoryFilter,
  setCategoryFilter,
  statusFilter,
  setStatusFilter,
  typeFilter,
  setTypeFilter,
  categories,
}: TransactionFiltersProps) {
  const t = useTranslations("transactionFilters")
  const typeOptions = ["all", "income", "expense"] as const

  const typeLabels: Record<string, string> = {
    all: t("allTypes"),
    income: t("income"),
    expense: t("expense"),
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Search */}
      <div className="relative w-full sm:min-w-[200px] sm:flex-1">
        <SearchIcon className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder={t("searchPlaceholder")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-8"
        />
      </div>

      {/* Category */}
      <Select
        value={categoryFilter}
        onValueChange={(v) => v && setCategoryFilter(v)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Status */}
      <Select
        value={statusFilter}
        onValueChange={(v) => v && setStatusFilter(v)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{t("allStatuses")}</SelectItem>
          <SelectItem value="completed">{t("completed")}</SelectItem>
          <SelectItem value="pending">{t("pending")}</SelectItem>
          <SelectItem value="failed">{t("failed")}</SelectItem>
        </SelectContent>
      </Select>

      {/* Type Toggle */}
      <div className="flex items-center rounded-lg border border-border p-0.5">
        {typeOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => setTypeFilter(opt)}
            className={cn(
              "rounded-md px-3 py-1 text-sm font-medium transition-colors",
              typeFilter === opt
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {typeLabels[opt]}
          </button>
        ))}
      </div>
    </div>
  )
}

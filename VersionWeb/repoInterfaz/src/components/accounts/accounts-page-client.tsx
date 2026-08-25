// @fp-path: src/components/accounts/accounts-page-client.tsx
"use client"

import { useMemo, useState } from "react"
import { useTranslations } from "next-intl"

import { bankAccounts, type BankAccount } from "@/data/seed"
import { cn } from "@/lib/utils"
import { AccountSummary } from "@/components/accounts/account-summary"
import { AccountCard } from "@/components/accounts/account-grid"
import { AddAccount } from "@/components/accounts/add-account"
import { EmptyState } from "@/components/empty-state"

type AccountType = "all" | "checking" | "savings" | "crypto" | "investment"

export function AccountsPageClient() {
  const t = useTranslations()
  const [selectedType, setSelectedType] = useState<AccountType>("all")
  const [accounts, setAccounts] = useState<BankAccount[]>(bankAccounts)

  const filterTabs = [
    { value: "all", label: t("accounts.filterTabs.all") },
    { value: "checking", label: t("accounts.filterTabs.checking") },
    { value: "savings", label: t("accounts.filterTabs.savings") },
    { value: "crypto", label: t("accounts.filterTabs.crypto") },
    { value: "investment", label: t("accounts.filterTabs.investment") },
  ] as const

  const filtered = useMemo(
    () =>
      selectedType === "all"
        ? accounts
        : accounts.filter((a) => a.type === selectedType),
    [accounts, selectedType]
  )

  function handleAddAccount(account: BankAccount) {
    setAccounts((prev) => [...prev, account])
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Summary row */}
      <AccountSummary accounts={accounts} />

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-1.5">
        {filterTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setSelectedType(tab.value)}
            className={cn(
              "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
              selectedType === tab.value
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Account grid + add card */}
      {filtered.length === 0 ? (
        <EmptyState
          variant="filter"
          title={t("accounts.emptyState.title")}
          description={t("accounts.emptyState.description")}
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((account, i) => (
            <AccountCard key={account.id} account={account} index={i} />
          ))}
          <AddAccount onAdd={handleAddAccount} />
        </div>
      )}
    </div>
  )
}

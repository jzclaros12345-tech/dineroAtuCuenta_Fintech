// @fp-path: src/components/dynamic-breadcrumb.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// Map URL segments to translation keys in the "breadcrumb" namespace
const segmentKeyMap: Record<string, string> = {
  dashboard: "dashboard",
  accounts: "accounts",
  transactions: "transactions",
  transfers: "transfers",
  cards: "cards",
  crypto: "crypto",
  analytics: "analytics",
  investments: "investments",
  budgets: "budgets",
  settings: "settings",
  notifications: "notifications",
  "sign-in": "signIn",
  "sign-up": "signUp",
  support: "support",
}

export function DynamicBreadcrumb() {
  const pathname = usePathname()
  const t = useTranslations("breadcrumb")
  const segments = pathname.split("/").filter(Boolean)

  if (segments.length === 0) return null

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/")
          const key = segmentKeyMap[segment]
          // Use translated label if we have a mapping, otherwise capitalize the raw segment
          const label = key
            ? t(key as Parameters<typeof t>[0])
            : segment.charAt(0).toUpperCase() + segment.slice(1)
          const isLast = index === segments.length - 1

          return (
            <BreadcrumbItem key={href} className={index === 0 && segments.length > 1 ? "hidden md:block" : undefined}>
              {isLast ? (
                <BreadcrumbPage>{label}</BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink render={<Link href={href} />}>
                    {label}
                  </BreadcrumbLink>
                  <BreadcrumbSeparator className="hidden md:block" />
                </>
              )}
            </BreadcrumbItem>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

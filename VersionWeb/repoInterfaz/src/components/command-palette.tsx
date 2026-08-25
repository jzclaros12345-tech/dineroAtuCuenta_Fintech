// @fp-path: src/components/command-palette.tsx
"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  LayoutDashboardIcon,
  WalletIcon,
  ArrowLeftRightIcon,
  CreditCardIcon,
  SendIcon,
  TrendingUpIcon,
  BitcoinIcon,
  ChartAreaIcon,
  TargetIcon,
  SettingsIcon,
  BellIcon,
  LogInIcon,
  UserPlusIcon,
  LifeBuoyIcon,
  SearchIcon,
  MoonIcon,
  SunIcon,
  MonitorIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { contacts, recentTransactions, cryptoCoins } from "@/data/seed"

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { setTheme } = useTheme()
  const t = useTranslations("commandPalette")

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const run = useCallback(
    (fn: () => void) => {
      setOpen(false)
      fn()
    },
    []
  )

  const pages = [
    { key: "dashboard", icon: LayoutDashboardIcon, href: "/dashboard" },
    { key: "accounts", icon: WalletIcon, href: "/accounts" },
    { key: "transactions", icon: ArrowLeftRightIcon, href: "/transactions" },
    { key: "transfers", icon: SendIcon, href: "/transfers" },
    { key: "cards", icon: CreditCardIcon, href: "/cards" },
    { key: "crypto", icon: BitcoinIcon, href: "/crypto" },
    { key: "analytics", icon: ChartAreaIcon, href: "/analytics" },
    { key: "investments", icon: TrendingUpIcon, href: "/investments" },
    { key: "budgets", icon: TargetIcon, href: "/budgets" },
    { key: "settings", icon: SettingsIcon, href: "/settings" },
    { key: "notifications", icon: BellIcon, href: "/notifications" },
    { key: "helpSupport", icon: LifeBuoyIcon, href: "/support" },
    { key: "signIn", icon: LogInIcon, href: "/sign-in" },
    { key: "signUp", icon: UserPlusIcon, href: "/sign-up" },
  ] as const

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title="Command Palette"
      description="Search pages, transactions, contacts, and more"
    >
      <Command>
        <CommandInput placeholder={t("placeholder")} />
        <CommandList>
          <CommandEmpty>{t("noResults")}</CommandEmpty>

          <CommandGroup heading={t("groupPages")}>
            {pages.map((page) => (
              <CommandItem key={page.href} onSelect={() => run(() => router.push(page.href))}>
                <page.icon className="mr-2 size-4" />
                {t(page.key)}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading={t("groupRecentTransactions")}>
            {recentTransactions.slice(0, 5).map((tx) => (
              <CommandItem key={tx.id} onSelect={() => run(() => router.push("/transactions"))}>
                <SearchIcon className="mr-2 size-4" />
                {tx.merchant}
                <span className="ml-auto text-xs tabular-nums text-muted-foreground">
                  {tx.amount > 0 ? "+" : ""}${Math.abs(tx.amount).toFixed(2)}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading={t("groupQuickTransfer")}>
            {contacts.slice(0, 4).map((c) => (
              <CommandItem key={c.id} onSelect={() => run(() => router.push("/transfers"))}>
                <SendIcon className="mr-2 size-4" />
                {t("sendTo", { name: c.name })}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading={t("groupCrypto")}>
            {cryptoCoins.slice(0, 4).map((coin) => (
              <CommandItem key={coin.id} onSelect={() => run(() => router.push("/crypto"))}>
                <BitcoinIcon className="mr-2 size-4" />
                {coin.name}
                <span className="ml-auto text-xs tabular-nums text-muted-foreground">
                  ${coin.price.toLocaleString()}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading={t("groupTheme")}>
            <CommandItem onSelect={() => run(() => setTheme("light"))}>
              <SunIcon className="mr-2 size-4" />
              {t("lightMode")}
            </CommandItem>
            <CommandItem onSelect={() => run(() => setTheme("dark"))}>
              <MoonIcon className="mr-2 size-4" />
              {t("darkMode")}
            </CommandItem>
            <CommandItem onSelect={() => run(() => setTheme("system"))}>
              <MonitorIcon className="mr-2 size-4" />
              {t("systemTheme")}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  )
}

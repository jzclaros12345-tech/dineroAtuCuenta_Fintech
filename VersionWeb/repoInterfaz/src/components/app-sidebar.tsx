// @fp-path: src/components/app-sidebar.tsx
"use client"

import * as React from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import { LanguageToggle } from "@/components/language-toggle"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  LayoutDashboardIcon,
  WalletIcon,
  ArrowLeftRightIcon,
  CreditCardIcon,
  ChartAreaIcon,
  TargetIcon,
  SettingsIcon,
  LifeBuoyIcon,
  LandmarkIcon,
  SendIcon,
  TrendingUpIcon,
  BitcoinIcon,
  BellIcon,
  LogInIcon,
  UserPlusIcon,
} from "lucide-react"

const user = {
  name: "Albert almanz Legacy.",
  email: "albert12345@fintech.com",
  avatar: "/avatars/user.jpg",
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const t = useTranslations()

  const navDaily = [
    { title: t("sidebar.overview"), url: "/dashboard", icon: <LayoutDashboardIcon /> },
    { title: t("sidebar.accounts"), url: "/accounts", icon: <WalletIcon /> },
    { title: t("sidebar.transactions"), url: "/transactions", icon: <ArrowLeftRightIcon /> },
    { title: t("sidebar.cards"), url: "/cards", icon: <CreditCardIcon /> },
  ]

  const navMoney = [
    { title: t("sidebar.transfers"), url: "/transfers", icon: <SendIcon /> },
    { title: t("sidebar.investments"), url: "/investments", icon: <TrendingUpIcon /> },
    { title: t("sidebar.crypto"), url: "/crypto", icon: <BitcoinIcon /> },
  ]

  const navInsights = [
    { title: t("sidebar.analytics"), url: "/analytics", icon: <ChartAreaIcon /> },
    { title: t("sidebar.budgets"), url: "/budgets", icon: <TargetIcon /> },
  ]

  const navAuth = [
    { title: t("sidebar.signIn"), url: "/sign-in", icon: <LogInIcon /> },
    { title: t("sidebar.signUp"), url: "/sign-up", icon: <UserPlusIcon /> },
  ]

  const navSecondary = [
    { title: t("sidebar.notifications"), url: "/notifications", icon: <BellIcon /> },
    { title: t("sidebar.settings"), url: "/settings", icon: <SettingsIcon /> },
    { title: t("sidebar.helpSupport"), url: "/support", icon: <LifeBuoyIcon /> },
  ]

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<Link href="/dashboard" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <LandmarkIcon className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">dineroAtucuenta</span>
                <span className="truncate text-xs text-muted-foreground">
                  Al instante, sin vueltas.
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navDaily} label={t("nav.daily")} />
        <NavMain items={navMoney} label={t("nav.money")} />
        <NavMain items={navInsights} label={t("nav.insights")} />
        <NavMain items={navAuth} label={t("nav.auth")} />
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-between px-2 pb-1">
          <LanguageToggle />
        </div>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}

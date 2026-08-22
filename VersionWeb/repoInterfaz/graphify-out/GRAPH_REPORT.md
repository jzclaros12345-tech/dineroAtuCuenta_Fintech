# Graph Report - repoInterfaz  (2026-08-21)

## Corpus Check
- 130 files · ~108,357 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 769 nodes · 1812 edges · 41 communities (34 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e338240d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- utils.ts
- settings-page-client.tsx
- command.tsx
- dependencies
- notifications-page-client.tsx
- sidebar.tsx
- cn
- seed.ts
- devDependencies
- compilerOptions
- dashboard-customizer.tsx
- Contributing to Shadcn Fintech
- components.json
- react
- cards-page-client.tsx
- app-sidebar.tsx
- support-page-client.tsx
- transfer-list.tsx
- dropdown-menu.tsx
- skeleton.tsx
- globe.tsx
- ai-insights.tsx
- spending-heatmap.tsx
- Shadcn Fintech
- investments/page.tsx
- dynamic-breadcrumb.tsx
- recurring-detector.tsx
- tabs.tsx
- [1.0.0] - 2026-04-13
- app/layout.tsx
- theme-toggle.tsx
- SupportPageClient
- globe-demo.tsx
- AGENTS.md
- eslint.config.mjs
- next.config.ts
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `cn()` - 235 edges
2. `Button()` - 35 edges
3. `Card()` - 35 edges
4. `CardContent()` - 35 edges
5. `CardHeader()` - 31 edges
6. `CardTitle()` - 31 edges
7. `react` - 29 edges
8. `compilerOptions` - 16 edges
9. `Input()` - 15 edges
10. `Badge()` - 14 edges

## Surprising Connections (you probably didn't know these)
- `ProfileTab()` --references--> `react`  [EXTRACTED]
  src/components/settings/settings-page-client.tsx → package.json
- `SecurityTab()` --references--> `react`  [EXTRACTED]
  src/components/settings/settings-page-client.tsx → package.json
- `MarketOverview()` --references--> `react`  [EXTRACTED]
  src/components/crypto/market-overview.tsx → package.json
- `NotificationDropdown()` --references--> `react`  [EXTRACTED]
  src/components/nav-secondary.tsx → package.json
- `NotificationsPageClient()` --references--> `react`  [EXTRACTED]
  src/components/notifications/notifications-page-client.tsx → package.json

## Import Cycles
- None detected.

## Communities (41 total, 7 thin omitted)

### Community 0 - "utils.ts"
Cohesion: 0.06
Nodes (71): accountTypes, Step, typeColors, SUBCATEGORY_COLORS, BudgetRings(), iconMap, MonthProjection(), iconMap (+63 more)

### Community 1 - "settings-page-client.tsx"
Cohesion: 0.06
Nodes (42): compactNumber(), MarketOverview(), SortDir, SortField, getPl(), HoldingsTable(), SortDir, SortKey (+34 more)

### Community 2 - "command.tsx"
Cohesion: 0.07
Nodes (33): containerVariants, GlobeDemo, itemVariants, containerVariants, GlobeDemo, itemVariants, Checkbox(), Command() (+25 more)

### Community 3 - "dependencies"
Cohesion: 0.05
Nodes (41): @base-ui/react, class-variance-authority, clsx, cmdk, date-fns, @dnd-kit/core, @dnd-kit/sortable, lucide-react (+33 more)

### Community 4 - "notifications-page-client.tsx"
Cohesion: 0.07
Nodes (24): AccountCard(), AccountCardProps, fmt(), AccountSummary(), AccountSummaryProps, fmt(), AccountsPageClient(), AccountType (+16 more)

### Community 5 - "sidebar.tsx"
Cohesion: 0.08
Nodes (24): AppSidebar(), CommandPalette(), DynamicBreadcrumb(), Separator(), Sheet(), SheetContent(), SheetDescription(), SheetFooter() (+16 more)

### Community 6 - "cn"
Cohesion: 0.12
Nodes (27): iconMap, NotificationDropdown(), typeColor, Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount() (+19 more)

### Community 7 - "seed.ts"
Cohesion: 0.06
Nodes (26): AccountCard, accountCards, AiInsight, BudgetCategory, CategoryBreakdown, categoryBreakdowns, CryptoCoin, cryptoPriceHistory (+18 more)

### Community 8 - "devDependencies"
Cohesion: 0.07
Nodes (29): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, shadcn, tailwindcss, @tailwindcss/postcss (+21 more)

### Community 9 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 10 - "dashboard-customizer.tsx"
Cohesion: 0.08
Nodes (22): AccountCards(), Block, DashboardCustomizer(), defaultBlocks, sizeClass, SortableWidget(), WidgetSize, FinancialOverview() (+14 more)

### Community 11 - "Contributing to Shadcn Fintech"
Cohesion: 0.09
Nodes (20): Attribution, Contributor Covenant Code of Conduct, Enforcement, Enforcement Responsibilities, Our Pledge, Our Standards, Scope, Code Standards (+12 more)

### Community 12 - "components.json"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 13 - "react"
Cohesion: 0.13
Nodes (17): react, react, CoinInsight(), generateCandlestickData(), CryptoPageClient(), MyBalance(), MyPortfolio(), TopCoins() (+9 more)

### Community 14 - "cards-page-client.tsx"
Cohesion: 0.15
Nodes (14): CardControls(), CardControlsProps, formatCurrency(), CardList(), CardListProps, formatCurrency(), CardsPageClient(), InteractiveCard() (+6 more)

### Community 15 - "app-sidebar.tsx"
Cohesion: 0.14
Nodes (17): data, NavMain(), NavSecondary(), NavUser(), Sidebar(), SidebarContent(), SidebarFooter(), SidebarGroup() (+9 more)

### Community 16 - "support-page-client.tsx"
Cohesion: 0.11
Nodes (17): botResponses, categoryColors, categoryFilters, categoryIcons, ChatMessage, ContactChannels(), priorityConfig, statusColors (+9 more)

### Community 17 - "transfer-list.tsx"
Cohesion: 0.18
Nodes (13): QuickSend(), fmt(), statusBadge(), TransferList(), TransferListProps, fmt(), TransferStats(), TransferStatsProps (+5 more)

### Community 18 - "dropdown-menu.tsx"
Cohesion: 0.17
Nodes (12): DropdownMenu(), DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuGroup(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator() (+4 more)

### Community 20 - "globe.tsx"
Cohesion: 0.20
Nodes (9): genRandomNumbers(), Globe(), GlobeConfig, hexToRgb(), numbersOfRings, Position, @react-three/fiber, ThreeElements (+1 more)

### Community 21 - "ai-insights.tsx"
Cohesion: 0.20
Nodes (7): AiInsights(), container, item, CategoryDonut(), MonthComparison(), RecurringDetector(), aiInsights

### Community 22 - "spending-heatmap.tsx"
Cohesion: 0.27
Nodes (9): DAY_LABELS, intensityClass(), SpendingHeatmap(), CardDescription(), Tooltip(), TooltipContent(), TooltipProvider(), TooltipTrigger() (+1 more)

### Community 23 - "Shadcn Fintech"
Cohesion: 0.20
Nodes (9): Author, Customization, Features, Getting Started, License, Pages, Shadcn Fintech, Sponsor this project (+1 more)

### Community 24 - "investments/page.tsx"
Cohesion: 0.22
Nodes (7): LiveTicker(), TickerEntry, PerformanceChart(), PortfolioAllocation(), Watchlist(), holdings, watchlistItems

### Community 25 - "dynamic-breadcrumb.tsx"
Cohesion: 0.33
Nodes (8): labelMap, Breadcrumb(), BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage(), BreadcrumbSeparator()

### Community 26 - "recurring-detector.tsx"
Cohesion: 0.29
Nodes (6): CYCLE, nextStatus(), Status, CardFooter(), RecurringCharge, recurringCharges

### Community 27 - "tabs.tsx"
Cohesion: 0.40
Nodes (5): Tabs(), TabsContent(), TabsList(), tabsListVariants, TabsTrigger()

### Community 28 - "[1.0.0] - 2026-04-13"
Cohesion: 0.40
Nodes (4): [1.0.0] - 2026-04-13, Added, Changelog, Infrastructure

### Community 29 - "app/layout.tsx"
Cohesion: 0.40
Nodes (3): geistMono, geistSans, metadata

### Community 30 - "theme-toggle.tsx"
Cohesion: 0.60
Nodes (3): emptySubscribe(), ThemeToggle(), useIsMounted()

## Knowledge Gaps
- **230 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+225 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `utils.ts`, `settings-page-client.tsx`, `command.tsx`, `notifications-page-client.tsx`, `sidebar.tsx`, `dashboard-customizer.tsx`, `react`, `cards-page-client.tsx`, `app-sidebar.tsx`, `support-page-client.tsx`, `transfer-list.tsx`, `dropdown-menu.tsx`, `skeleton.tsx`, `ai-insights.tsx`, `spending-heatmap.tsx`, `investments/page.tsx`, `dynamic-breadcrumb.tsx`, `recurring-detector.tsx`, `tabs.tsx`, `SupportPageClient`?**
  _High betweenness centrality (0.376) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `SupportPageClient`, `settings-page-client.tsx`, `utils.ts`, `dependencies`, `notifications-page-client.tsx`, `sidebar.tsx`, `cn`, `app-sidebar.tsx`?**
  _High betweenness centrality (0.144) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `devDependencies`, `react`?**
  _High betweenness centrality (0.144) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _230 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `utils.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05744449619624282 - nodes in this community are weakly interconnected._
- **Should `settings-page-client.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05952380952380952 - nodes in this community are weakly interconnected._
- **Should `command.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06956521739130435 - nodes in this community are weakly interconnected._
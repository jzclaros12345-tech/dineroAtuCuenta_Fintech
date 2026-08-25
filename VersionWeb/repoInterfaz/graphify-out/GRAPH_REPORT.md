# Graph Report - repoInterfaz  (2026-08-24)

## Corpus Check
- 134 files · ~93,398 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 771 nodes · 1823 edges · 42 communities (34 shown, 8 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `21fec0ce`
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
- check_i18n.sh

## God Nodes (most connected - your core abstractions)
1. `cn()` - 235 edges
2. `Button()` - 36 edges
3. `Card()` - 35 edges
4. `CardContent()` - 35 edges
5. `CardHeader()` - 31 edges
6. `CardTitle()` - 31 edges
7. `react` - 29 edges
8. `compilerOptions` - 16 edges
9. `Input()` - 15 edges
10. `Badge()` - 14 edges

## Surprising Connections (you probably didn't know these)
- `NotificationsTab()` --references--> `react`  [EXTRACTED]
  src/components/settings/settings-page-client.tsx → package.json
- `ProfileTab()` --references--> `react`  [EXTRACTED]
  src/components/settings/settings-page-client.tsx → package.json
- `SecurityTab()` --references--> `react`  [EXTRACTED]
  src/components/settings/settings-page-client.tsx → package.json
- `CoinInsight()` --references--> `react`  [EXTRACTED]
  src/components/crypto/coin-insight.tsx → package.json
- `CryptoPageClient()` --references--> `react`  [EXTRACTED]
  src/components/crypto/crypto-page-client.tsx → package.json

## Import Cycles
- None detected.

## Communities (42 total, 8 thin omitted)

### Community 0 - "utils.ts"
Cohesion: 0.08
Nodes (37): accountTypes, Step, typeColors, CandlestickData, CandlestickProps, CandlestickTooltip(), CoinInsight(), CoinInsightProps (+29 more)

### Community 1 - "settings-page-client.tsx"
Cohesion: 0.06
Nodes (42): compactNumber(), MarketOverview(), SortDir, SortField, getPl(), HoldingsTable(), SortDir, SortKey (+34 more)

### Community 2 - "command.tsx"
Cohesion: 0.05
Nodes (34): containerVariants, GlobeDemo, itemVariants, containerVariants, GlobeDemo, itemVariants, EmptyStateProps, EmptyStateVariant (+26 more)

### Community 3 - "dependencies"
Cohesion: 0.05
Nodes (43): @base-ui/react, class-variance-authority, clsx, cmdk, date-fns, @dnd-kit/core, @dnd-kit/sortable, lucide-react (+35 more)

### Community 4 - "notifications-page-client.tsx"
Cohesion: 0.17
Nodes (13): AccountCard(), AccountCardProps, fmt(), AccountSummary(), AccountSummaryProps, fmt(), AccountsPageClient(), AccountType (+5 more)

### Community 5 - "sidebar.tsx"
Cohesion: 0.09
Nodes (24): NavUser(), Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetTitle() (+16 more)

### Community 6 - "cn"
Cohesion: 0.13
Nodes (21): SortableWidget(), Popover(), PopoverContent(), PopoverDescription(), PopoverHeader(), PopoverTitle(), PopoverTrigger(), ProgressIndicator() (+13 more)

### Community 7 - "seed.ts"
Cohesion: 0.06
Nodes (29): AccountCard, accountCards, AiInsight, aiInsights, BudgetCategory, CategoryBreakdown, categoryBreakdowns, CryptoCoin (+21 more)

### Community 8 - "devDependencies"
Cohesion: 0.07
Nodes (29): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, shadcn, tailwindcss, @tailwindcss/postcss (+21 more)

### Community 9 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 10 - "dashboard-customizer.tsx"
Cohesion: 0.15
Nodes (10): Block, DashboardCustomizer(), defaultBlocks, sizeClass, WidgetSize, MoneyMovement(), Period, QuickTransfer() (+2 more)

### Community 11 - "Contributing to Shadcn Fintech"
Cohesion: 0.09
Nodes (20): Attribution, Contributor Covenant Code of Conduct, Enforcement, Enforcement Responsibilities, Our Pledge, Our Standards, Scope, Code Standards (+12 more)

### Community 12 - "components.json"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 13 - "react"
Cohesion: 0.14
Nodes (17): Command(), CommandDialog(), CommandEmpty(), CommandGroup(), CommandInput(), CommandItem(), CommandList(), CommandSeparator() (+9 more)

### Community 14 - "cards-page-client.tsx"
Cohesion: 0.18
Nodes (12): CardControls(), CardControlsProps, formatCurrency(), CardList(), CardListProps, formatCurrency(), CardsPageClient(), InteractiveCard() (+4 more)

### Community 15 - "app-sidebar.tsx"
Cohesion: 0.17
Nodes (15): user, NavMain(), iconMap, NavSecondary(), typeColor, SidebarContent(), SidebarFooter(), SidebarGroup() (+7 more)

### Community 16 - "support-page-client.tsx"
Cohesion: 0.06
Nodes (40): react, react, geistMono, geistSans, metadata, DAY_LABELS, intensityClass(), SpendingHeatmap() (+32 more)

### Community 17 - "transfer-list.tsx"
Cohesion: 0.16
Nodes (14): QuickSend(), SendState, fmt(), statusBadge(), TransferList(), TransferListProps, fmt(), TransferStats() (+6 more)

### Community 18 - "dropdown-menu.tsx"
Cohesion: 0.10
Nodes (22): COLORS, LanguageToggle(), LocaleCode, locales, Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup() (+14 more)

### Community 20 - "globe.tsx"
Cohesion: 0.20
Nodes (9): genRandomNumbers(), Globe(), GlobeConfig, hexToRgb(), numbersOfRings, Position, @react-three/fiber, ThreeElements (+1 more)

### Community 21 - "ai-insights.tsx"
Cohesion: 0.16
Nodes (10): AiInsights(), container, item, MonthComparison(), CYCLE, nextStatus(), RecurringDetector(), Status (+2 more)

### Community 22 - "spending-heatmap.tsx"
Cohesion: 0.30
Nodes (9): iconMap, categoryColors, SpendingLimit(), Badge(), badgeVariants, Card(), CardHeader(), CardTitle() (+1 more)

### Community 23 - "Shadcn Fintech"
Cohesion: 0.40
Nodes (4): Correr en local, dineroAtucuenta, Notas, Stack

### Community 24 - "investments/page.tsx"
Cohesion: 0.11
Nodes (21): CategoryDonut(), SUBCATEGORY_COLORS, FinancialOverview(), monthIndex, chartConfig, PerformanceChart(), PERIODS, PortfolioAllocation() (+13 more)

### Community 25 - "dynamic-breadcrumb.tsx"
Cohesion: 0.29
Nodes (9): DynamicBreadcrumb(), segmentKeyMap, Breadcrumb(), BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage() (+1 more)

### Community 26 - "recurring-detector.tsx"
Cohesion: 0.22
Nodes (9): BudgetRings(), iconMap, MonthProjection(), SavingsGoals(), DAYS, SpendingCalendar(), CardContent(), budgetCategories (+1 more)

### Community 27 - "tabs.tsx"
Cohesion: 0.21
Nodes (10): describeArc(), FactorDetail(), factorIcons, getScoreGradient(), getScoreLabel(), HealthScore(), ScoreGauge(), statusColor (+2 more)

### Community 28 - "[1.0.0] - 2026-04-13"
Cohesion: 0.33
Nodes (4): AppSidebar(), CommandPalette(), Separator(), SidebarInset()

### Community 29 - "app/layout.tsx"
Cohesion: 0.40
Nodes (4): LiveTicker(), TickerEntry, holdings, watchlistItems

### Community 30 - "theme-toggle.tsx"
Cohesion: 0.67
Nodes (3): randomDigits(), Step, VirtualCardGenerator()

## Knowledge Gaps
- **228 isolated node(s):** `check_i18n.sh script`, `$schema`, `style`, `rsc`, `tsx` (+223 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `utils.ts`, `settings-page-client.tsx`, `command.tsx`, `notifications-page-client.tsx`, `sidebar.tsx`, `dashboard-customizer.tsx`, `react`, `cards-page-client.tsx`, `app-sidebar.tsx`, `support-page-client.tsx`, `transfer-list.tsx`, `dropdown-menu.tsx`, `skeleton.tsx`, `ai-insights.tsx`, `spending-heatmap.tsx`, `investments/page.tsx`, `dynamic-breadcrumb.tsx`, `recurring-detector.tsx`, `tabs.tsx`, `[1.0.0] - 2026-04-13`, `app/layout.tsx`?**
  _High betweenness centrality (0.376) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `devDependencies`, `support-page-client.tsx`?**
  _High betweenness centrality (0.148) - this node is a cross-community bridge._
- **Why does `react` connect `support-page-client.tsx` to `utils.ts`, `settings-page-client.tsx`, `command.tsx`, `dependencies`, `sidebar.tsx`, `investments/page.tsx`?**
  _High betweenness centrality (0.148) - this node is a cross-community bridge._
- **What connects `check_i18n.sh script`, `$schema`, `style` to the rest of the system?**
  _228 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `utils.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07993966817496229 - nodes in this community are weakly interconnected._
- **Should `settings-page-client.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06038961038961039 - nodes in this community are weakly interconnected._
- **Should `command.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05143191116306254 - nodes in this community are weakly interconnected._
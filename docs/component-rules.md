# Component rules

The `.jsx` file is the source of truth. Do not flatten a React component into HTML. Specimen cards and Open Design fixtures consume compiled or token-mapped output.

## Discovery

A production component is complete when it has:

| File | Role |
| --- | --- |
| `<Name>.jsx` | React implementation |
| `<Name>.d.ts` | Public prop contract |
| `<Name>.prompt.md` | Agent-facing usage |

Compiler discovery still registers PascalCase pairs of `.jsx` + `.d.ts`. Capitalized exports reach the compiled window namespace `CelebrationOnPointDesignSystem_2fb49a`.

## Groups

- **forms** — Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch
- **display** — Card, Badge, Tag, Avatar, Stat, PillarCard
- **navigation** — Tabs, Breadcrumb
- **feedback** — Alert, ProgressBar, Tooltip

## Interaction

- Hover on interactive cards is a lift (`translateY(-3px)`) plus elevation or glow.
- Primary gold → warm amber. Secondary blue → deep blue.
- Focus uses the azure ring (`--ring` / `--focus-ring`), never a custom color.
- No bounce. No infinite decorative loops. Respect `prefers-reduced-motion`.
- Always lay out sibling groups with flex/grid + `gap`. Never margin-based inline flow.

## Tokens

Colors come from `packages/tokens`. If a token does not exist, derive it in `oklch` from the existing palette and add it there. Do not invent a one-off hex inline.

Open Design fixtures must use the shared schema names in `open-design/celebration-onpoint/tokens.css` (`--bg`, `--fg`, `--accent`, …).

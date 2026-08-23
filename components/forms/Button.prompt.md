**Button** — primary action control; use `primary` (gold) for the single hero CTA on a view, `secondary` (blue) for confirming actions, `outline`/`ghost` for lower-emphasis.

```jsx
<Button variant="primary" size="lg" onClick={start}>See more</Button>
<Button variant="outline" iconLeft={<Icon name="arrow-right" />}>Learn how</Button>
```

Variants: `primary` · `secondary` · `outline` · `ghost`. Sizes: `sm` · `md` · `lg`. Supports `iconLeft` / `iconRight`, `fullWidth`, `disabled`. Reserve gold `primary` for one CTA per view — it is the brand's momentum accent.

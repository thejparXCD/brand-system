**Input** — labeled single-line text field. Pass `error` to show an error state.

```jsx
<Input label="Work email" placeholder="you@company.com" type="email" />
<Input label="Domain" iconLeft={<Icon name="globe" />} error="That domain isn't valid" />
```

Props: `label`, `placeholder`, `helperText`, `error`, `iconLeft`, `disabled`. Focus ring uses the azure `--ring` token.

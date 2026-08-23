# @celebration-onpoint/ui

React primitives for Celebration OnPoint. Source of truth is the `.jsx` file in each group; do not flatten components into HTML.

```js
import { Button, PillarCard, Stat } from '@celebration-onpoint/ui';
```

The compiled browser bundle remains at `dist/_ds_bundle.js` for consumers that load the previous window namespace:

```js
const { Button, PillarCard, Stat } = window.CelebrationOnPointDesignSystem_2fb49a;
```

Companion rules live in `docs/component-rules.md`. Open Design HTML fixtures live in `open-design/celebration-onpoint/components.html`.

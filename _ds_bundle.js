/* @ds-bundle: {"format":4,"namespace":"CelebrationOnPointDesignSystem_2fb49a","components":[{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"PillarCard","sourcePath":"components/display/PillarCard.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"assets/icons.jsx":"a1cc3f1b682a","components/display/Avatar.jsx":"68baf74958f9","components/display/Badge.jsx":"dc52fd3a8bca","components/display/Card.jsx":"5e935b687925","components/display/PillarCard.jsx":"371a54762cf4","components/display/Stat.jsx":"5adc8999abb0","components/display/Tag.jsx":"52bfabc3ea9b","components/feedback/Alert.jsx":"a1b751fc69aa","components/feedback/ProgressBar.jsx":"54a5ca6eb9ce","components/feedback/Tooltip.jsx":"23f48ea79261","components/forms/Button.jsx":"387bac4967aa","components/forms/Checkbox.jsx":"a532c17646ff","components/forms/IconButton.jsx":"d58d9e18ad86","components/forms/Input.jsx":"26a25037513a","components/forms/Radio.jsx":"fceb65d636b0","components/forms/Select.jsx":"3fba5a84a68b","components/forms/Switch.jsx":"dce3995b6043","components/forms/Textarea.jsx":"be19b895a2e0","components/navigation/Breadcrumb.jsx":"bd30de09437e","components/navigation/Tabs.jsx":"010a06b824f4","ui_kits/website/ContactModal.jsx":"49c6c9acb69e","ui_kits/website/Sections.jsx":"0e87937aba61","ui_kits/website/SiteChrome.jsx":"f039b2067716"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CelebrationOnPointDesignSystem_2fb49a = window.CelebrationOnPointDesignSystem_2fb49a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/icons.jsx
try { (() => {
/* Celebration OnPoint — Icon set
   ---------------------------------------------------------------
   Iconography system: Lucide (https://lucide.dev) — clean 2px stroke,
   24x24 grid, rounded caps/joins. This helper inlines the curated set
   used across the kits and slides so there is no CDN dependency.
   Add more by pasting the inner SVG of any Lucide icon into PATHS.
   Exposes window.Icon.
*/
(function () {
  const PATHS = {
    'arrow-right': '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
    'arrow-up-right': '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>',
    'check': '<polyline points="20 6 9 17 4 12"/>',
    'menu': '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>',
    'x': '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    'message': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    'cpu': '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',
    'compass': '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88"/>',
    'zap': '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    'eye': '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
    'trending-up': '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
    'target': '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    'bar-chart': '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',
    'layers': '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    'users': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    'shield': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    'search': '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    'info': '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    'chevron-right': '<polyline points="9 18 15 12 9 6"/>',
    'play': '<polygon points="5 3 19 12 5 21 5 3"/>',
    'sparkles': '<path d="M12 3l1.9 5.8L20 12l-6.1 3.2L12 21l-1.9-5.8L4 12l6.1-3.2z"/>',
    'mail': '<rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22 6 12 13 2 6"/>'
  };
  function Icon({
    name,
    size = 22,
    stroke = 'currentColor',
    strokeWidth = 2,
    style
  }) {
    const inner = PATHS[name] || '';
    return React.createElement('svg', {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style,
      dangerouslySetInnerHTML: {
        __html: inner
      }
    });
  }
  window.Icon = Icon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Celebration OnPoint — Avatar
 * Initials or image. Falls back to brand-gradient initials.
 */
function Avatar({
  name = '',
  src,
  size = 'md',
  style,
  ...rest
}) {
  const dims = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 52,
    xl: 64
  }[size] || 40;
  const fontSize = {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 18,
    xl: 22
  }[size] || 14;
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('');
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dims,
      height: dims,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: src ? 'var(--n-100)' : 'var(--grad-momentum)',
      color: 'var(--n-0)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize,
      overflow: 'hidden',
      userSelect: 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Celebration OnPoint — Badge
 * Small status / category pill. `tone` maps to semantic + brand colors.
 */
function Badge({
  children,
  tone = 'neutral',
  subtle = true,
  dot = false,
  style,
  ...rest
}) {
  const map = {
    neutral: ['var(--n-100)', 'var(--n-700)', 'var(--n-500)'],
    brand: ['rgba(16,86,165,0.10)', 'var(--c-blue)', 'var(--c-blue)'],
    gold: ['rgba(245,197,24,0.16)', 'var(--c-gold-deep)', 'var(--c-gold-deep)'],
    success: ['rgba(31,157,107,0.12)', 'var(--c-success)', 'var(--c-success)'],
    warning: ['rgba(232,146,12,0.14)', 'var(--c-warning)', 'var(--c-warning)'],
    danger: ['rgba(220,75,75,0.12)', 'var(--c-danger)', 'var(--c-danger)']
  };
  const [bg, fg, dotc] = map[tone] || map.neutral;
  const solid = !subtle;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '0.02em',
      background: solid ? fg : bg,
      color: solid ? 'var(--n-0)' : fg,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: solid ? 'var(--n-0)' : dotc
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Celebration OnPoint — Card
 * Surface container. `tone` switches between light and dark (ink) treatments.
 */
function Card({
  children,
  tone = 'light',
  elevation = 'md',
  interactive = false,
  padding = 'var(--space-6)',
  style,
  ...rest
}) {
  const tones = {
    light: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)'
    },
    ink: {
      background: 'var(--c-ink)',
      border: '1px solid rgba(255,255,255,0.10)',
      color: 'rgba(255,255,255,0.72)'
    }
  };
  const t = tones[tone] || tones.light;
  const shadow = {
    none: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  }[elevation] || 'var(--shadow-md)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: tone === 'ink' ? 'none' : shadow,
      transition: 'var(--transition)',
      cursor: interactive ? 'pointer' : 'default',
      ...t,
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = tone === 'ink' ? 'var(--glow-blue)' : 'var(--shadow-lg)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = tone === 'ink' ? 'none' : shadow;
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/PillarCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Celebration OnPoint — PillarCard
 * Signature dark card for the three M's (Message / Machines / Mission) and the
 * four service lines. Carries a gradient header band + gold momentum rule.
 */
function PillarCard({
  eyebrow,
  title,
  description,
  icon,
  theme = 'mission',
  index,
  style,
  ...rest
}) {
  const grads = {
    technology: 'var(--grad-technology)',
    growth: 'var(--grad-growth)',
    mission: 'var(--grad-mission)',
    data: 'var(--grad-data)',
    momentum: 'var(--grad-momentum)'
  };
  const grad = grads[theme] || grads.mission;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--c-ink)',
      border: '1px solid rgba(255,255,255,0.10)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: grad,
      opacity: 0.16,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: grad,
      color: 'var(--n-0)',
      boxShadow: 'var(--shadow-md)'
    }
  }, icon), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.14em',
      color: 'var(--c-gold)'
    }
  }, index)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 3,
      width: 40,
      borderRadius: 2,
      background: 'var(--grad-bolt)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--c-azure)',
      marginBottom: 8
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 22,
      lineHeight: 1.15,
      letterSpacing: '-0.01em',
      color: 'var(--n-0)',
      margin: '0 0 8px'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,0.64)',
      margin: 0
    }
  }, description)));
}
Object.assign(__ds_scope, { PillarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/PillarCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Celebration OnPoint — Stat
 * Headline metric with optional delta. Used across dashboards & decks.
 * `tone="ink"` for dark surfaces.
 */
function Stat({
  value,
  label,
  delta,
  deltaDirection = 'up',
  tone = 'light',
  style,
  ...rest
}) {
  const onDark = tone === 'ink';
  const deltaColor = deltaDirection === 'down' ? 'var(--c-danger)' : 'var(--c-success)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: onDark ? 'rgba(255,255,255,0.55)' : 'var(--text-faint)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 38,
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: onDark ? 'var(--n-0)' : 'var(--text-strong)'
    }
  }, value), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 'var(--fw-semibold)',
      color: deltaColor
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: deltaDirection === 'down' ? 'rotate(180deg)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "5"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "5 12 12 5 19 12"
  })), delta)));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Celebration OnPoint — Tag
 * Removable label chip (filters, selections). Square-ish radius vs. Badge's pill.
 */
function Tag({
  children,
  onRemove,
  icon,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '5px 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--c-azure)'
    }
  }, icon), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 16,
      height: 16,
      padding: 0,
      marginRight: -2,
      border: 'none',
      background: 'transparent',
      color: 'var(--text-faint)',
      cursor: 'pointer',
      borderRadius: 'var(--radius-xs)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Celebration OnPoint — Alert
 * Inline message banner. `tone` sets color + default icon.
 */
function Alert({
  title,
  children,
  tone = 'info',
  icon,
  onClose,
  style,
  ...rest
}) {
  const map = {
    info: ['rgba(40,150,210,0.10)', 'var(--c-info)', 'var(--c-info)'],
    success: ['rgba(31,157,107,0.10)', 'var(--c-success)', 'var(--c-success)'],
    warning: ['rgba(232,146,12,0.12)', 'var(--c-warning)', 'var(--c-warning)'],
    danger: ['rgba(220,75,75,0.10)', 'var(--c-danger)', 'var(--c-danger)']
  };
  const [bg, accent] = map[tone] || map.info;
  const defaultIcons = {
    info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    success: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    warning: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    danger: '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 16px',
      background: bg,
      borderRadius: 'var(--radius-md)',
      borderLeft: `3px solid ${accent}`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: accent,
      flex: 'none',
      marginTop: 1
    }
  }, icon || /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    dangerouslySetInnerHTML: {
      __html: defaultIcons[tone] || defaultIcons.info
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 14,
      color: 'var(--text-strong)',
      marginBottom: children ? 3 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      lineHeight: 1.5,
      color: 'var(--text-body)'
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--text-faint)',
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Celebration OnPoint — ProgressBar
 * Track + fill. `value` 0–100. Gold or blue fill.
 */
function ProgressBar({
  value = 0,
  label,
  showValue = false,
  accent = 'gold',
  tone = 'light',
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  const onDark = tone === 'ink';
  const fill = accent === 'blue' ? 'var(--grad-momentum)' : 'var(--grad-bolt)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: '100%',
      ...style
    }
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 7
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 'var(--fw-medium)',
      color: onDark ? 'rgba(255,255,255,0.7)' : 'var(--text-body)'
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: onDark ? 'var(--c-gold)' : 'var(--text-muted)'
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: onDark ? 'rgba(255,255,255,0.12)' : 'var(--n-100)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${pct}%`,
      borderRadius: 'var(--radius-pill)',
      background: fill,
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Celebration OnPoint — Tooltip
 * Hover/focus tooltip. Wraps a single child trigger.
 */
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 8
    }
  }[placement] || {};
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 50,
      ...pos,
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      background: 'var(--c-navy)',
      color: 'var(--n-0)',
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      fontWeight: 'var(--fw-medium)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-lg)',
      ...style
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Celebration OnPoint — Button
 * Primary uses the gold "momentum" accent; secondary the brand blue.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 14px',
      height: 34,
      fontSize: 13,
      gap: 7,
      radius: 'var(--radius-sm)'
    },
    md: {
      padding: '0 20px',
      height: 42,
      fontSize: 14.5,
      gap: 8,
      radius: 'var(--radius-md)'
    },
    lg: {
      padding: '0 28px',
      height: 52,
      fontSize: 16,
      gap: 10,
      radius: 'var(--radius-md)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--c-gold)',
      color: 'var(--c-ink)',
      border: '1.5px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'var(--c-blue)',
      color: 'var(--n-0)',
      border: '1.5px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--c-blue)',
      border: '1.5px solid var(--border-strong)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--c-blue)',
      border: '1.5px solid transparent',
      boxShadow: 'none'
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-body)',
      fontSize: s.fontSize,
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 1,
      letterSpacing: '0.005em',
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'var(--transition)',
      whiteSpace: 'nowrap',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--c-gold-warm)';else if (variant === 'secondary') e.currentTarget.style.background = 'var(--c-blue-deep)';else if (variant === 'outline') {
        e.currentTarget.style.borderColor = 'var(--c-blue)';
        e.currentTarget.style.background = 'var(--n-25)';
      } else e.currentTarget.style.background = 'var(--n-50)';
    },
    onMouseLeave: e => {
      if (disabled) return;
      e.currentTarget.style.background = v.background;
      e.currentTarget.style.borderColor = variant === 'outline' ? 'var(--border-strong)' : 'transparent';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Celebration OnPoint — Checkbox */
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const fieldId = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: isControlled ? checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 'var(--radius-xs)',
      border: on ? '1.5px solid var(--c-blue)' : '1.5px solid var(--border-strong)',
      background: on ? 'var(--c-blue)' : 'var(--surface-card)',
      transition: 'var(--transition)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Celebration OnPoint — IconButton
 * Square/circular button for a single icon. Pass an icon node as children.
 */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  round = false,
  disabled = false,
  'aria-label': ariaLabel,
  onClick,
  style,
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  }[size] || 40;
  const variants = {
    solid: {
      background: 'var(--c-blue)',
      color: 'var(--n-0)',
      border: '1.5px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--c-blue)',
      border: '1.5px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1.5px solid transparent'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dims,
      height: dims,
      padding: 0,
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'var(--transition)',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'solid') e.currentTarget.style.background = 'var(--c-blue-deep)';else {
        e.currentTarget.style.background = 'var(--n-50)';
        e.currentTarget.style.color = 'var(--c-blue)';
      }
    },
    onMouseLeave: e => {
      if (disabled) return;
      e.currentTarget.style.background = v.background;
      e.currentTarget.style.color = v.color;
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Celebration OnPoint — Input
 * Text field with optional label, helper / error text, and icon adornment.
 */
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  type = 'text',
  helperText,
  error,
  iconLeft,
  disabled = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = id || React.useId();
  const borderColor = error ? 'var(--c-danger)' : focused ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 42,
      padding: '0 14px',
      background: disabled ? 'var(--n-50)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused && !error ? 'var(--ring)' : 'none',
      transition: 'var(--transition)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--text-faint)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--text-strong)',
      minWidth: 0
    }
  }, rest))), (helperText || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: error ? 'var(--c-danger)' : 'var(--text-faint)'
    }
  }, error || helperText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Celebration OnPoint — Radio (single option; group via shared `name`) */
function Radio({
  label,
  checked,
  defaultChecked,
  name,
  value,
  disabled = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const fieldId = id || React.useId();
  const isControlled = checked !== undefined;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "radio",
    name: name,
    value: value,
    checked: isControlled ? checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    "data-on": isControlled ? checked : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      border: (isControlled ? checked : defaultChecked) ? '1.5px solid var(--c-blue)' : '1.5px solid var(--border-strong)',
      background: 'var(--surface-card)',
      transition: 'var(--transition)'
    }
  }, (isControlled ? checked : defaultChecked) && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--c-blue)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Celebration OnPoint — Select
 * Native select styled to match the Input field, with a chevron adornment.
 */
function Select({
  label,
  options = [],
  value,
  defaultValue,
  placeholder,
  helperText,
  error,
  disabled = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = id || React.useId();
  const borderColor = error ? 'var(--c-danger)' : focused ? 'var(--border-focus)' : 'var(--border-default)';
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: 42,
      padding: '0 14px',
      background: disabled ? 'var(--n-50)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused && !error ? 'var(--ring)' : 'none',
      transition: 'var(--transition)'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--text-strong)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      paddingRight: 20
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-faint)",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: 14,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))), (helperText || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: error ? 'var(--c-danger)' : 'var(--text-faint)'
    }
  }, error || helperText));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Celebration OnPoint — Switch (toggle) */
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const fieldId = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: isControlled ? checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 40,
      height: 23,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--c-blue)' : 'var(--n-300)',
      transition: 'var(--transition)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2.5,
      left: on ? 19.5 : 2.5,
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--n-0)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Celebration OnPoint — Textarea */
function Textarea({
  label,
  placeholder,
  value,
  defaultValue,
  rows = 4,
  helperText,
  error,
  disabled = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = id || React.useId();
  const borderColor = error ? 'var(--c-danger)' : focused ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    rows: rows,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      padding: '11px 14px',
      resize: 'vertical',
      background: disabled ? 'var(--n-50)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused && !error ? 'var(--ring)' : 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'var(--text-strong)',
      outline: 'none',
      transition: 'var(--transition)'
    }
  }, rest)), (helperText || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: error ? 'var(--c-danger)' : 'var(--text-faint)'
    }
  }, error || helperText));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Celebration OnPoint — Breadcrumb
 * `items`: [{ label, href? }]. Last item is the current page (no link).
 */
function Breadcrumb({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last || !it.href ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: last ? 'var(--text-strong)' : 'var(--text-muted)',
        fontWeight: last ? 'var(--fw-medium)' : 'var(--fw-regular)'
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href,
      style: {
        color: 'var(--text-muted)',
        textDecoration: 'none'
      }
    }, it.label), !last && /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--text-faint)",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "9 18 15 12 9 6"
    })));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Celebration OnPoint — Tabs
 * Underline tab bar. Controlled (`value`) or uncontrolled (`defaultValue`).
 * `tabs`: [{ value, label, icon? }]
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  tone = 'light',
  style,
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].value));
  const active = isControlled ? value : internal;
  const onDark = tone === 'ink';
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: `1px solid ${onDark ? 'rgba(255,255,255,0.12)' : 'var(--border-default)'}`,
      ...style
    }
  }, rest), tabs.map(t => {
    const on = t.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(t.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 14px',
        border: 'none',
        background: 'transparent',
        borderBottom: `2px solid ${on ? 'var(--c-gold)' : 'transparent'}`,
        marginBottom: -1,
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        color: on ? onDark ? 'var(--n-0)' : 'var(--text-strong)' : onDark ? 'rgba(255,255,255,0.55)' : 'var(--text-muted)',
        transition: 'var(--transition)'
      }
    }, t.icon && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex'
      }
    }, t.icon), t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactModal.jsx
try { (() => {
/* Celebration OnPoint — Contact / Book-a-session modal
   Exposes window.ContactModal */
(function () {
  const {
    Button,
    Input,
    Select,
    Textarea
  } = window.CelebrationOnPointDesignSystem_2fb49a;
  const Icon = window.Icon;
  function ContactModal({
    open,
    onClose
  }) {
    const [sent, setSent] = React.useState(false);
    React.useEffect(() => {
      if (open) setSent(false);
    }, [open]);
    if (!open) return null;
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(7,12,24,0.6)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: {
        width: 'min(520px, 100%)',
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-xl)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        padding: '24px 28px',
        background: 'var(--grad-momentum)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--c-gold)',
        marginBottom: 8
      }
    }, "Reality Audit"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 24,
        color: '#fff',
        margin: 0,
        letterSpacing: '-0.01em'
      }
    }, "Book a session"), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      "aria-label": "Close",
      style: {
        position: 'absolute',
        top: 18,
        right: 18,
        border: 'none',
        background: 'rgba(255,255,255,0.15)',
        borderRadius: 'var(--radius-sm)',
        width: 32,
        height: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 18
    }))), sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '44px 28px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: 'rgba(31,157,107,0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 18px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 28,
      stroke: "var(--c-success)"
    })), /*#__PURE__*/React.createElement("h4", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 20,
        color: 'var(--text-strong)',
        margin: '0 0 8px'
      }
    }, "You\u2019re on the calendar."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 24px'
      }
    }, "We\u2019ll reach out within one business day to confirm your Reality Audit."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onClose
    }, "Done")) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      },
      style: {
        padding: '24px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Name",
      placeholder: "Dana Reyes",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Work email",
      type: "email",
      placeholder: "you@company.com",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 15
      }),
      required: true
    })), /*#__PURE__*/React.createElement(Select, {
      label: "Where do you want momentum?",
      placeholder: "Choose a service line",
      options: ['Technology & Infrastructure', 'Growth & Workforce', 'Mission Strategy & Readiness', 'Not sure yet']
    }), /*#__PURE__*/React.createElement(Textarea, {
      label: "What\u2019s the hidden reality?",
      rows: 3,
      placeholder: "Briefly, where do message, machines, and mission fall out of sync?"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      type: "submit",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 17
      })
    }, "Request my audit"))));
  }
  window.ContactModal = ContactModal;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
/* Celebration OnPoint — Website sections
   Exposes window.Hero, window.ThreeM, window.ServiceLines, window.ProofBand, window.CTASection */
(function () {
  const {
    Button,
    PillarCard,
    Stat,
    Badge
  } = window.CelebrationOnPointDesignSystem_2fb49a;
  const Icon = window.Icon;

  /* ---------- HERO ---------- */
  function Hero({
    onContact
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--c-ink)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "cop-lightfield cop-lf--pillars cop-lf--alive",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '96px 28px 104px',
        display: 'grid',
        gridTemplateColumns: '1.15fr 0.85fr',
        gap: 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 14px',
        borderRadius: 'var(--radius-pill)',
        background: 'rgba(245,197,24,0.12)',
        border: '1px solid rgba(245,197,24,0.3)',
        marginBottom: 26
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "zap",
      size: 14,
      stroke: "var(--c-gold)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--c-gold)'
      }
    }, "Asymmetric advantage")), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 60,
        lineHeight: 1.04,
        letterSpacing: '-0.025em',
        color: '#fff',
        margin: '0 0 22px'
      }
    }, "Turn hidden reality into ", /*#__PURE__*/React.createElement("span", {
      style: {
        background: 'var(--grad-bolt)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent'
      }
    }, "visible momentum.")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 19,
        lineHeight: 1.6,
        color: 'rgba(255,255,255,0.66)',
        maxWidth: 520,
        margin: '0 0 30px'
      }
    }, "We unify Message, Machines, and Mission so your organization can see more, sell more, and operate smarter."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        flexWrap: 'wrap',
        marginBottom: 26
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 17
      }),
      onClick: onContact
    }, "See what you\u2019re missing"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "lg",
      style: {
        color: '#fff',
        borderColor: 'rgba(255,255,255,0.28)'
      },
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "play",
        size: 15
      })
    }, "Watch the 90-sec brief")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 15,
        letterSpacing: '0.01em',
        color: 'rgba(255,255,255,0.86)',
        margin: 0
      }
    }, "We build momentum. ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--c-gold)'
      }
    }, "Real. Measurable. Unstoppable."), " OnPoint.")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.10)',
        borderRadius: 'var(--radius-xl)',
        padding: 28,
        backdropFilter: 'blur(8px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-mark.png",
      alt: "",
      style: {
        height: 34
      }
    }), /*#__PURE__*/React.createElement(Badge, {
      tone: "gold",
      dot: true
    }, "Live signal")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 22
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      label: "Pipeline velocity",
      value: "+38%",
      delta: "12%",
      tone: "ink"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Surfaced revenue",
      value: "$2.1M",
      delta: "9%",
      tone: "ink"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Decisions / week",
      value: "3.4\xD7",
      tone: "ink"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Readiness",
      value: "72",
      tone: "ink"
    }))))));
  }

  /* ---------- M³ ---------- */
  function ThreeM() {
    const items = [{
      theme: 'momentum',
      index: 'M1',
      eyebrow: 'What you say',
      icon: 'message',
      title: 'Message',
      desc: 'The narrative, positioning, and storytelling that influences perception and clarifies direction.'
    }, {
      theme: 'technology',
      index: 'M2',
      eyebrow: 'How you operate',
      icon: 'cpu',
      title: 'Machines',
      desc: 'The technology, systems, and AI — automation, imaging systems, cloud — that bring the message to life.'
    }, {
      theme: 'mission',
      index: 'M3',
      eyebrow: 'Why you exist',
      icon: 'compass',
      title: 'Mission',
      desc: 'The purpose behind the initiative — why the work matters and who it serves.'
    }];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--c-ink)',
        borderTop: '1px solid rgba(255,255,255,0.06)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "cop-lightfield cop-lf--aurora",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '88px 28px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: 48
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--c-azure)',
        marginBottom: 14
      }
    }, "M\xB3 \xB7 Our foundational philosophy"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 40,
        letterSpacing: '-0.02em',
        color: '#fff',
        margin: '0 auto 16px',
        maxWidth: 720
      }
    }, "The lens through which we see the world. Everything connects message, machines, and mission.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20
      }
    }, items.map(it => /*#__PURE__*/React.createElement(PillarCard, {
      key: it.index,
      theme: it.theme,
      index: it.index,
      eyebrow: it.eyebrow,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: it.icon,
        size: 22
      }),
      title: it.title,
      description: it.desc
    })))));
  }

  /* ---------- SERVICE LINES ---------- */
  function ServiceLines() {
    const lines = [{
      key: 'growth',
      grad: 'var(--grad-growth)',
      icon: 'trending-up',
      name: 'Growth & Workforce Enablement',
      tag: 'Message',
      desc: 'Sales training, marketing, and communications that move people.'
    }, {
      key: 'technology',
      grad: 'var(--grad-technology)',
      icon: 'cpu',
      name: 'Technology & Infrastructure',
      tag: 'Machines',
      desc: 'AI transformation & automation, IT & cybersecurity advisory, Microsoft licensing & governance.'
    }, {
      key: 'mission',
      grad: 'var(--grad-mission)',
      icon: 'target',
      name: 'Mission Strategy & Readiness',
      tag: 'Mission',
      desc: 'Adoption & change management, and AI governance for health systems.'
    }];
    const [active, setActive] = React.useState('growth');
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '88px 28px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 36,
        flexWrap: 'wrap',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--c-azure)',
        marginBottom: 12
      }
    }, "Service lines"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 38,
        letterSpacing: '-0.02em',
        color: 'var(--text-strong)',
        margin: 0,
        maxWidth: 560
      }
    }, "Integrated expressions of M\xB3.")), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-up-right",
        size: 16
      })
    }, "Explore all services")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 18
      }
    }, lines.map(l => {
      const on = active === l.key;
      return /*#__PURE__*/React.createElement("div", {
        key: l.key,
        onMouseEnter: () => setActive(l.key),
        style: {
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 'var(--radius-lg)',
          minHeight: 248,
          padding: 24,
          color: '#fff',
          background: l.grad,
          cursor: 'pointer',
          boxShadow: on ? 'var(--shadow-xl)' : 'var(--shadow-md)',
          transform: on ? 'translateY(-4px)' : 'none',
          transition: 'var(--transition)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 44,
          height: 44,
          borderRadius: 'var(--radius-md)',
          background: 'rgba(255,255,255,0.14)',
          border: '1px solid rgba(255,255,255,0.2)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: l.icon,
        size: 22
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 10.5,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--c-gold)'
        }
      }, l.tag)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 19,
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
          color: '#fff',
          margin: '0 0 8px'
        }
      }, l.name), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: 13,
          lineHeight: 1.5,
          color: 'rgba(255,255,255,0.72)',
          margin: 0
        }
      }, l.desc)));
    }))));
  }

  /* ---------- AIM ONPOINT FRAMEWORK ---------- */
  function AimFramework() {
    const steps = [{
      n: '01',
      icon: 'search',
      title: 'Acquire',
      desc: 'Identify opportunities, capture data, and understand the landscape.'
    }, {
      n: '02',
      icon: 'layers',
      title: 'Integrate',
      desc: 'Connect message, machines, and mission — fuse creative, technical, and operational components into one system.'
    }, {
      n: '03',
      icon: 'trending-up',
      title: 'Maximize',
      desc: 'Activate momentum with execution. Amplify visibility, improve efficiency, accelerate outcomes — measure everything.'
    }];
    const fives = ['Client Commitment', 'Connection', 'Clarity', 'Creativity', 'Confidence', 'Celebration'];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-page)',
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '88px 28px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: 44
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--c-azure)',
        marginBottom: 12
      }
    }, "AIM OnPoint\u2122 Framework"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 38,
        letterSpacing: '-0.02em',
        color: 'var(--text-strong)',
        margin: '0 auto',
        maxWidth: 640
      }
    }, "M\xB3 is the philosophy. AIM is the action.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20
      }
    }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: s.n,
      style: {
        position: 'relative',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: 28,
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 46,
        height: 46,
        borderRadius: 'var(--radius-md)',
        background: 'var(--grad-momentum)',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 22
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--text-faint)'
      }
    }, s.n)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 3,
        width: 36,
        borderRadius: 2,
        background: 'var(--grad-bolt)',
        marginBottom: 14
      }
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 21,
        color: 'var(--text-strong)',
        margin: '0 0 8px'
      }
    }, s.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        lineHeight: 1.55,
        color: 'var(--text-muted)',
        margin: 0
      }
    }, s.desc)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        flexWrap: 'wrap',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--text-faint)'
      }
    }, "Powered by the 6 C\u2019s of OnPoint Success"), fives.map(c => /*#__PURE__*/React.createElement("span", {
      key: c,
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--c-blue)',
        padding: '4px 12px',
        borderRadius: 'var(--radius-pill)',
        background: 'rgba(16,86,165,0.08)',
        border: '1px solid rgba(16,86,165,0.16)'
      }
    }, c)))));
  }

  /* ---------- PROOF BAND ---------- */
  function ProofBand() {
    const stats = [{
      label: 'Avg. pipeline lift',
      value: '+38%'
    }, {
      label: 'Hidden revenue surfaced',
      value: '$2.1M'
    }, {
      label: 'Faster decisions',
      value: '3.4×'
    }, {
      label: 'Mission readiness',
      value: '72%'
    }];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-card)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '46px 28px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 28
      }
    }, stats.map(s => /*#__PURE__*/React.createElement(Stat, {
      key: s.label,
      label: s.label,
      value: s.value
    }))));
  }

  /* ---------- CTA ---------- */
  function CTASection({
    onContact
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '24px 28px 88px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--radius-2xl)',
        background: 'var(--c-ink)',
        border: '1px solid rgba(255,255,255,0.08)',
        padding: '64px 56px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "cop-lightfield cop-lf--horizon cop-lf--alive",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 40,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 600
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 38,
        letterSpacing: '-0.02em',
        color: '#fff',
        margin: '0 0 14px'
      }
    }, "See more. Sell more. Operate smarter."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.6,
        color: 'rgba(255,255,255,0.8)',
        margin: 0
      }
    }, "Start with a Reality Audit. We\u2019ll surface what\u2019s hidden across your three M\u2019s in 14 days.")), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 17
      }),
      onClick: onContact
    }, "Book a session")))));
  }
  Object.assign(window, {
    Hero,
    ThreeM,
    ServiceLines,
    AimFramework,
    ProofBand,
    CTASection
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
/* Celebration OnPoint — Website chrome: Header + Footer
   Exposes window.SiteHeader, window.SiteFooter */
(function () {
  const {
    Button,
    IconButton
  } = window.CelebrationOnPointDesignSystem_2fb49a;
  const Icon = window.Icon;
  const NAV = ['Services', 'The Three M’s', 'Approach', 'Insights'];
  function SiteHeader({
    onContact
  }) {
    const [open, setOpen] = React.useState(false);
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 40,
        background: 'rgba(10,8,20,0.78)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 28px',
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-mark.png",
      alt: "Celebration OnPoint",
      style: {
        height: 40
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        lineHeight: 1,
        color: '#fff',
        letterSpacing: '-0.01em'
      }
    }, "Celebration", /*#__PURE__*/React.createElement("br", null), "OnPoint")), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 28
      },
      className: "cop-nav"
    }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
      key: n,
      href: "#",
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        fontWeight: 500,
        color: 'rgba(255,255,255,0.72)',
        textDecoration: 'none'
      },
      onMouseEnter: e => e.currentTarget.style.color = '#fff',
      onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'
    }, n))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 15
      }),
      onClick: onContact
    }, "Book a session"))));
  }
  function SiteFooter() {
    const cols = [['Services', ['Technology & Infrastructure', 'Growth & Workforce', 'Mission Strategy & Readiness']], ['Company', ['About', 'The Three M’s', 'Insights', 'Careers']], ['Family of brands', ['OnPoint Sky Solutions']], ['Connect', ['Book a session', 'hello@celebrationonpoint.com', 'LinkedIn']]];
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--c-ink)',
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "cop-lightfield cop-lf--spotlight",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '56px 28px 36px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-mark.png",
      alt: "",
      style: {
        height: 38
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        color: '#fff',
        lineHeight: 1
      }
    }, "Celebration", /*#__PURE__*/React.createElement("br", null), "OnPoint")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13.5,
        lineHeight: 1.6,
        color: 'rgba(255,255,255,0.5)',
        maxWidth: 280
      }
    }, "Build asymmetric advantage by turning hidden reality into visible, actionable momentum.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
      key: h
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--c-gold)',
        marginBottom: 16
      }
    }, h), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, items.map(it => /*#__PURE__*/React.createElement("li", {
      key: it
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: 13.5,
        color: 'rgba(255,255,255,0.62)',
        textDecoration: 'none'
      }
    }, it))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 44,
        paddingTop: 22,
        borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'var(--font-mono)',
        fontSize: 11.5,
        color: 'rgba(255,255,255,0.4)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Celebration OnPoint"), /*#__PURE__*/React.createElement("span", null, "See more \xB7 Sell more \xB7 Operate smarter"))));
  }
  window.SiteHeader = SiteHeader;
  window.SiteFooter = SiteFooter;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.PillarCard = __ds_scope.PillarCard;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

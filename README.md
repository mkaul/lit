# Lit
* see [lit.dev](https://lit.dev/)
* see [Lit 2.0 Release Livestream](https://www.youtube.com/watch?v=nfb779XIhsU)
* see [Lit Beta Launch Event](https://www.youtube.com/watch?v=f1j7b696L-E)

# Lit Packager
* Package lit into an [ES6 module](https://mkaul.github.io/lit/lib/lit.js), that can be imported by the browser directly:
```html
<script type="module">
  import {html, render, repeat} from "https://mkaul.github.io/lit/lib/lit.js";
</script>
```
* complete export list:
```javascript
export { Animate, AnimateController, 
  CSSResult, INTERNAL, LitElement, 
  Position, ReactiveElement, Task, 
  TaskStatus, UpdatingElement, 
  _$LE, _$LH, adoptStyles, 
  animate, animationFrame, 
  asyncAppend, asyncReplace, 
  cache, controllerMap, css, 
  defaultConverter, 
  defaultCssProperties, 
  defaultKeyframeOptions, fade, 
  fadeIn, fadeInSlow, fadeOut, 
  flyAbove, flyBelow, flyLeft, 
  flyRight, getCompatibleStyle, 
  guard, html, ifDefined, initialState, 
  live, noChange, none, notEqual, 
  nothing, position, ref, render, 
  repeat, supportsAdoptingStyleSheets, 
  svg, transformProps, unsafeCSS, 
  unsafeHTML, unsafeSVG, until };
```

# Build via Rollup
```shell
npm i
rollup -c
```

# Rollup Input
```javascript
export * from 'lit';
export * from '@lit-labs/motion'
export * from '@lit-labs/task'
export {repeat} from 'lit/directives/repeat.js';
export {unsafeHTML} from 'lit/directives/unsafe-html.js';
export {unsafeSVG} from 'lit/directives/unsafe-svg.js';
export {cache} from 'lit/directives/cache.js';
export {guard} from 'lit/directives/guard.js';
export {live} from 'lit/directives/live.js';
export {ifDefined} from 'lit/directives/if-defined.js';
export {ref} from 'lit/directives/ref.js';
export {until} from 'lit/directives/until.js';
export {asyncAppend} from 'lit/directives/async-append.js';
export {asyncReplace} from 'lit/directives/async-replace.js';
```

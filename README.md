# Alpine.js SSR
## Dead simple server-side-rendering for Alpine.js

Alpine.js SSR allows you to server-side-render (SSR) your Alpine components in lightweight and dead-simple way. No need to set-up a Puppeteer-server, just import the module and off you go. After server-side-rendering your components stay fully hydratable and interactive!

## Why?
I love the simplicity and power of Alpine.js, but was missing the option of server-side rendering for SEO and robustness. There were no SSR options available for Alpine.js, so I built my own.

## How to?

First install the package from npm:
```
npm install alpinejs-ssr
```
Import the module and call the `compile` function:
```js
import {compile} from alpinejs-ssr

const html = `your Alpine.js html`
const data = {"your":"data"}

compile(html, data);
```
Check out example.js for a full demo

Supports most attributes that make sense in a server context:
`x-text`, `x-html`,`x-for`,`:src`,`:id`

Let me know if you're missing any. `x-if` has not been implemented for SSR, because it would break interactivity on the client-side if the server would remove those blocks.

## Press the :star: button
Don't forget to press the :star: button to let me know I should continue improving this project.



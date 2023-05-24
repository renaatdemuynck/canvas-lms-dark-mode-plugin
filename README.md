# Canvas LMS Course Gradebook Disclaimer Plug-in

Plugin for the [Canvas LMS theme app](https://github.com/artevelde-uas/canvas-lms-app) that adds dark mode to Canvas.

| DISCLAIMER: THIS PLUG-IN IS HIGHLY EXPERIMENTAL, USE AT YOUR OWN RISK |
| --------------------------------------------------------------------- |

_Although I have not found any real issues, it has not been thoroughly tested. If you find a problem with the dark mode theme, please post an issue._

## Installation

Using NPM:

    npm install @renaatdemuynck/canvas-lms-dark-mode-plugin

Using Yarn:

    yarn add @renaatdemuynck/canvas-lms-dark-mode-plugin

## Usage

Just import the plug-in and add it to the Canvas app:

```javascript
import { run, addPlugin } from '@artevelde-uas/canvas-lms-app';
import darkModePlugin from '@renaatdemuynck/canvas-lms-dark-mode-plugin';

addPlugin(darkModePlugin);

run();
```

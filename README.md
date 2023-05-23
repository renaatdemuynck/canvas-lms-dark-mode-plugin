# Canvas LMS Course Gradebook Disclaimer Plug-in

Plugin for the [Canvas LMS theme app](https://github.com/artevelde-uas/canvas-lms-app) that adds dark mode to Canvas.

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

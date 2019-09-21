import { addDecorator, configure, addParameters } from '@storybook/react';
import { initializeRTL } from 'storybook-addon-rtl';
import centered from "@storybook/addon-centered/react";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import './style.less';
// automatically import all files ending in *.stories.tsx
const req = require.context('../src/stories', true, /\.stories\.tsx$/);
initializeRTL();
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

initializeRTL();
addDecorator(centered);
addParameters({ viewport: { viewports: INITIAL_VIEWPORTS } });

configure(loadStories, module);

import React from 'react'

import { Preview } from '@storybook/react'

import { MantineProvider } from '@mantine/core'
import { theme } from '../src/styles/Mantine/mantine.theme'
// import '../src/index.scss'

const preview = {
  decorators: [
    (Story) => (
      <MantineProvider
        withCSSVariables
        withGlobalStyles
        withNormalizeCSS
        theme={theme}
      >
        <Story />
      </MantineProvider>
    ),
  ],
}

export default preview

// import type { Preview } from '@storybook/react';

// const preview: Preview = {
//   parameters: {
//     actions: { argTypesRegex: '^on[A-Z].*' },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },
// };

// export default preview;

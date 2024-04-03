'use client';

import React, { useRef, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleRegistry, createStyleRegistry } from 'styled-jsx';
// @ts-ignore
import { AppRegistry } from 'react-native-web';
import { flush } from '@gluestack-ui/themed';
// eslint-disable-next-line @next/next/no-document-import-in-page
import { Main } from 'next/document';

export const StyledJsxRegistry = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [jsxStyleRegistry] = useState(() => createStyleRegistry());
  const isServerInserted = useRef(false);

  useServerInsertedHTML(() => {
    AppRegistry.registerComponent('Main', () => Main);
    const { getStyleElement } = AppRegistry.getApplication('Main');
    if (!isServerInserted.current) {
      isServerInserted.current = true;
      const styles = [getStyleElement(), jsxStyleRegistry.styles(), ...flush()];
      jsxStyleRegistry.flush();
      return <>{styles}</>;
    }
  });

  return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>;
};

export default StyledJsxRegistry;

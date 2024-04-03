import { RenderOptions, render } from '@testing-library/react';
import { PropsWithChildren, ReactElement } from 'react';
import { Provider } from 'react-redux';

import { AppStore, RootState, reduxStore } from '@/redux/store';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@/config/gluestack-ui.config';
import { Providers } from '@/app/providers';
import StyledJsxRegistry from '../registry';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState = {},
    store = reduxStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </GluestackUIProvider>
    </Provider>
  );

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

import React, { ReactNode } from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

interface CustomComponentProps {
  children: ReactNode;
}

export function TestWrapper({ children }: CustomComponentProps) {
  return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>;
}

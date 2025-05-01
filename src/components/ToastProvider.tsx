// components/toast-provider.tsx
"use client";

import { Toaster } from "sonner";

export function ToastProvider() {
  return <Toaster duration={1000} position="top-right" richColors />;
}

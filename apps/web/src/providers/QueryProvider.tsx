'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const defaultQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes - don't refetch when returning to the page
    },
  },
})

type QueryProviderProps = { children: React.ReactNode }

export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={defaultQueryClient}>{children}</QueryClientProvider>
  )
}

export default QueryProvider

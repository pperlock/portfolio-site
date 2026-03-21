'use client'

import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const defaultQueryOptions = {
  queries: {
    staleTime: 5 * 60 * 1000, // 5 minutes - don't refetch when returning to the page
  },
} as const

function makeQueryClient() {
  return new QueryClient({ defaultOptions: defaultQueryOptions })
}

type QueryProviderProps = { children: React.ReactNode }

export function QueryProvider({ children }: QueryProviderProps) {
  const [queryClient] = useState(makeQueryClient)
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryProvider

import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    // Join query key
    const url = queryKey.join("/") as string;
    
    // In development, use regular API endpoints (Express server)
    // In production, append .json for static file serving (Firebase Hosting)
    const isDevelopment = import.meta.env.DEV || window.location.hostname === 'localhost';
    const finalUrl = isDevelopment 
      ? url 
      : (url.endsWith(".json") ? url : `${url}.json`);
    
    const res = await fetch(finalUrl, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false, // Don't refetch if data exists in cache
      staleTime: Infinity, // Data never becomes stale (static content)
      retry: false,
      // Enable parallel queries for faster loading
      gcTime: 1000 * 60 * 60 * 24, // 24 hours (formerly cacheTime)
      // Network mode: prefer cache, fallback to network
      networkMode: 'offlineFirst',
    },
    mutations: {
      retry: false,
    },
  },
});

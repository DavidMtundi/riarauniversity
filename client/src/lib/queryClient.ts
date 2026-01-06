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
    // In production, try both .json and without .json for static file serving
    const isDevelopment = import.meta.env.DEV || window.location.hostname === 'localhost';
    
    let finalUrl = url;
    if (!isDevelopment && !url.endsWith(".json")) {
      finalUrl = `${url}.json`;
    }
    
    let res = await fetch(finalUrl, {
      credentials: "include",
    });

    // If 404 and in production, try without .json extension
    if (!res.ok && res.status === 404 && !isDevelopment && finalUrl.endsWith(".json")) {
      const urlWithoutJson = url;
      res = await fetch(urlWithoutJson, {
        credentials: "include",
      });
    }

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    // Handle 403 Forbidden - might be a static file serving issue
    if (res.status === 403) {
      // Try alternative URL patterns
      if (!finalUrl.endsWith(".json")) {
        const jsonUrl = `${finalUrl}.json`;
        const jsonRes = await fetch(jsonUrl, { credentials: "include" });
        if (jsonRes.ok) {
          return await jsonRes.json();
        }
      }
      throw new Error(`403: Forbidden - Unable to access ${finalUrl}. Please check server configuration.`);
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

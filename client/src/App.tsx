import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Lazy load route components for code splitting
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Academics = lazy(() => import("@/pages/Academics"));
const Research = lazy(() => import("@/pages/Research"));
const CampusLife = lazy(() => import("@/pages/CampusLife"));
const Admission = lazy(() => import("@/pages/Admission"));
const News = lazy(() => import("@/pages/News"));
const Events = lazy(() => import("@/pages/Events"));
const Careers = lazy(() => import("@/pages/Careers"));
const HealthCare = lazy(() => import("@/pages/HealthCare"));
const Athletics = lazy(() => import("@/pages/Athletics"));
const Arts = lazy(() => import("@/pages/Arts"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/academics" component={Academics} />
        <Route path="/research" component={Research} />
        <Route path="/campus-life" component={CampusLife} />
        <Route path="/admission" component={Admission} />
        <Route path="/news" component={News} />
        <Route path="/events" component={Events} />
        <Route path="/careers" component={Careers} />
        <Route path="/healthcare" component={HealthCare} />
        <Route path="/athletics" component={Athletics} />
        <Route path="/arts" component={Arts} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

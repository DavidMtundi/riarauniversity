import { Switch, Route, useLocation } from "wouter";
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
const NewsAndEvents = lazy(() => import("@/pages/NewsAndEvents"));
const ArticleDetail = lazy(() => import("@/pages/ArticleDetail"));
const Events = lazy(() => import("@/pages/Events"));
const EventDetail = lazy(() => import("@/pages/EventDetail"));
const Careers = lazy(() => import("@/pages/Careers"));
const CareerDetail = lazy(() => import("@/pages/CareerDetail"));
const HealthCare = lazy(() => import("@/pages/HealthCare"));
const Athletics = lazy(() => import("@/pages/Athletics"));
const Arts = lazy(() => import("@/pages/Arts"));
const Partners = lazy(() => import("@/pages/Partners"));
const Leadership = lazy(() => import("@/pages/Leadership"));
const History = lazy(() => import("@/pages/History"));
const Founders = lazy(() => import("@/pages/Founders"));
const Alumni = lazy(() => import("@/pages/Alumni"));
const Courses = lazy(() => import("@/pages/Courses"));
const QualityAssurance = lazy(() => import("@/pages/QualityAssurance"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Redirect component
function Redirect({ to }: { to: string }) {
  const [, setLocation] = useLocation();
  setLocation(to);
  return null;
}

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
        <Route path="/news/:id" component={ArticleDetail} />
        <Route path="/events/:id" component={EventDetail} />
        <Route path="/news-events" component={NewsAndEvents} />
        <Route path="/news-and-events" component={NewsAndEvents} />
        {/* Redirect old routes to combined page */}
        <Route path="/news">
          {() => <Redirect to="/news-events" />}
        </Route>
        <Route path="/events">
          {() => <Redirect to="/news-events" />}
        </Route>
        <Route path="/careers/:id" component={CareerDetail} />
        <Route path="/careers" component={Careers} />
        <Route path="/healthcare" component={HealthCare} />
        <Route path="/athletics" component={Athletics} />
        <Route path="/arts" component={Arts} />
        <Route path="/partners" component={Partners} />
        <Route path="/leadership" component={Leadership} />
        <Route path="/history" component={History} />
        <Route path="/founders" component={Founders} />
        <Route path="/alumni" component={Alumni} />
        <Route path="/courses" component={Courses} />
        <Route path="/quality-assurance" component={QualityAssurance} />
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

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Academics from "@/pages/Academics";
import Research from "@/pages/Research";
import CampusLife from "@/pages/CampusLife";
import Admission from "@/pages/Admission";
import News from "@/pages/News";
import Events from "@/pages/Events";
import HealthCare from "@/pages/HealthCare";
import Athletics from "@/pages/Athletics";
import Arts from "@/pages/Arts";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/academics" component={Academics} />
      <Route path="/research" component={Research} />
      <Route path="/campus-life" component={CampusLife} />
      <Route path="/admission" component={Admission} />
      <Route path="/news" component={News} />
      <Route path="/events" component={Events} />
      <Route path="/healthcare" component={HealthCare} />
      <Route path="/athletics" component={Athletics} />
      <Route path="/arts" component={Arts} />
      <Route component={NotFound} />
    </Switch>
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

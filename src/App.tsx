import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudy from "./pages/CaseStudy";
import AllCaseStudies from "./pages/AllCaseStudies";
import Services from "./pages/Services";
import NGOSolutions from "./pages/solutions/NGOSolutions";
import IndiaPage from "./pages/solutions/ngo/IndiaPage";
import GulfPage from "./pages/solutions/ngo/GulfPage";
import USAPage from "./pages/solutions/ngo/USAPage";
import UKPage from "./pages/solutions/ngo/UKPage";
import SwitzerlandPage from "./pages/solutions/ngo/SwitzerlandPage";
import AustraliaPage from "./pages/solutions/ngo/AustraliaPage";
import NewZealandPage from "./pages/solutions/ngo/NewZealandPage";
import PolandPage from "./pages/solutions/ngo/PolandPage";
import RussiaPage from "./pages/solutions/ngo/RussiaPage";
import IranPage from "./pages/solutions/ngo/IranPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
          <Route path="/case-studies" element={<AllCaseStudies />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions/ngo" element={<NGOSolutions />} />
          <Route path="/solutions/ngo/india" element={<IndiaPage />} />
          <Route path="/solutions/ngo/gulf" element={<GulfPage />} />
          <Route path="/solutions/ngo/usa" element={<USAPage />} />
          <Route path="/solutions/ngo/uk" element={<UKPage />} />
          <Route path="/solutions/ngo/switzerland" element={<SwitzerlandPage />} />
          <Route path="/solutions/ngo/australia" element={<AustraliaPage />} />
          <Route path="/solutions/ngo/new-zealand" element={<NewZealandPage />} />
          <Route path="/solutions/ngo/poland" element={<PolandPage />} />
          <Route path="/solutions/ngo/russia" element={<RussiaPage />} />
          <Route path="/solutions/ngo/iran" element={<IranPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

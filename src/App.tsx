
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { HelmetProvider } from 'react-helmet-async';
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { ProgressBar } from "./components/ui/progress-bar";

import Index from "./pages/Index";
import About from "./pages/About";
import Technologies from "./pages/Technologies";
import Gallery from "./pages/Gallery";
import Licenses from "./pages/Licenses";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

const queryClient = new QueryClient();

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/about" element={<About />} />
    <Route path="/technologies" element={<Technologies />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/licenses" element={<Licenses />} />
    <Route path="/news" element={<News />} />
    <Route path="/news/:slug" element={<NewsDetail />} />
    <Route path="/team" element={<Team />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/auth" element={<Auth />} />
    <Route 
      path="/profile" 
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <HelmetProvider>
          <BrowserRouter>
            <ScrollToTop />
            <AuthProvider>
              <ProgressBar />
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow pt-20">
                  <AppRoutes />
                </main>
                <Footer />
              </div>
            </AuthProvider>
            <Toaster />
            <Sonner />
          </BrowserRouter>
        </HelmetProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

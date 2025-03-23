
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";

import Index from "./pages/Index";
import About from "./pages/About";
import Technologies from "./pages/Technologies";
import Gallery from "./pages/Gallery";
import Licenses from "./pages/Licenses";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import AdminLogin from "./pages/AdminLogin";
import AdminNews from "./pages/AdminNews";
import NotFound from "./pages/NotFound";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

const queryClient = new QueryClient();

// Progress bar for page transitions
const PageProgressBar = () => {
  useEffect(() => {
    const startProgress = () => {
      const progress = document.getElementById("nprogress");
      if (progress) return;
      
      const bar = document.createElement("div");
      bar.id = "nprogress";
      bar.innerHTML = '<div class="bar"><div class="peg"></div></div>';
      document.body.appendChild(bar);
      
      setTimeout(() => {
        const element = document.getElementById("nprogress");
        if (element) element.remove();
      }, 500);
    };
    
    window.addEventListener("beforeunload", startProgress);
    return () => window.removeEventListener("beforeunload", startProgress);
  }, []);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <PageProgressBar />
          <BrowserRouter>
            <Routes>
              {/* Admin Routes */}
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admnews" element={<AdminNews />} />
              
              {/* Public Routes with Header and Footer */}
              <Route path="/" element={
                <div className="flex flex-col min-h-screen">
                  <Header />
                  <main className="flex-grow pt-20">
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/technologies" element={<Technologies />} />
                      <Route path="/news" element={<News />} />
                      <Route path="/news/:id" element={<NewsDetail />} />
                      <Route path="/gallery" element={<Gallery />} />
                      <Route path="/licenses" element={<Licenses />} />
                      <Route path="/team" element={<Team />} />
                      <Route path="/careers" element={<Careers />} />
                      <Route path="/faq" element={<FAQ />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              } />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

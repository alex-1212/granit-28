import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { HelmetProvider } from 'react-helmet-async';
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { useEffect } from "react";
import { ScrollToTop } from "./components/layout/ScrollToTop";

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

// Создаем и конфигурируем QueryClient с улучшенными настройками
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // Данные считаются свежими в течение 5 минут
      cacheTime: 15 * 60 * 1000, // Хранение данных в кэше 15 минут
      refetchOnWindowFocus: false, // Предотвращаем обновление при фокусе окна
      retry: 1, // Делаем только одну повторную попытку запроса при ошибке
    },
  },
});

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
            <PageProgressBar />
          </BrowserRouter>
        </HelmetProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

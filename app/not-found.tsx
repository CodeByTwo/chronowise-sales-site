import Link from "next/link";
import { Navbar, Footer } from "@/components/marketing";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center px-6">
          <div className="mb-8">
            <span className="text-8xl font-serif text-gold-gradient">404</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
            Page not found
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <Button className="bg-gold hover:bg-gold-light text-background font-medium tracking-wider px-6 h-12 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
              <ArrowLeft size={16} className="mr-2" />
              Return Home
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}

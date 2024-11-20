import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ModeToggle } from "../components/mode-toggle";
import styles from "../styles/Home.module.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className="container flex items-center justify-between h-16 mx-auto px-4">
          <h1 className="text-xl font-bold">Your App</h1>
          <ModeToggle />
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-foreground">Welcome to</span>
            <span className="block text-primary">Your Platform</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
            Start your journey with us today and discover amazing possibilities.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button
              size="lg"
              onClick={() => navigate("/register")}
              className="w-full sm:w-auto"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/login")}
              className="w-full sm:w-auto"
            >
              Log in
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

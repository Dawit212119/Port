"use client";

import React from "react";

export const dynamic = "force-dynamic";
// @ts-nocheck
/* eslint-disable react/react-in-jsx-scope */
import nextDynamic from "next/dynamic";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
const GitHubActivityFeed = nextDynamic(() => import("../components/GitHubActivityFeed"), { ssr: false });
const GitHubContributionGraph = nextDynamic(() => import("../components/GitHubContributionGraph"), { ssr: false });
const Chatbot = nextDynamic(() => import("../components/Chatbot"), { ssr: false });

export default function HomePage() {
  return (
    <main className="relative overflow-hidden" id="top">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <TestimonialsSection />
      <GitHubActivityFeed />
      <GitHubContributionGraph />
      <ContactSection />
      <BlogSection />
      <Footer />
      <Chatbot />
    </main>
  );
}

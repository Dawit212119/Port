"use client";

import React from "react";

export const dynamic = "force-dynamic";
// @ts-nocheck
/* eslint-disable react/react-in-jsx-scope */
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import NowSection from "../components/NowSection";
import GitHubActivityFeed from "../components/GitHubActivityFeed";
import GitHubContributionGraph from "../components/GitHubContributionGraph";
import Chatbot from "../components/Chatbot";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden" id="top">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <TestimonialsSection />
      {/* <NowSection /> */}
      <GitHubActivityFeed />
      <GitHubContributionGraph />
      <ContactSection />
      <BlogSection />
      <Footer />
      <Chatbot />
    </main>
  );
}

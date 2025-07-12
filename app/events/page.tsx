"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Calendar, Menu, X, Mic, Instagram } from "lucide-react";
import ScrollFloat from "../../components/ScrollFloat";
import VariableProximity from "../../components/VariableProximity";
import { Navbar, NavBody, NavItems, NavbarLogo, MobileNav, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "../../components/ui/resizable-navbar";
import Image from "next/image";
import Folder from '@/components/Folder';
import { Badge } from "@/components/ui/badge";
import '../../styles/flip-cards.css';
import '../../styles/event-cards.css';

const SPONSORS_DATA = [
  {
    name: "SRS APPLIANCE",
    logo: "/placeholder-logo.png",
    description: "Leading technology solutions provider",
    tier: "Platinum Sponsor"
  },
  {
    name: "SGR 777",
    logo: "/placeholder-logo.png",
    description: "Digital media and broadcasting experts",
    tier: "Gold Sponsor"
  },
  {
    name: "AudioTech",
    logo: "/placeholder-logo.png",
    description: "Professional audio equipment manufacturer",
    tier: "Silver Sponsor"
  },
  {
    name: "AudioTech",
    logo: "/placeholder-logo.png",
    description: "Professional audio equipment manufacturer",
    tier: "Silver Sponsor"
  }
];

const ClockInput = () => (
  <div className="clock-input">
    <input type="radio" id="v1" name="radio" defaultChecked />
    <input type="radio" id="v2" name="radio" />
    <input type="radio" id="v3" name="radio" />
    <input type="radio" id="v4" name="radio" />
    <input type="radio" id="v5" name="radio" />
    <input type="radio" id="v6" name="radio" />
    <label htmlFor="v1" id="l1"></label>
    <label htmlFor="v2" id="l2"></label>
    <label htmlFor="v3" id="l3"></label>
    <label htmlFor="v4" id="l4"></label>
    <label htmlFor="v5" id="l5"></label>
    <label htmlFor="v6" id="l6"></label>
    <div className="dial"></div>
    <div className="notches">
      <div className="notch" style={{ ['--n' as any]: 1 }}></div>
      <div className="notch" style={{ ['--n' as any]: 2 }}></div>
      <div className="notch" style={{ ['--n' as any]: 3 }}></div>
      <div className="notch" style={{ ['--n' as any]: 4 }}></div>
      <div className="notch" style={{ ['--n' as any]: 5 }}></div>
      <div className="notch" style={{ ['--n' as any]: 6 }}></div>
    </div>
  </div>
);

const EventsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const eventsRef = useRef<HTMLDivElement>(null);
  const eventsTextRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const events = [
    {
      title: "RJ Battle Championship",
      date: "March 15, 2024",
      time: "6:00 PM",
      description: "Annual competition to find VIT's next radio star",
    },
    {
      title: "Open Mic Night",
      date: "March 22, 2024",
      time: "7:30 PM",
      description: "Share your voice, stories, and talents with the community",
    },
    {
      title: "Podcast Workshop",
      date: "March 29, 2024",
      time: "4:00 PM",
      description: "Learn the art of podcasting from industry professionals",
    },
  ];

  const teamMembers = [
    // Core Team (These are dummy entries for image paths, actual team members are not relevant here)
    { image: "/team/magic1.jpg" },
    { image: "/team/dare1.jpg" },
    { image: "/team/exit1.jpg" },
  ];

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/#about" },
    { name: "Team", link: "/#team" },
    { name: "Recruitment", link: "/recruitment" },
    { name: "Podcasts", link: "/podcasts" },
    { name: "Events", link: "/events" },
  ];

  return (
    <div className="min-h-screen relative">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </MobileNavHeader>
            <MobileNavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-nav-link-${idx}`}
                  href={item.link}
                  className="block px-3 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </MobileNavMenu>
          </MobileNav>
        </NavBody>
      </Navbar>

      <section id="events" className="pt-16 py-20 bg-primary-bg/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-4xl font-bold text-text-primary"
              scrollContainerRef={scrollContainerRef}
            >
              Upcoming Events
            </ScrollFloat>
            <p className="text-xl text-text-secondary mt-4">
              <VariableProximity
                label="Don't miss out on our exciting lineup of events and workshops"
                className="text-xl text-text-secondary"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={eventsTextRef as React.RefObject<HTMLElement>}
                radius={100}
                falloff="linear"
              />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {events.map((event, index) => (
              <div key={index} className="card">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
                </svg>
                <div className="card__content">
                  <p className="card__title">{event.title}</p>
                  <p className="card__description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-32 bg-neutral-dark">
        <div className="container mx-auto px-4">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="text-4xl font-bold text-center mb-48 text-white"
            scrollContainerRef={scrollContainerRef}
          >
            Past Events
          </ScrollFloat>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-3 justify-items-center mt-32">
            {[{
                title: "Radio Workshop 2023",
                date: "December 15, 2023",
                description: "A comprehensive workshop on radio broadcasting techniques and equipment handling.",
                highlights: "150+ participants, 8 industry experts"
              },
              {
                title: "Voice IT Annual Show",
                date: "October 20, 2023",
                description: "Our annual showcase featuring the best of campus radio and entertainment.",
                highlights: "Live performances, Guest RJs"
              },
              {
                title: "Podcast Masterclass",
                date: "August 5, 2023",
                description: "Learn podcasting fundamentals from industry professionals.",
                highlights: "Audio editing, Content strategy"
              },
              {
                title: "Open Mic Night",
                date: "July 12, 2023",
                description: "Students showcase their talents in a supportive environment.",
                highlights: "50+ performers, Live audience"
              },
              {
                title: "RJ Battle Championship",
                date: "June 25, 2023",
                description: "Competition to find VIT's next radio star with exciting prizes.",
                highlights: "25 contestants, 3 winners"
              },
              {
                title: "Music Festival",
                date: "May 18, 2023",
                description: "A day filled with live music performances and entertainment.",
                highlights: "10 bands, 500+ attendees"
              },
              {
                title: "Tech Talk Series",
                date: "April 8, 2023",
                description: "Educational sessions on broadcasting technology and trends.",
                highlights: "Expert speakers, Q&A sessions"
              },
              {
                title: "Cultural Night",
                date: "March 22, 2023",
                description: "Celebrating diversity through music, dance, and cultural performances.",
                highlights: "Multi-cultural, Traditional arts"
              },
              {
                title: "Alumni Meet",
                date: "February 14, 2023",
                description: "Reconnecting with Voice IT alumni and networking opportunities.",
                highlights: "50+ alumni, Career guidance"
              }
            ].map((event, index) => (
              <div key={index} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p className="title">{event.title}</p>
                    <p>{event.date}</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="title">{event.title}</p>
                    <p>{event.description}</p>
                    <p className="mt-2 text-sm">{event.highlights}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <a 
              href="https://www.instagram.com/voiceit_vitcc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-orange to-accent-warm text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-accent-warm hover:to-accent-orange group"
            >
              <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>View More Past Events</span>
              <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <p className="mt-4 text-text-secondary text-sm">Follow us on Instagram for more exciting events and updates!</p>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-primary-bg/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-accent-orange to-accent-warm shadow-lg">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="#fff"/></svg>
              </span>
            </div>
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-4xl font-bold text-text-primary"
              scrollContainerRef={scrollContainerRef}
            >
              Our Sponsors
            </ScrollFloat>
            <p className="text-xl text-text-secondary mt-4">
              <VariableProximity
                label="Proudly supported by industry leaders who believe in the power of student voices"
                className="text-xl text-text-secondary"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={eventsTextRef as React.RefObject<HTMLElement>}
                radius={100}
                falloff="linear"
              />
            </p>
          </div>

          {/* Sponsors Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {[
              {
                name: "TechCorp Industries",
                description: "Leading technology solutions provider supporting student innovation and creativity.",
                tier: "Platinum Sponsor",
                logo: "/placeholder-logo.png"
              },
              {
                name: "MediaFlow Studios",
                description: "Professional audio and broadcasting equipment for the next generation of content creators.",
                tier: "Gold Sponsor",
                logo: "/placeholder-logo.png"
              },
              {
                name: "Campus Connect",
                description: "Connecting students with industry opportunities and professional development resources.",
                tier: "Silver Sponsor",
                logo: "/placeholder-logo.png"
              }
            ].map((sponsor, index) => (
              <div key={index} className="sponsor-card">
                <div className="sponsor-card__logo">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name + ' logo'}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
                <div className="sponsor-card__content">
                  <h3 className="sponsor-card__title">{sponsor.name}</h3>
                  <p className="sponsor-card__description">{sponsor.description}</p>
                  <div className="sponsor-card__tier">{sponsor.tier}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-accent-orange hover:bg-accent-orange/90 text-white px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-accent-orange/25">
              Become a Sponsor
            </Button>
            <p className="mt-4 text-text-secondary text-sm">
              Interested in supporting student initiatives? Get in touch with us!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
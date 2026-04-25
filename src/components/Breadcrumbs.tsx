"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  items: {
    name: string;
    href?: string;
  }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em]">
        <li className="flex items-center">
          <Link 
            href="/" 
            className="text-foreground/40 hover:text-gold transition-colors flex items-center gap-2"
          >
            <Home size={12} />
            <span>Home</span>
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight size={10} className="text-foreground/20" />
            {item.href ? (
              <Link 
                href={item.href} 
                className="text-foreground/40 hover:text-gold transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-gold font-bold">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

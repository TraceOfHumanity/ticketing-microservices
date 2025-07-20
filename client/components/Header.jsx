import React from "react";
import Link from "next/link";

export const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: "Sign Up", href: "/auth/signup" },
    !currentUser && { label: "Sign In", href: "/auth/signin" },
    currentUser && { label: "Sign Out", href: "/auth/signout" },
  ].filter(Boolean).map(({ label, href }) => {
    return (
      <li key={href}>
        <Link href={href}>{label}</Link>
      </li>
    );
  });

  return (
    <nav className="flex justify-between">
      <Link href="/">Ticketing</Link>
      <div className="flex items-center">
        <ul>{links}</ul>
      </div>
    </nav>
  );
};

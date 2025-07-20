import React from "react";
import Link from "next/link";

export const Header = ({ currentUser }) => {
  return (
    <nav>
      <Link href="/">Ticketing</Link>
      <div className="flex items-center">
        {currentUser ? "Sign Out" : "Sign In"}
      </div>
    </nav>
  );
};

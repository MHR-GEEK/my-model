import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
    <header className="py-6 text-center">
      <h1 className="text-4xl font-bold tracking-wider">My Fashion Portfolio</h1>
    </header>

    <main className="container mx-auto px-4 py-8">{children}</main>

    <footer className="py-6 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} – All Rights Reserved
    </footer>
  </div>
);

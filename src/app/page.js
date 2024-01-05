"use client"
import React from 'react';
import { Board } from './components/board';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Board />
    </main>
  );
}

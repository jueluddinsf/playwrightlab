'use client';

import { useState, useEffect } from 'react';

interface Bug {
  id: number;
  x: number;
  y: number;
  speed: number;
  direction: number;
  squashed: boolean;
  falling: boolean;
}

export default function BugSquasher() {
  const [bugs, setBugs] = useState<Bug[]>([]);
  const [score, setScore] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Spawn bugs randomly - fewer on mobile
    const maxBugs = isMobile ? 3 : 5;
    const spawnInterval = setInterval(() => {
      if (bugs.length < maxBugs) {
        const newBug: Bug = {
          id: Date.now(),
          x: Math.random() * 90, // 0-90% to keep bugs on screen
          y: Math.random() * 80, // 0-80% to keep bugs visible
          speed: 0.045 + Math.random() * 0.105, // Random speed (70% slower)
          direction: Math.random() * 360, // Random direction in degrees
          squashed: false,
          falling: false,
        };
        setBugs(prev => [...prev, newBug]);
      }
    }, 3000); // Spawn new bug every 3 seconds

    return () => clearInterval(spawnInterval);
  }, [bugs.length, isMobile]);

  useEffect(() => {
    // Animate bugs crawling
    const animationInterval = setInterval(() => {
      setBugs(prev =>
        prev.map(bug => {
          if (bug.squashed || bug.falling) return bug;

          // Calculate new position based on direction
          const radians = (bug.direction * Math.PI) / 180;
          let newX = bug.x + Math.cos(radians) * bug.speed;
          let newY = bug.y + Math.sin(radians) * bug.speed;

          // Bounce off edges
          let newDirection = bug.direction;
          if (newX < 0 || newX > 95) {
            newDirection = 180 - bug.direction;
            newX = Math.max(0, Math.min(95, newX));
          }
          if (newY < 0 || newY > 85) {
            newDirection = 360 - bug.direction;
            newY = Math.max(0, Math.min(85, newY));
          }

          return {
            ...bug,
            x: newX,
            y: newY,
            direction: newDirection,
          };
        })
      );
    }, 50);

    return () => clearInterval(animationInterval);
  }, []);

  const squashBug = (bugId: number) => {
    setBugs(prev =>
      prev.map(bug =>
        bug.id === bugId ? { ...bug, squashed: true, falling: true } : bug
      )
    );
    setScore(prev => prev + 1);

    // Remove bug after 5 seconds
    setTimeout(() => {
      setBugs(prev => prev.filter(bug => bug.id !== bugId));
    }, 5000);
  };

  return (
    <>
      {/* Score counter - Responsive positioning */}
      <div className="fixed top-20 right-3 sm:top-24 sm:right-6 z-50 bg-playwright/20 backdrop-blur-sm border border-playwright/30 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2">
        <div className="text-xs sm:text-sm text-playwright/70">Bugs Squashed</div>
        <div className="text-xl sm:text-2xl font-bold text-playwright">{score}</div>
      </div>

      {/* Bugs */}
      {bugs.map(bug => (
        <div
          key={bug.id}
          onClick={() => !bug.squashed && squashBug(bug.id)}
          onTouchEnd={(e) => {
            e.preventDefault();
            if (!bug.squashed) squashBug(bug.id);
          }}
          className={`fixed z-40 cursor-pointer touch-none select-none transition-all duration-100 ${
            bug.falling ? 'animate-fall' : ''
          }`}
          style={{
            left: `${bug.x}%`,
            top: bug.falling ? '100%' : `${bug.y}%`,
            transform: bug.squashed
              ? 'scale(1.2) rotate(0deg)'
              : `rotate(${bug.direction}deg)`,
            transition: bug.falling
              ? 'top 2s ease-in, opacity 3s ease-out'
              : 'left 0.05s linear, top 0.05s linear',
            opacity: bug.falling ? 0 : 1,
          }}
        >
          {bug.squashed ? (
            // Squashed bug - Responsive size
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 text-5xl sm:text-6xl">💥</div>
          ) : (
            // Live cockroach - Responsive size with larger tap target
            <div className="relative group">
              <div className="text-4xl sm:text-5xl active:scale-90 transition-transform animate-crawl p-2 -m-2">
                🪳
              </div>
              {/* Tooltip on hover - hidden on mobile, shown on desktop */}
              <div className="hidden sm:block absolute -top-10 left-1/2 -translate-x-1/2 bg-red-500 text-white text-sm px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Click to squash!
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Instructions - show once - Mobile responsive */}
      {bugs.length === 1 && score === 0 && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-playwright/90 backdrop-blur-md border border-playwright rounded-xl p-4 sm:p-6 animate-pulse max-w-[90vw] sm:max-w-none mx-4">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl mb-2 animate-crawl">🪳</div>
            <div className="text-base sm:text-lg font-bold mb-1">Found a Bug!</div>
            <div className="text-xs sm:text-sm text-white/70">
              <span className="sm:hidden">Tap to squash it!</span>
              <span className="hidden sm:inline">Click to squash it before it crawls away</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


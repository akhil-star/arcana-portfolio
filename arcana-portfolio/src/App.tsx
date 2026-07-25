import { AnimatePresence, motion } from 'framer-motion';
import { AppStateProvider, useAppState } from '@/hooks/useAppState';
import { useAmbientAudio } from '@/hooks/useAmbientAudio';
import { useAmbientEffects } from '@/hooks/useAmbientEffects';
import { destinationVariants } from '@/animations/variants';
import { TravelOverlays } from '@/animations/TravelOverlays';
import React, { Suspense } from 'react';
const Starfield = React.lazy(() => import('@/three/Starfield').then((m) => ({ default: m.Starfield })));
import { CustomCursor, AtmosphereDecor } from '@/components/CustomCursor';
import { Hud, CollectTrack, ScrollCue } from '@/components/Hud';
import { Landing } from '@/sections/Landing';
import { Crossroads } from '@/sections/Crossroads';
import { ArcanaHall } from '@/sections/ArcanaHall';
import { Library, Forge, Guildhall, Campfire, Secret } from '@/sections/Realms';
import { CaseStudyView } from '@/caseStudies/CaseStudyView';

/** The one active destination, keyed so AnimatePresence can stage travel. */
function Stage() {
  const { location, travelKind, reducedMotion } = useAppState();
  const key =
    location.dest === 'case' ? `case-${location.projectId}` : location.dest;

  const content = (() => {
    switch (location.dest) {
      case 'landing':
        return <Landing />;
      case 'crossroads':
        return <Crossroads />;
      case 'arcana':
        return <ArcanaHall />;
      case 'library':
        return <Library />;
      case 'forge':
        return <Forge />;
      case 'guildhall':
        return <Guildhall />;
      case 'campfire':
        return <Campfire />;
      case 'secret':
        return <Secret />;
      case 'case':
        return location.projectId ? (
          <CaseStudyView projectId={location.projectId} />
        ) : null;
    }
  })();

  return (
    <div id="stage">
      <AnimatePresence mode="wait" custom={travelKind}>
        <motion.section
          key={key}
          /* #dest-<name> ids drive the per-realm CSS light washes */
          id={`dest-${location.dest}`}
          className="dest active"
          custom={travelKind}
          variants={destinationVariants}
          initial={reducedMotion ? false : 'enter'}
          animate="active"
          exit="exit"
        >
          {content}
        </motion.section>
      </AnimatePresence>
    </div>
  );
}

function Shell() {
  useAmbientAudio();
  useAmbientEffects();
  return (
    <>
      <CustomCursor />
      <Suspense fallback={null}>
        <Starfield />
      </Suspense>
      <AtmosphereDecor />
      <TravelOverlays />
      <Hud />
      <CollectTrack />
      <ScrollCue />
      <Stage />
    </>
  );
}

export default function App() {
  return (
    <AppStateProvider>
      <Shell />
    </AppStateProvider>
  );
}

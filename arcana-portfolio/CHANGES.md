# Changes

- 2026-07-25: Ran linting and formatting fixes.
  - Installed ESLint & Prettier tooling and config.
  - Auto-fixed 1,586 Prettier/ESLint issues and addressed remaining rule warnings.
  - Verified typecheck and production build succeed.
 - 2026-07-25: Added cinematic transitions.
   - Added `DoorTransition` (Framer Motion) and `TransitionFX` (Three.js) for a richer gate reveal.
   - Exposed a HUD toggle to enable/disable the cinematic transition.
   - TransitionFX emits a brief particle burst during gate reveals and is lightweight.
   - Verified typecheck and production build succeed after changes.

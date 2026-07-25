import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { cameraTarget } from './cameraMood';
import { useAppState } from '@/hooks/useAppState';

/**
 * Ambient Three.js scene — starfield, Milky Way band, nebulae, a
 * distant planet, near-camera gold dust, exponential fog and a subtle
 * cursor-driven parallax. Runs in a single rAF loop with zero React
 * re-renders; density scales down on touch devices. The camera drifts
 * toward `cameraTarget` (set per destination) to sell "travel".
 */
export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);
  const reducedRef = useRef(false);
  const { reducedMotion } = useAppState();
  reducedRef.current = reducedMotion;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      });
    } catch {
      document.getElementById('atmosphere')?.classList.add('fallback');
      return;
    }
    const isTouch = window.matchMedia('(hover: none)').matches;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0f14, 0.028);
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      200,
    );
    camera.position.set(0, 0, 18);

    const disposables: { dispose(): void }[] = [];

    /** Soft radial glow texture for sprites (nebulae, planet). */
    function glowTexture(inner: string, outer: string): THREE.CanvasTexture {
      const c = document.createElement('canvas');
      c.width = c.height = 256;
      const x = c.getContext('2d')!;
      const g = x.createRadialGradient(128, 128, 10, 128, 128, 128);
      g.addColorStop(0, inner);
      g.addColorStop(0.55, outer);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      x.fillStyle = g;
      x.fillRect(0, 0, 256, 256);
      const tex = new THREE.CanvasTexture(c);
      disposables.push(tex);
      return tex;
    }

    function points(
      positions: Float32Array,
      material: THREE.PointsMaterial,
    ): THREE.Points {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      disposables.push(geo, material);
      const p = new THREE.Points(geo, material);
      scene.add(p);
      return p;
    }

    // Starfield — a hemisphere of stars behind the camera plane.
    const starCount = isTouch ? 600 : 1600;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 40 + Math.random() * 60;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      starPos[i * 3 + 2] = -Math.abs(r * Math.cos(phi)) - 10;
    }
    const stars = points(
      starPos,
      new THREE.PointsMaterial({
        color: 0xf4efe1,
        size: 0.22,
        transparent: true,
        opacity: 0.85,
        sizeAttenuation: true,
      }),
    );

    // Milky Way — a faint tilted band of dense tiny stars.
    const mwCount = isTouch ? 500 : 1800;
    const mwPos = new Float32Array(mwCount * 3);
    for (let i = 0; i < mwCount; i++) {
      const along = (Math.random() - 0.5) * 160;
      const spread = (Math.random() - 0.5) * (Math.random() - 0.5) * 40;
      mwPos[i * 3] = along * 0.9 - spread * 0.4;
      mwPos[i * 3 + 1] = along * 0.28 + spread;
      mwPos[i * 3 + 2] = -70 - Math.random() * 30;
    }
    const milky = points(
      mwPos,
      new THREE.PointsMaterial({
        color: 0xcfc4e8,
        size: 0.14,
        transparent: true,
        opacity: 0.45,
        sizeAttenuation: true,
      }),
    );

    // Nebula clouds — vast, soft, far away.
    const nebulae = new THREE.Group();
    (
      [
        {
          tex: glowTexture('rgba(64,66,102,.26)', 'rgba(36,38,64,.12)'),
          x: -34,
          y: 12,
          z: -80,
          s: 70,
        },
        {
          tex: glowTexture('rgba(44,54,92,.24)', 'rgba(23,28,60,.1)'),
          x: 38,
          y: -6,
          z: -90,
          s: 85,
        },
        {
          tex: glowTexture('rgba(212,175,55,.09)', 'rgba(138,116,51,.03)'),
          x: 8,
          y: 24,
          z: -75,
          s: 48,
        },
      ] as const
    ).forEach((n) => {
      const mat = new THREE.SpriteMaterial({
        map: n.tex,
        transparent: true,
        depthWrite: false,
      });
      disposables.push(mat);
      const sp = new THREE.Sprite(mat);
      sp.position.set(n.x, n.y, n.z);
      sp.scale.set(n.s, n.s * 0.7, 1);
      nebulae.add(sp);
    });
    scene.add(nebulae);

    // A distant planet — quiet, barely there.
    const planetMat = new THREE.SpriteMaterial({
      map: glowTexture('rgba(180,173,198,.32)', 'rgba(70,72,110,.1)'),
      transparent: true,
      depthWrite: false,
    });
    disposables.push(planetMat);
    const planet = new THREE.Sprite(planetMat);
    planet.position.set(-46, 22, -95);
    planet.scale.set(7, 7, 1);
    scene.add(planet);

    // Drifting gold dust motes near the camera.
    const dustCount = isTouch ? 60 : 160;
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 30;
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      dustPos[i * 3 + 2] = -Math.random() * 12;
    }
    const dust = points(
      dustPos,
      new THREE.PointsMaterial({
        color: 0xd4af37,
        size: 0.06,
        transparent: true,
        opacity: 0.5,
      }),
    );

    scene.add(new THREE.AmbientLight(0x3b4656, 0.6));

    // Cursor parallax (smoothed in the loop; passive listener only).
    let mx = 0;
    let my = 0;
    const onMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    let px = 0;
    let py = 0;
    let animId = 0;
    const fog = scene.fog as THREE.FogExp2;

    const loop = () => {
      animId = requestAnimationFrame(loop);
      const t = performance.now() * 0.00005;
      px += (mx - px) * 0.03;
      py += (my - py) * 0.03;

      if (!reducedRef.current) {
        stars.rotation.y = t * 0.6;
        stars.rotation.x = t * 0.15;
        dust.rotation.y -= 0.0003;
        dust.position.y =
          Math.sin(performance.now() * 0.00015) * 0.6 - py * 2.2;
        nebulae.rotation.z = t * 0.3;
      }
      // Layered depth: foreground reacts most, background least.
      dust.position.x = -px * 3.0;
      stars.position.x = -px * 0.7;
      stars.position.y = py * 0.4;
      milky.position.x = -px * 0.35;
      milky.position.y = py * 0.2;
      nebulae.position.x = -px * 0.5;
      nebulae.position.y = py * 0.25;
      if (fgRef.current)
        fgRef.current.style.transform = `translate(${(-px * 30).toFixed(1)}px, ${(-py * 20).toFixed(1)}px)`;

      // Drift toward the destination camera mood.
      if (cameraTarget.snap) {
        camera.position.z = cameraTarget.z;
        fog.density = cameraTarget.fog;
      } else {
        camera.position.z += (cameraTarget.z - camera.position.z) * 0.028;
        fog.density += (cameraTarget.fog - fog.density) * 0.028;
      }
      camera.position.x += (px * 0.9 - camera.position.x) * 0.04;
      camera.position.y += (-py * 0.55 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, -20);
      renderer.render(scene, camera);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <canvas id="bg-canvas" ref={canvasRef} aria-hidden="true" />
      <div id="atmosphere" aria-hidden="true" />
      <div id="vignette" aria-hidden="true" />
      {/* Foreground depth motes — react the most to the cursor */}
      <div id="fg-layer" ref={fgRef} aria-hidden="true">
        <span
          className="fg-mote"
          style={{ left: '9%', top: '72%', width: 5, height: 5 }}
        />
        <span
          className="fg-mote"
          style={{
            left: '22%',
            top: '24%',
            width: 3,
            height: 3,
            animationDelay: '-3s',
          }}
        />
        <span
          className="fg-mote"
          style={{
            left: '64%',
            top: '14%',
            width: 4,
            height: 4,
            animationDelay: '-6s',
          }}
        />
        <span
          className="fg-mote"
          style={{
            left: '88%',
            top: '62%',
            width: 5,
            height: 5,
            animationDelay: '-1.5s',
          }}
        />
        <span
          className="fg-mote"
          style={{
            left: '46%',
            top: '88%',
            width: 3,
            height: 3,
            animationDelay: '-4.5s',
          }}
        />
      </div>
    </>
  );
}

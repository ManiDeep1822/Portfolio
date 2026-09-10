import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // References to communicate between React state and animation loop
  const sceneState = useRef({
    targetRotationY: 0,
    targetRotationX: 0,
    currentRotationY: 0,
    currentRotationX: 0,
    pointerDown: false,
    pointerX: 0,
    pointerY: 0,
    mouseParallaxX: 0,
    mouseParallaxY: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080c14, 0.04);

    const getTargetCameraZ = (w) => {
      if (w < 400) return 9.6;
      if (w < 640) return 8.8;
      if (w < 1024) return 8.0;
      return 7.5;
    };

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, getTargetCameraZ(width));

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 3. Holographic Tech Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner Core: Translucent Glowing Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x10b981,
      emissive: 0x059669,
      emissiveIntensity: 0.35,
      roughness: 0.15,
      metalness: 0.8,
      transmission: 0.6,
      ior: 1.4,
      transparent: true,
      opacity: 0.85,
      wireframe: false
    });
    const innerCore = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(innerCore);

    // Outer Cage: Wireframe Octahedron/Dodecahedron
    const cageGeo = new THREE.DodecahedronGeometry(2.3, 0);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const outerCage = new THREE.Mesh(cageGeo, cageMat);
    coreGroup.add(outerCage);

    // Orbit Ring 1: Torus (Equatorial)
    const ring1Geo = new THREE.TorusGeometry(3.0, 0.03, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.6
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 2.3;
    coreGroup.add(ring1);

    // Orbit Ring 2: Torus (Inclined)
    const ring2Geo = new THREE.TorusGeometry(3.3, 0.025, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.5
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 3;
    ring2.rotation.y = Math.PI / 6;
    coreGroup.add(ring2);

    // Orbiting Satellite Nodes (Tech stack beacons)
    const nodeCount = 5;
    const nodes = [];
    const nodeColors = [0x10b981, 0x06b6d4, 0x38bdf8, 0xa855f7, 0x34d399];

    for (let i = 0; i < nodeCount; i++) {
      const nodeMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.14, 16, 16),
        new THREE.MeshBasicMaterial({ color: nodeColors[i] })
      );
      // Small outer pulse ring around node
      const pulseRing = new THREE.Mesh(
        new THREE.RingGeometry(0.2, 0.25, 24),
        new THREE.MeshBasicMaterial({
          color: nodeColors[i],
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.6
        })
      );
      nodeMesh.add(pulseRing);
      coreGroup.add(nodeMesh);
      nodes.push({
        mesh: nodeMesh,
        angle: (i / nodeCount) * Math.PI * 2,
        radius: 3.1,
        speed: 0.015 + i * 0.003
      });
    }

    // 4. Particle Constellation Field (Background depth)
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16 - 2;

      // Color variation (emerald, cyan, white)
      const isEmerald = Math.random() > 0.5;
      colors[i * 3] = isEmerald ? 0.06 : 0.02;
      colors[i * 3 + 1] = isEmerald ? 0.72 : 0.71;
      colors[i * 3 + 2] = isEmerald ? 0.5 : 0.83;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const particleField = new THREE.Points(particleGeo, particleMat);
    scene.add(particleField);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x10b981, 2.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x06b6d4, 2);
    dirLight2.position.set(-5, -5, -2);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x10b981, 3, 10);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // 6. Interaction Handlers (Pointer Drag for 360° Inspection)
    const onPointerDown = (e) => {
      sceneState.current.pointerDown = true;
      sceneState.current.pointerX = e.clientX;
      sceneState.current.pointerY = e.clientY;
      setIsDragging(true);
    };

    const onPointerMove = (e) => {
      // Parallax effect on mouse move
      const rect = container.getBoundingClientRect();
      const xNorm = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const yNorm = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      sceneState.current.mouseParallaxX = xNorm * 0.4;
      sceneState.current.mouseParallaxY = yNorm * 0.4;

      if (!sceneState.current.pointerDown) return;

      const deltaX = e.clientX - sceneState.current.pointerX;
      const deltaY = e.clientY - sceneState.current.pointerY;

      // 360 rotation sensitivity
      sceneState.current.targetRotationY += deltaX * 0.008;
      sceneState.current.targetRotationX += deltaY * 0.008;

      // Clamp X rotation so it doesn't flip completely upside down
      sceneState.current.targetRotationX = Math.max(
        -Math.PI / 3,
        Math.min(Math.PI / 3, sceneState.current.targetRotationX)
      );

      sceneState.current.pointerX = e.clientX;
      sceneState.current.pointerY = e.clientY;
    };

    const onPointerUp = () => {
      sceneState.current.pointerDown = false;
      setIsDragging(false);
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // 7. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.position.z = getTargetCameraZ(w);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 8. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const state = sceneState.current;

      // Auto 360 rotation when not dragging
      if (!state.pointerDown) {
        state.targetRotationY += 0.004;
      }

      // Smooth damping interpolation (Lerp)
      state.currentRotationY += (state.targetRotationY - state.currentRotationY) * 0.07;
      state.currentRotationX += (state.targetRotationX - state.currentRotationX) * 0.07;

      // Apply rotations to core group with mouse parallax
      coreGroup.rotation.y = state.currentRotationY;
      coreGroup.rotation.x = state.currentRotationX;

      // Subtle camera tilt for depth
      camera.position.x += (state.mouseParallaxX - camera.position.x) * 0.05;
      camera.position.y += (state.mouseParallaxY - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Animate internal components
      innerCore.rotation.y = elapsedTime * 0.3;
      outerCage.rotation.y = -elapsedTime * 0.25;
      outerCage.rotation.z = Math.sin(elapsedTime * 0.5) * 0.2;

      ring1.rotation.z = elapsedTime * 0.2;
      ring2.rotation.z = -elapsedTime * 0.25;

      // Animate orbiting tech nodes
      nodes.forEach((node) => {
        node.angle += node.speed;
        node.mesh.position.x = Math.cos(node.angle) * node.radius;
        node.mesh.position.z = Math.sin(node.angle) * node.radius;
        node.mesh.position.y = Math.sin(node.angle * 2) * 0.8;
      });

      // Ambient particle drift
      particleField.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', handleResize);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#0e1626]/80 to-[#080c14]/90 backdrop-blur-xl shadow-2xl shadow-emerald-950/20 group touch-none">
      {/* 3D Canvas Mount Element */}
      <div
        ref={containerRef}
        className={`w-full h-full cursor-grab active:cursor-grabbing ${isDragging ? 'cursor-grabbing' : ''}`}
        title="Interactive 3D Experience — Drag to rotate"
      />
    </div>
  );
}

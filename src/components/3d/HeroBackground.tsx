import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";


function Stars(props: any) {
    const ref = useRef<any>(null);

    // Generate a soft circle texture
    const texture = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const context = canvas.getContext('2d');
        if (context) {
            const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            context.fillStyle = gradient;
            context.fillRect(0, 0, 32, 32);
        }
        const tex = new THREE.CanvasTexture(canvas);
        return tex;
    }, []);

    // Use a box distribution for rain to cover the screen better than a sphere
    const [positions, speeds] = useMemo(() => {
        const count = 4000; // Increased count
        const posArray = new Float32Array(count * 3);
        const speedArray = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 15; // Wider spread
            const y = (Math.random() - 0.5) * 15;
            const z = (Math.random() - 0.5) * 8; // Deeper

            posArray[i * 3] = x;
            posArray[i * 3 + 1] = y;
            posArray[i * 3 + 2] = z;

            // Random speed
            speedArray[i] = 0.2 + Math.random() * 0.8;
        }
        return [posArray, speedArray];
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            // Constant slow rotation
            ref.current.rotation.z -= delta / 60;
            ref.current.rotation.y -= delta / 80;

            // Mobile check (simple width check)
            const isDesktop = state.viewport.width > 768; // Adjust breakpoint as needed

            if (isDesktop) {
                // Mouse interaction (tilting the whole cloud)
                ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, state.pointer.y * 0.05, 0.05);
                ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, state.pointer.x * 0.05, 0.05);
            }

            const positions = ref.current.geometry.attributes.position.array;

            // Revert to simple multiplier, but increased slightly to feel 'faster'
            const mouseX = state.pointer.x * 7;
            const mouseY = state.pointer.y * 7;

            for (let i = 0; i < positions.length; i += 3) {
                const particleIndex = i / 3;
                const speed = speeds[particleIndex];

                // Falling animation
                positions[i + 1] -= delta * speed;

                // Reset if too low
                if (positions[i + 1] < -7) {
                    positions[i + 1] = 7;
                    positions[i] = (Math.random() - 0.5) * 15;
                    positions[i + 2] = (Math.random() - 0.5) * 8;
                }

                // Repulsion Logic
                const dx = positions[i] - mouseX;
                const dy = positions[i + 1] - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const repulsionRadius = 2.0;
                const repulsionForce = 3.0;

                if (dist < repulsionRadius) {
                    const angle = Math.atan2(dy, dx);
                    const force = (repulsionRadius - dist) * repulsionForce;

                    positions[i] += Math.cos(angle) * force * delta;
                    positions[i + 1] += Math.sin(angle) * force * delta;
                }
            }

            ref.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    map={texture}
                    color="#cffafe" // Cyan-100
                    size={0.15} // Larger size because of soft texture
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

export function HeroBackground() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 1] }} eventSource={document.body} eventPrefix="client">
                <Stars />
                <EffectComposer>
                    <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} height={300} intensity={1.5} />
                </EffectComposer>
            </Canvas>
        </div>
    );
}

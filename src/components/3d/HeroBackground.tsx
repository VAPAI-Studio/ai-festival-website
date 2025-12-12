import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";


function Stars(props: any) {
    const ref = useRef<any>(null);
    // Use a box distribution for rain to cover the screen better than a sphere
    const [positions, speeds] = useMemo(() => {
        const count = 3000; // Reduced count for rain
        const posArray = new Float32Array(count * 3);
        const speedArray = new Float32Array(count);
        const initialPosArray = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 10;
            const y = (Math.random() - 0.5) * 10;
            const z = (Math.random() - 0.5) * 4;

            posArray[i * 3] = x;
            posArray[i * 3 + 1] = y;
            posArray[i * 3 + 2] = z;

            initialPosArray[i * 3] = x;
            initialPosArray[i * 3 + 1] = y;
            initialPosArray[i * 3 + 2] = z;

            // Random speed for each droplet: between 0.5 and 1.5
            speedArray[i] = 0.5 + Math.random() * 1.0;
        }
        return [posArray, speedArray];
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            // Constant slow rotation
            ref.current.rotation.z -= delta / 50;

            // Mouse interaction (tilting the whole cloud)
            ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, state.pointer.y * 0.1, 0.1);
            ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, state.pointer.x * 0.1, 0.1);

            const positions = ref.current.geometry.attributes.position.array;

            // Mouse position in world space (approximate since we rotate the group)
            // We'll just use the pointer values directly for a simple screen-space repulsion effect relative to the center
            // Or better, project the mouse ray? For now, simple 2D repulsion on X/Y is enough for "cool" factor.
            const mouseX = state.pointer.x * 5; // Scale to match world units roughly
            const mouseY = state.pointer.y * 5;

            for (let i = 0; i < positions.length; i += 3) {
                const particleIndex = i / 3;
                const speed = speeds[particleIndex];

                // Falling animation
                positions[i + 1] -= delta * speed;

                // Reset if too low
                if (positions[i + 1] < -5) {
                    positions[i + 1] = 5;
                    positions[i] = (Math.random() - 0.5) * 10;
                    positions[i + 2] = (Math.random() - 0.5) * 4;
                }

                // Repulsion Logic
                const dx = positions[i] - mouseX;
                const dy = positions[i + 1] - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const repulsionRadius = 1.5;
                const repulsionForce = 2.0;

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
                    color="#cffafe" // Cyan-100
                    size={0.03} // Smaller size for particles
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
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
                    <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={0.5} />
                </EffectComposer>
            </Canvas>
        </div>
    );
}

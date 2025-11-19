import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Float, Html, Stars, QuadraticBezierLine, Text, PresentationControls } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useTheme } from '../context/ThemeContext';
import { Vector3, Color } from 'three';
import { easing } from 'maath';

const sections = [
    { id: 'home', label: 'Home', position: [0, 0, 0] },
    { id: 'about', label: 'About', position: [-2.5, 1.5, -1] },
    { id: 'projects', label: 'Projects', position: [2.5, -1.5, -1] },
    { id: 'education', label: 'Education', position: [-2, -2, 1] },
    { id: 'contact', label: 'Contact', position: [2, 2, 1] },
];

// Define connections between nodes (indices in sections array)
const connections = [
    [0, 1], [0, 2], [0, 3], [0, 4],
    [1, 3], [2, 4], [1, 4], [2, 3]
];

function BrainParticles({ theme }) {
    const ref = useRef();
    const sphere = useMemo(() => random.inSphere(new Float32Array(4000), { radius: 5 }), []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 20;
        ref.current.rotation.y -= delta / 25;
    });

    const color = theme === 'dark' ? '#00ffff' : '#ff0055';

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color={color}
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.4}
                />
            </Points>
        </group>
    );
}

function ConnectionLines({ theme }) {
    const color = theme === 'dark' ? '#00ffff' : '#ff0055';
    const opacity = theme === 'dark' ? 0.2 : 0.3;

    return (
        <group>
            {connections.map(([startIdx, endIdx], i) => {
                const start = new Vector3(...sections[startIdx].position);
                const end = new Vector3(...sections[endIdx].position);
                // Calculate a mid point for the curve, slightly offset
                const mid = start.clone().add(end).multiplyScalar(0.5);
                mid.y += 0.5; // Curve upward slightly

                return (
                    <QuadraticBezierLine
                        key={i}
                        start={start}
                        end={end}
                        mid={mid}
                        color={color}
                        lineWidth={1}
                        transparent
                        opacity={opacity}
                    />
                );
            })}
        </group>
    );
}

function InteractiveNode({ position, label, id, activeId, onClick, theme }) {
    const [hovered, setHovered] = useState(false);
    const isActive = activeId === id;
    const meshRef = useRef();

    const baseColor = theme === 'dark' ? new Color('#00ffff') : new Color('#ff0055');
    const activeColor = theme === 'dark' ? new Color('#ffffff') : new Color('#000000');

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Pulse animation
            const t = state.clock.getElapsedTime();
            const scale = (hovered || isActive) ? 1.2 + Math.sin(t * 3) * 0.1 : 1;
            meshRef.current.scale.setScalar(scale);
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group position={position}>
                <mesh
                    ref={meshRef}
                    onClick={(e) => { e.stopPropagation(); onClick(id); }}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                >
                    <sphereGeometry args={[0.2, 32, 32]} />
                    <meshStandardMaterial
                        color={hovered || isActive ? activeColor : baseColor}
                        emissive={hovered || isActive ? activeColor : baseColor}
                        emissiveIntensity={hovered || isActive ? 2 : 0.5}
                        toneMapped={false}
                    />
                </mesh>

                {/* Glow effect using a larger transparent sphere */}
                {(hovered || isActive) && (
                    <mesh scale={[1.5, 1.5, 1.5]}>
                        <sphereGeometry args={[0.2, 32, 32]} />
                        <meshBasicMaterial
                            color={activeColor}
                            transparent
                            opacity={0.2}
                            depthWrite={false}
                        />
                    </mesh>
                )}

                <Html distanceFactor={10}>
                    <div
                        style={{
                            color: theme === 'dark' ? '#fff' : '#000',
                            background: theme === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)',
                            padding: '6px 12px',
                            borderRadius: '8px',
                            pointerEvents: 'none',
                            whiteSpace: 'nowrap',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            border: `1px solid ${theme === 'dark' ? '#00ffff' : '#ff0055'}`,
                            backdropFilter: 'blur(4px)',
                            opacity: hovered || isActive ? 1 : 0.7,
                            transition: 'all 0.3s',
                            transform: `translate3d(-50%, -40px, 0) scale(${hovered || isActive ? 1.1 : 1})`,
                        }}
                    >
                        {label}
                    </div>
                </Html>
            </group>
        </Float>
    );
}

function CameraRig({ activeId }) {
    const { camera } = useThree();
    const targetPosition = useMemo(() => {
        const section = sections.find(s => s.id === activeId);
        if (section) {
            const pos = new Vector3(...section.position);
            pos.z += 4;
            pos.y += 0.5;
            return pos;
        }
        return new Vector3(0, 0, 6);
    }, [activeId]);

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, targetPosition, 0.8, delta);
        state.camera.lookAt(0, 0, 0);
    });

    return null;
}

export default function Brain3D({ activeSection, onSectionChange }) {
    const { theme } = useTheme();
    const bgColor = theme === 'dark' ? '#050505' : '#f0f0f0';

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, background: bgColor, transition: 'background 0.5s ease' }}>
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <PresentationControls
                    global={true} // Spin globally or by dragging the model
                    cursor={true} // Whether to toggle cursor style on drag
                    snap={false} // Snap-back to center (can also be a spring config)
                    speed={1} // Speed factor
                    zoom={0.8} // Zoom factor when zooming
                    rotation={[0, 0, 0]} // Default rotation
                    polar={[-Math.PI / 4, Math.PI / 4]} // Vertical limits
                    azimuth={[-Math.PI / 4, Math.PI / 4]} // Horizontal limits
                    config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
                >
                    <BrainParticles theme={theme} />
                    <ConnectionLines theme={theme} />

                    {sections.map((section) => (
                        <InteractiveNode
                            key={section.id}
                            {...section}
                            activeId={activeSection}
                            onClick={onSectionChange}
                            theme={theme}
                        />
                    ))}
                </PresentationControls>

                <CameraRig activeId={activeSection} />
            </Canvas>
        </div>
    );
}


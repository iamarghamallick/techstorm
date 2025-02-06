"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const StarsBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#1E1336');
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // Stars
        const starsGeometry = new THREE.BufferGeometry();
        const starCount = 1000;
        const positions = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 2000; // x
            positions[i * 3 + 1] = (Math.random() - 0.5) * 2000; // y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 2000; // z
        }

        starsGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        );

        const starsMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 2,
            sizeAttenuation: true,
        });

        const stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);

        // Camera position
        camera.position.z = 1000;

        // Animation function
        const animate = () => {
            requestAnimationFrame(animate);

            // Twinkling effect
            stars.rotation.x += 0.0005;
            stars.rotation.y += 0.0005;

            renderer.render(scene, camera);
        };

        animate();

        // Handle resizing
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10"></div>;
};

export default StarsBackground;

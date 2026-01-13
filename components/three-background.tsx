"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ThreeBackground() {
    const containerRef = useRef<HTMLDivElement>(null)
    const sceneRef = useRef<THREE.Scene | null>(null)
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
    const particlesRef = useRef<THREE.Points | null>(null)
    const velocitiesRef = useRef<Float32Array | null>(null)
    const originalPositionsRef = useRef<Float32Array | null>(null)

    useEffect(() => {
        if (!containerRef.current) return

        // Scene setup
        const scene = new THREE.Scene()
        sceneRef.current = scene

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        camera.position.z = 5
        cameraRef.current = camera

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        containerRef.current.appendChild(renderer.domElement)
        rendererRef.current = renderer

        // Create circular molecule particles
        const particlesGeometry = new THREE.BufferGeometry()
        const particlesCount = 500
        const posArray = new Float32Array(particlesCount * 3)
        const velocities = new Float32Array(particlesCount * 3)
        const originalPositions = new Float32Array(particlesCount * 3)

        for (let i = 0; i < particlesCount * 3; i += 3) {
            // Position
            const x = (Math.random() - 0.5) * 15
            const y = (Math.random() - 0.5) * 15
            const z = (Math.random() - 0.5) * 15

            posArray[i] = x
            posArray[i + 1] = y
            posArray[i + 2] = z

            // Store original positions
            originalPositions[i] = x
            originalPositions[i + 1] = y
            originalPositions[i + 2] = z

            // Very smooth, slow velocities
            velocities[i] = (Math.random() - 0.5) * 0.008
            velocities[i + 1] = (Math.random() - 0.5) * 0.008
            velocities[i + 2] = (Math.random() - 0.5) * 0.004
        }

        particlesGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(posArray, 3)
        )

        velocitiesRef.current = velocities
        originalPositionsRef.current = originalPositions

        // Custom shader for perfect circular molecules
        const vertexShader = `
      attribute float size;
      varying vec3 vColor;
      
      void main() {
        vColor = vec3(1.0, 1.0, 1.0);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = 30.0 * (1.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `

        const fragmentShader = `
      varying vec3 vColor;
      
      void main() {
        // Create perfect circle
        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);
        
        if (dist > 0.5) {
          discard;
        }
        
        // Soft edge with smooth falloff
        float alpha = smoothstep(0.5, 0.3, dist) * 0.4;
        
        gl_FragColor = vec4(vColor, alpha);
      }
    `

        const particlesMaterial = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        })

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(particlesMesh)
        particlesRef.current = particlesMesh

        // Add blue circular molecule accents
        const accentGeometry = new THREE.BufferGeometry()
        const accentCount = 30
        const accentArray = new Float32Array(accentCount * 3)

        for (let i = 0; i < accentCount * 3; i += 3) {
            accentArray[i] = (Math.random() - 0.5) * 12
            accentArray[i + 1] = (Math.random() - 0.5) * 12
            accentArray[i + 2] = (Math.random() - 0.5) * 12
        }

        accentGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(accentArray, 3)
        )

        const accentVertexShader = `
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = 50.0 * (1.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `

        const accentFragmentShader = `
      void main() {
        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);
        
        if (dist > 0.5) {
          discard;
        }
        
        // Blue color with soft glow
        float alpha = smoothstep(0.5, 0.2, dist) * 0.35;
        vec3 color = vec3(0.23, 0.51, 0.96); // #3b82f6
        
        gl_FragColor = vec4(color, alpha);
      }
    `

        const accentMaterial = new THREE.ShaderMaterial({
            vertexShader: accentVertexShader,
            fragmentShader: accentFragmentShader,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        })

        const accentMesh = new THREE.Points(accentGeometry, accentMaterial)
        scene.add(accentMesh)

        // Mouse interaction with smooth easing
        const mouse = new THREE.Vector2()
        const targetMouse = new THREE.Vector2()
        const mouseInfluence = new THREE.Vector3()

        const handleMouseMove = (event: MouseEvent) => {
            targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1
            targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1
        }

        window.addEventListener("mousemove", handleMouseMove)

        // Animation loop with smooth easing
        const animate = () => {
            requestAnimationFrame(animate)

            // Smooth mouse following with easing
            mouse.x += (targetMouse.x - mouse.x) * 0.05
            mouse.y += (targetMouse.y - mouse.y) * 0.05

            if (particlesRef.current && velocitiesRef.current && originalPositionsRef.current) {
                const positions = particlesRef.current.geometry.attributes.position.array as Float32Array

                // Update mouse influence position in 3D space
                mouseInfluence.set(
                    mouse.x * 8,
                    mouse.y * 8,
                    0
                )

                for (let i = 0; i < positions.length; i += 3) {
                    // Smooth autonomous movement
                    positions[i] += velocitiesRef.current[i]
                    positions[i + 1] += velocitiesRef.current[i + 1]
                    positions[i + 2] += velocitiesRef.current[i + 2]

                    // Very gentle mouse interaction with smooth easing
                    const dx = positions[i] - mouseInfluence.x
                    const dy = positions[i + 1] - mouseInfluence.y
                    const dz = positions[i + 2] - mouseInfluence.z
                    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

                    if (distance < 4) {
                        // Smooth easing function for force
                        const force = Math.pow((4 - distance) / 4, 2) * 0.05
                        positions[i] += dx * force
                        positions[i + 1] += dy * force
                        positions[i + 2] += dz * force * 0.5
                    }

                    // Very smooth return to original position with easing
                    const returnSpeed = 0.015
                    positions[i] += (originalPositionsRef.current[i] - positions[i]) * returnSpeed
                    positions[i + 1] += (originalPositionsRef.current[i + 1] - positions[i + 1]) * returnSpeed
                    positions[i + 2] += (originalPositionsRef.current[i + 2] - positions[i + 2]) * returnSpeed

                    // Boundary wrapping
                    if (Math.abs(positions[i]) > 10) positions[i] = originalPositionsRef.current[i]
                    if (Math.abs(positions[i + 1]) > 10) positions[i + 1] = originalPositionsRef.current[i + 1]
                    if (Math.abs(positions[i + 2]) > 10) positions[i + 2] = originalPositionsRef.current[i + 2]
                }

                particlesRef.current.geometry.attributes.position.needsUpdate = true
            }

            // Ultra-smooth rotation for accent particles
            if (accentMesh) {
                accentMesh.rotation.y += 0.0001
                accentMesh.rotation.x += 0.00005
            }

            renderer.render(scene, camera)
        }

        animate()

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener("resize", handleResize)

        // Cleanup
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("resize", handleResize)

            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement)
            }

            particlesGeometry.dispose()
            particlesMaterial.dispose()
            accentGeometry.dispose()
            accentMaterial.dispose()
            renderer.dispose()
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-10"
            style={{ background: "linear-gradient(to bottom, #0a0a0a 0%, #000000 100%)" }}
        />
    )
}

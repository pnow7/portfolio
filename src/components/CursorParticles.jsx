import React, { useState, useEffect, useCallback, useRef } from "react";

const CursorParticles = () => {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const mousePosition = useRef({ x: 0, y: 0 });
    const lastEmittedPosition = useRef({ x: 0, y: 0 });

    // 캔버스 초기화 및 파티클 관리
    const initCanvasAndListeners = useCallback((canvas) => {
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // 캔버스 크기를 윈도우 크기에 맞춤
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // 마우스 위치 업데이트
        const updateMousePosition = (e) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };
        };
        document.addEventListener("mousemove", updateMousePosition);
        document.addEventListener("pointermove", updateMousePosition);

        // 파티클 생성 함수
        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.radius = Math.random() * 2 + 0.5;

                // const lightness = Math.random() * 20 + 75;
                // this.color = `hsl(0, 5%, ${lightness}%)`;
                
                const hue = Math.random() * 360;    // 0 ~ 360까지 무지개색 전체 범위
                const saturation = 90;              // 90% 이상의 높은 채도로 쨍하게 만듦
                const lightness = 70;               // 70% 이상의 높은 명도로 밝게 만듦
                this.color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

                this.velocity = {
                    x: (Math.random() - 0.5) * (Math.random() * 4),
                    y: (Math.random() - 0.5) * (Math.random() * 4),
                };
                this.alpha = 1;
                this.friction = 0.98;
                this.gravity = 0.05;
            }

            update() {
                this.velocity.x *= this.friction;
                this.velocity.y *= this.friction;
                this.velocity.y += this.gravity;
                this.x += this.velocity.x;
                this.y += this.velocity.y;
                this.alpha -= 0.01;
            }

            // draw() {
            //     ctx.save();
            //     ctx.globalAlpha = this.alpha;
            //     ctx.beginPath();
            //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            //     ctx.fillStyle = this.color;
            //     ctx.fill();
            //     ctx.restore();
            // }

            draw(ctx) { 
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 3, false);
                ctx.fillStyle = this.color;
                ctx.fill();
                
                ctx.restore();
            }
        }

        // 애니메이션 루프
        let frameId;
        let lastEmit = Date.now();
        const emitInterval = 15; // 10ms마다 파티클 생성 시도 

        const animate = () => {
            frameId = requestAnimationFrame(animate);

            // 잔상이 남지 않도록 캔버스 전체를 투명하게 지움
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const currentMouseX = mousePosition.current.x;
            const currentMouseY = mousePosition.current.y;
            const hasMouseMoved = currentMouseX !== lastEmittedPosition.current.x || currentMouseY !== lastEmittedPosition.current.y;

            // 일정 간격마다 파티클 생성
            const now = Date.now();
            if (now - lastEmit > emitInterval && hasMouseMoved) {
                lastEmit = now;

                lastEmittedPosition.current = { x: currentMouseX, y: currentMouseY };
                
                // 마우스 위치에서 3-5개의 파티클 생성
                for (let i = 0; i < Math.floor(Math.random() * 1) + 1; i++) {
                    particles.current.push(
                        new Particle(
                            currentMouseX,
                            currentMouseY
                        )
                    );
                }
            }

            // 파티클 업데이트 및 제거
            for (let i = particles.current.length - 1; i >= 0; i--) {
                const particle = particles.current[i];
                particle.update();
                particle.draw(ctx);

                if (particle.alpha <= 0 || particle.y + particle.radius > canvas.height) {
                    particles.current.splice(i, 1);
                }
            }
        };

        animate();

        // 정리(Cleanup)
        return () => {
            window.removeEventListener("resize", resizeCanvas);
            document.removeEventListener("mousemove", updateMousePosition);
            document.removeEventListener("pointermove", updateMousePosition);
            cancelAnimationFrame(frameId);
        };
    }, []);

    useEffect(() => {
        if (canvasRef.current) {
            return initCanvasAndListeners(canvasRef.current);
        }
    }, [initCanvasAndListeners]);

    return (
        <canvas ref={canvasRef} id="particle-canvas" />
    );
};

export default CursorParticles;
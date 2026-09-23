const heroL = document.querySelectorAll(".hero-3d");

heroL.forEach((hero) => {

    const canvas = document.createElement("canvas");

    const ctx = canvas.getContext("2d", {
        alpha: true
    });

    hero.appendChild(canvas);

    const particles = [];

    const desktopParticleCount = 50;
    const mobileParticleCount = 30;

    const CONNECTION_DISTANCE = 50;
    const CONNECTION_DISTANCE_SQUARED =
        CONNECTION_DISTANCE *
        CONNECTION_DISTANCE;

    const FPS = 60;
    const FRAME_TIME = 1000 / FPS;

    let PARTICLE_COUNT =
        desktopParticleCount;

    let width = 0;
    let height = 0;

    let animationFrame = null;
    let running = false;
    let lastFrame = 0;

    function resize() {

        width = hero.clientWidth;
        height = hero.clientHeight;

        if (!width || !height) {
            return;
        }

        PARTICLE_COUNT =
            window.innerWidth <= 768
                ? mobileParticleCount
                : desktopParticleCount;

        const dpr =
            Math.min(
                window.devicePixelRatio || 1,
                1.5
            );

        canvas.width =
            Math.floor(width * dpr);

        canvas.height =
            Math.floor(height * dpr);

        canvas.style.width =
            `${width}px`;

        canvas.style.height =
            `${height}px`;

        ctx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );
    }

    function createParticles() {

        particles.length = 0;

        for (
            let i = 0;
            i < PARTICLE_COUNT;
            i++
        ) {

            const z =
                Math.random();

            particles.push({

                x:
                    Math.random() *
                    width,

                y:
                    Math.random() *
                    height,

                z,

                vx:
                    (Math.random() - 0.5) *
                    0.15,

                vy:
                    (Math.random() - 0.5) *
                    0.15,

                size:
                    1 +
                    z * 2,

                opacity:
                    0.2 +
                    z * 0.4
            });
        }
    }

    function updateParticles() {

        for (const particle of particles) {

            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < -20) {
                particle.x = width + 20;
            }

            if (particle.x > width + 20) {
                particle.x = -20;
            }

            if (particle.y < -20) {
                particle.y = height + 20;
            }

            if (particle.y > height + 20) {
                particle.y = -20;
            }
        }
    }

    function drawConnections() {

        for (
            let i = 0;
            i < particles.length;
            i++
        ) {

            const a =
                particles[i];

            for (
                let j = i + 1;
                j < particles.length;
                j++
            ) {

                const b =
                    particles[j];

                const dx =
                    a.x - b.x;

                const dy =
                    a.y - b.y;

                const distanceSquared =
                    dx * dx +
                    dy * dy;

                if (
                    distanceSquared >=
                    CONNECTION_DISTANCE_SQUARED
                ) {
                    continue;
                }

                const distance =
                    Math.sqrt(
                        distanceSquared
                    );

                const opacity =
                    (
                        1 -
                        distance /
                        CONNECTION_DISTANCE
                    ) *
                    0.15;

                ctx.beginPath();

                ctx.moveTo(
                    a.x,
                    a.y
                );

                ctx.lineTo(
                    b.x,
                    b.y
                );

                ctx.strokeStyle =
                    `rgba(80, 150, 255, ${opacity})`;

                ctx.lineWidth = 1;

                ctx.stroke();
            }
        }
    }

    function drawParticles() {

        for (const particle of particles) {

            ctx.beginPath();

            ctx.arc(
                particle.x,
                particle.y,
                particle.size,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                `rgba(100, 170, 255, ${particle.opacity})`;

            ctx.fill();
        }
    }

    function animate(timestamp) {

        if (!running) {
            return;
        }

        if (
            timestamp - lastFrame <
            FRAME_TIME
        ) {

            animationFrame =
                requestAnimationFrame(
                    animate
                );

            return;
        }

        lastFrame = timestamp;

        ctx.clearRect(
            0,
            0,
            width,
            height
        );

        updateParticles();

        drawConnections();

        drawParticles();

        animationFrame =
            requestAnimationFrame(
                animate
            );
    }

    function startAnimation() {

        if (running) {
            return;
        }

        running = true;
        lastFrame = 0;

        animationFrame =
            requestAnimationFrame(
                animate
            );
    }

    function stopAnimation() {

        if (!running) {
            return;
        }

        running = false;

        if (
            animationFrame !== null
        ) {

            cancelAnimationFrame(
                animationFrame
            );

            animationFrame = null;
        }
    }

    const observer =
        new IntersectionObserver(
            (entries) => {

                const entry =
                    entries[0];

                if (
                    entry.isIntersecting
                ) {

                    startAnimation();

                } else {

                    stopAnimation();
                }
            },
            {
                threshold: 0.01
            }
        );

    resize();
    createParticles();

    observer.observe(hero);

    let resizeTimeout = null;

    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimeout
            );

            resizeTimeout =
                setTimeout(
                    () => {

                        resize();
                        createParticles();

                    },
                    150
                );
        },
        {
            passive: true
        }
    );
});
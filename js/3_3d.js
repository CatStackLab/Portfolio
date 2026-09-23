const hero4L = document.querySelectorAll(".hero3-3d");

hero4L.forEach((hero) => {

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", {
        alpha: true
    });

    hero.appendChild(canvas);

    const nodes = [];
    const pulses = [];

    const desktopNodeCount = 200;
    const mobileNodeCount = 20;

    const desktopConnectionDistance = 200;
    const mobileConnectionDistance = 130;

    const PULSE_CHANCE = 0.0033;
    const MAX_PULSES = 6;

    const FPS = 30;
    const FRAME_TIME = 1000 / FPS;

    let NODE_COUNT = desktopNodeCount;
    let CONNECTION_DISTANCE = desktopConnectionDistance;

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

        const isMobile =
            window.innerWidth <= 768;

        NODE_COUNT =
            isMobile
                ? mobileNodeCount
                : desktopNodeCount;

        CONNECTION_DISTANCE =
            isMobile
                ? mobileConnectionDistance
                : desktopConnectionDistance;

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

        createNodes();
    }

    function createNodes() {

        nodes.length = 0;
        pulses.length = 0;

        for (
            let i = 0;
            i < NODE_COUNT;
            i++
        ) {

            nodes.push({

                x:
                    Math.random() *
                    width,

                y:
                    Math.random() *
                    height,

                vx:
                    (Math.random() - 0.5) *
                    0.12,

                vy:
                    (Math.random() - 0.5) *
                    0.12,

                radius:
                    1.5 +
                    Math.random() * 2,

                pulse:
                    Math.random() *
                    Math.PI *
                    2
            });
        }
    }

    function updateNodes() {

        for (const node of nodes) {

            node.x += node.vx;
            node.y += node.vy;

            if (node.x < -30) {
                node.x = width + 30;
            }

            if (node.x > width + 30) {
                node.x = -30;
            }

            if (node.y < -30) {
                node.y = height + 30;
            }

            if (node.y > height + 30) {
                node.y = -30;
            }

            node.pulse += 0.015;
        }
    }

    function createPulse(a, b) {

        if (pulses.length >= MAX_PULSES) {
            return;
        }

        pulses.push({

            a,
            b,

            progress: 0,

            speed:
                0.008 +
                Math.random() * 0.012
        });
    }

    function updatePulses() {

        for (
            let i = pulses.length - 1;
            i >= 0;
            i--
        ) {

            const pulse =
                pulses[i];

            pulse.progress +=
                pulse.speed;

            if (
                pulse.progress >= 1
            ) {

                pulses.splice(i, 1);
            }
        }
    }

    function drawConnections() {

        const maxDistanceSquared =
            CONNECTION_DISTANCE *
            CONNECTION_DISTANCE;

        for (
            let i = 0;
            i < nodes.length;
            i++
        ) {

            const a = nodes[i];

            for (
                let j = i + 1;
                j < nodes.length;
                j++
            ) {

                const b = nodes[j];

                const dx =
                    a.x - b.x;

                const dy =
                    a.y - b.y;

                const distanceSquared =
                    dx * dx +
                    dy * dy;

                if (
                    distanceSquared >
                    maxDistanceSquared
                ) {
                    continue;
                }

                const distance =
                    Math.sqrt(
                        distanceSquared
                    );

                const strength =
                    1 -
                    distance /
                    CONNECTION_DISTANCE;

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
                    `rgba(90, 170, 255, ${strength * 0.14})`;

                ctx.lineWidth = 1;

                ctx.stroke();

                if (
                    Math.random() <
                    PULSE_CHANCE *
                    strength
                ) {

                    createPulse(a, b);
                }
            }
        }
    }

    function drawPulses() {

        for (const pulse of pulses) {

            const x =
                pulse.a.x +
                (
                    pulse.b.x -
                    pulse.a.x
                ) *
                pulse.progress;

            const y =
                pulse.a.y +
                (
                    pulse.b.y -
                    pulse.a.y
                ) *
                pulse.progress;

            const gradient =
                ctx.createRadialGradient(
                    x,
                    y,
                    0,
                    x,
                    y,
                    14
                );

            gradient.addColorStop(
                0,
                "rgba(130, 210, 255, 0.45)"
            );

            gradient.addColorStop(
                0.35,
                "rgba(100, 180, 255, 0.15)"
            );

            gradient.addColorStop(
                1,
                "rgba(100, 180, 255, 0)"
            );

            ctx.beginPath();

            ctx.arc(
                x,
                y,
                14,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                gradient;

            ctx.fill();

            ctx.beginPath();

            ctx.arc(
                x,
                y,
                2,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "rgba(160, 220, 255, 0.8)";

            ctx.fill();
        }
    }

    function drawNodes(time) {

        for (const node of nodes) {

            const pulse =
                Math.sin(
                    time * 0.0015 +
                    node.pulse
                );

            const radius =
                node.radius +
                pulse * 0.5;

            const glow =
                8 +
                radius * 3;

            const gradient =
                ctx.createRadialGradient(
                    node.x,
                    node.y,
                    0,
                    node.x,
                    node.y,
                    glow
                );

            gradient.addColorStop(
                0,
                "rgba(100, 190, 255, 0.25)"
            );

            gradient.addColorStop(
                1,
                "rgba(100, 190, 255, 0)"
            );

            ctx.beginPath();

            ctx.arc(
                node.x,
                node.y,
                glow,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                gradient;

            ctx.fill();

            ctx.beginPath();

            ctx.arc(
                node.x,
                node.y,
                radius,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "rgba(130, 200, 255, 0.65)";

            ctx.fill();
        }
    }

    function animate(time) {

        if (!running) {
            return;
        }

        if (
            time - lastFrame <
            FRAME_TIME
        ) {

            animationFrame =
                requestAnimationFrame(
                    animate
                );

            return;
        }

        lastFrame = time;

        ctx.clearRect(
            0,
            0,
            width,
            height
        );

        updateNodes();

        drawConnections();

        updatePulses();

        drawPulses();

        drawNodes(time);

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
                    },
                    150
                );
        },
        {
            passive: true
        }
    );
});
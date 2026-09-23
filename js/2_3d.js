const hero3L = document.querySelectorAll(".hero2-3d");

hero3L.forEach((hero) => {

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", {
        alpha: true
    });

    hero.appendChild(canvas);

    let width = 0;
    let height = 0;
    let time = 0;

    let points = [];
    let columns = 0;

    let animationFrame = null;
    let running = false;

    let lastFrame = 0;

    const FPS = 30;
    const FRAME_TIME = 1000 / FPS;

    const desktopPointDistance = 24;
    const mobilePointDistance = 32;

    let POINT_DISTANCE = desktopPointDistance;

    function resize() {

        width = hero.clientWidth;
        height = hero.clientHeight;

        if (!width || !height) {
            return;
        }

        const dpr = Math.min(
            window.devicePixelRatio || 1,
            1.5
        );

        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);

        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        ctx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );

        POINT_DISTANCE =
            window.innerWidth <= 768
                ? mobilePointDistance
                : desktopPointDistance;

        createPoints();
    }

    function createPoints() {

        points = [];

        columns =
            Math.ceil(width / POINT_DISTANCE) + 1;

        const rows =
            Math.ceil(height / POINT_DISTANCE) + 1;

        points.length = columns * rows;

        let index = 0;

        for (let y = 0; y < rows; y++) {

            const baseY =
                y * POINT_DISTANCE;

            for (let x = 0; x < columns; x++) {

                points[index++] = {
                    baseX: x * POINT_DISTANCE,
                    baseY: baseY,
                    x: 0,
                    y: 0,
                    fade: 0
                };
            }
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
                requestAnimationFrame(animate);

            return;
        }

        lastFrame = timestamp;

        time = timestamp * 0.001;

        ctx.clearRect(
            0,
            0,
            width,
            height
        );

        const centerX = width * 0.5;
        const halfWidth = width * 0.5;

        for (const point of points) {

            const wave =
                Math.sin(
                    point.baseX * 0.018 +
                    time * 0.8
                ) * 18;

            const wave2 =
                Math.sin(
                    point.baseY * 0.025 +
                    time * 0.6
                ) * 12;

            point.x =
                point.baseX + wave;

            point.y =
                point.baseY + wave2;

            const distance =
                Math.abs(
                    point.baseX - centerX
                );

            const fade =
                1 -
                Math.min(
                    distance / halfWidth,
                    1
                );

            point.fade = fade;

            const size =
                0.7 +
                fade * 1.1;

            ctx.beginPath();

            ctx.arc(
                point.x,
                point.y,
                size,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                `rgba(100, 180, 255, ${0.08 + fade * 0.22})`;

            ctx.fill();
        }

        for (let i = 0; i < points.length; i++) {

            const point = points[i];

            if (
                i + 1 < points.length &&
                (i + 1) % columns !== 0
            ) {

                drawLine(
                    point,
                    points[i + 1]
                );
            }

            if (
                i + columns <
                points.length
            ) {

                drawLine(
                    point,
                    points[i + columns]
                );
            }
        }

        animationFrame =
            requestAnimationFrame(animate);
    }

    function drawLine(a, b) {

        const dx =
            a.x - b.x;

        const dy =
            a.y - b.y;

        const distanceSquared =
            dx * dx +
            dy * dy;

        const opacity =
            Math.max(
                0,
                0.06 -
                Math.sqrt(distanceSquared) * 0.001
            );

        if (opacity <= 0) {
            return;
        }

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
            `rgba(90, 170, 255, ${opacity})`;

        ctx.lineWidth = 1;

        ctx.stroke();
    }

    function startAnimation() {

        if (running) {
            return;
        }

        running = true;
        lastFrame = 0;

        animationFrame =
            requestAnimationFrame(animate);
    }

    function stopAnimation() {

        if (!running) {
            return;
        }

        running = false;

        if (animationFrame !== null) {

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

                if (entry.isIntersecting) {
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
                setTimeout(() => {

                    resize();

                }, 150);
        },
        {
            passive: true
        }
    );
});
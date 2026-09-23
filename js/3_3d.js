const hero4L = document.querySelectorAll(".hero3-3d");

hero4L.forEach((hero) => {

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    hero.appendChild(canvas);

    const nodes = [];
    const pulses = [];

    const NODE_COUNT = 50;
    const CONNECTION_DISTANCE = 200;
    const PULSE_CHANCE = 0.0033;

    let width = 0;
    let height = 0;

    function resize() {

        width = hero.clientWidth;
        height = hero.clientHeight;

        const dpr = window.devicePixelRatio || 1;

        canvas.width = width * dpr;
        canvas.height = height * dpr;

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

        createNodes();
    }

    function createNodes() {

        nodes.length = 0;
        pulses.length = 0;

        for (let i = 0; i < NODE_COUNT; i++) {

            nodes.push({

                x: Math.random() * width,
                y: Math.random() * height,

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
                    Math.random() * Math.PI * 2
            });
        }
    }

    function updateNodes() {

        for (const node of nodes) {

            node.x += node.vx;
            node.y += node.vy;

            /*
             * Zawijanie krawędzi
             */

            if (node.x < -30)
                node.x = width + 30;

            if (node.x > width + 30)
                node.x = -30;

            if (node.y < -30)
                node.y = height + 30;

            if (node.y > height + 30)
                node.y = -30;

            node.pulse += 0.015;
        }
    }

    function createPulse(a, b) {

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

        for (let i = pulses.length - 1; i >= 0; i--) {

            const pulse = pulses[i];

            pulse.progress += pulse.speed;

            if (pulse.progress >= 1) {
                pulses.splice(i, 1);
            }
        }
    }

    function drawConnections() {

        for (let i = 0; i < nodes.length; i++) {

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

                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );

                if (
                    distance >
                    CONNECTION_DISTANCE
                ) {
                    continue;
                }

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

                /*
                 * Losowy impuls pomiędzy węzłami
                 */

                if (
                    Math.random() <
                    PULSE_CHANCE * strength
                ) {

                    if (pulses.length < 8) {
                        createPulse(a, b);
                    }
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

            /*
             * Glow
             */

            const gradient =
                ctx.createRadialGradient(
                    x,
                    y,
                    0,
                    x,
                    y,
                    18
                );

            gradient.addColorStop(
                0,
                "rgba(130, 210, 255, 0.45)"
            );

            gradient.addColorStop(
                0.3,
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
                18,
                0,
                Math.PI * 2
            );

            ctx.fillStyle = gradient;
            ctx.fill();

            /*
             * Rdzeń impulsu
             */

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

            /*
             * Poświata węzła
             */

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

            ctx.fillStyle = gradient;
            ctx.fill();

            /*
             * Węzeł
             */

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

        requestAnimationFrame(
            animate
        );
    }

    resize();

    requestAnimationFrame(
        animate
    );

    window.addEventListener(
        "resize",
        resize
    );
});
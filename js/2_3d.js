const hero3L = document.querySelectorAll(".hero2-3d");

hero3L.forEach((hero) => {

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    hero.appendChild(canvas);

    let width = 0;
    let height = 0;
    let time = 0;

    const POINT_DISTANCE = 20;

    let points = [];

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

        createPoints();
    }

    function createPoints() {

        points = [];

        const columns =
            Math.ceil(width / POINT_DISTANCE);

        const rows =
            Math.ceil(height / POINT_DISTANCE);

        for (let y = 0; y <= rows; y++) {

            for (let x = 0; x <= columns; x++) {

                points.push({
                    baseX: x * POINT_DISTANCE,
                    baseY: y * POINT_DISTANCE,

                    x: 0,
                    y: 0
                });
            }
        }
    }

    function animate(timestamp) {

        time = timestamp * 0.001;

        ctx.clearRect(
            0,
            0,
            width,
            height
        );

        for (const point of points) {

            /*
             * Główna fala
             */

            const wave =
                Math.sin(
                    point.baseX * 0.018 +
                    time * 0.8
                ) * 18;

            /*
             * Druga fala z innego kierunku
             */

            const wave2 =
                Math.sin(
                    point.baseY * 0.025 +
                    time * 0.6
                ) * 12;

            /*
             * Delikatne przesunięcie
             */

            point.x =
                point.baseX + wave;

            point.y =
                point.baseY + wave2;

            /*
             * Perspektywa
             */

            const distance =
                Math.abs(
                    point.baseX -
                    width / 2
                );

            const fade =
                1 -
                Math.min(
                    distance / (width / 2),
                    1
                );

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

        /*
         * Linie pomiędzy punktami
         */

        const columns =
            Math.ceil(width / POINT_DISTANCE) + 1;

        for (let i = 0; i < points.length; i++) {

            const point = points[i];

            /*
             * Połączenie z punktem po prawej
             */

            if (
                i + 1 < points.length &&
                (i + 1) % columns !== 0
            ) {

                const next =
                    points[i + 1];

                drawLine(
                    point,
                    next
                );
            }

            /*
             * Połączenie z punktem poniżej
             */

            if (
                i + columns <
                points.length
            ) {

                const next =
                    points[i + columns];

                drawLine(
                    point,
                    next
                );
            }
        }

        requestAnimationFrame(animate);
    }

    function drawLine(a, b) {

        const distance =
            Math.sqrt(
                Math.pow(a.x - b.x, 2) +
                Math.pow(a.y - b.y, 2)
            );

        const opacity =
            Math.max(
                0,
                0.06 -
                distance * 0.001
            );

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

    resize();

    requestAnimationFrame(
        animate
    );

    window.addEventListener(
        "resize",
        resize
    );
});
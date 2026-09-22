const hero = document.getElementById("hero-3d");

if (hero) {

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    hero.appendChild(canvas);

    const particles = [];

    const PARTICLE_COUNT = 45;
    const CONNECTION_DISTANCE = 130;

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

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticles() {

        particles.length = 0;

        for (let i = 0; i < PARTICLE_COUNT; i++) {

            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,

                z: Math.random(),

                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.15
            });
        }
    }

    function animate() {

        ctx.clearRect(0, 0, width, height);

        for (const particle of particles) {

            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < -20)
                particle.x = width + 20;

            if (particle.x > width + 20)
                particle.x = -20;

            if (particle.y < -20)
                particle.y = height + 20;

            if (particle.y > height + 20)
                particle.y = -20;
        }

        for (let i = 0; i < particles.length; i++) {

            const a = particles[i];

            for (let j = i + 1; j < particles.length; j++) {

                const b = particles[j];

                const dx = a.x - b.x;
                const dy = a.y - b.y;

                const distance = Math.sqrt(
                    dx * dx + dy * dy
                );

                if (distance < CONNECTION_DISTANCE) {

                    const opacity =
                        (1 - distance / CONNECTION_DISTANCE) * 0.15;

                    ctx.beginPath();

                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);

                    ctx.strokeStyle =
                        `rgba(80, 150, 255, ${opacity})`;

                    ctx.lineWidth = 1;

                    ctx.stroke();
                }
            }
        }

        for (const particle of particles) {

            const size = 1 + particle.z * 2;

            ctx.beginPath();

            ctx.arc(
                particle.x,
                particle.y,
                size,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                `rgba(100, 170, 255, ${0.2 + particle.z * 0.4})`;

            ctx.fill();
        }

        requestAnimationFrame(animate);
    }

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
        resize();
        createParticles();
    });
}
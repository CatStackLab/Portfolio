import * as THREE from
    "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";


const container = document.getElementById("background-3d");

if (!container) {
    throw new Error("Nie znaleziono #background-3d");
}

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

camera.position.z = 12;

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setClearColor(
    0x000000,
    0
);

container.appendChild(renderer.domElement);

const particleCount = 450;

const particleGeometry =
    new THREE.BufferGeometry();

const positions =
    new Float32Array(
        particleCount * 3
    );

const sizes =
    new Float32Array(
        particleCount
    );


for (let i = 0; i < particleCount; i++) {

    positions[i * 3] =
        (Math.random() - 0.5) * 22;

    positions[i * 3 + 1] =
        (Math.random() - 0.5) * 14;

    positions[i * 3 + 2] =
        (Math.random() - 0.5) * 12;

    sizes[i] =
        0.015 +
        Math.random() * 0.035;
}


particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
        positions,
        3
    )
);

particleGeometry.setAttribute(
    "size",
    new THREE.BufferAttribute(
        sizes,
        1
    )
);

const particleMaterial =
    new THREE.PointsMaterial({

        color: 0xffffff,

        size: 0.035,

        transparent: true,

        opacity: 0.38,

        sizeAttenuation: true,

        depthWrite: false

    });


const particles =
    new THREE.Points(
        particleGeometry,
        particleMaterial
    );

scene.add(particles);

const smallParticleCount = 250;

const smallGeometry =
    new THREE.BufferGeometry();

const smallPositions =
    new Float32Array(
        smallParticleCount * 3
    );


for (
    let i = 0;
    i < smallParticleCount;
    i++
) {

    smallPositions[i * 3] =
        (Math.random() - 0.5) * 28;

    smallPositions[i * 3 + 1] =
        (Math.random() - 0.5) * 18;

    smallPositions[i * 3 + 2] =
        (Math.random() - 0.5) * 18;
}


smallGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
        smallPositions,
        3
    )
);


const smallMaterial =
    new THREE.PointsMaterial({

        color: 0x4da6ff,

        size: 0.018,

        transparent: true,

        opacity: 0.22,

        sizeAttenuation: true,

        depthWrite: false

    });


const smallParticles =
    new THREE.Points(
        smallGeometry,
        smallMaterial
    );

scene.add(smallParticles);

let time = 0;


function animate() {

    requestAnimationFrame(animate);

    time += 0.003;

    particles.rotation.y += 0.00018;

    particles.rotation.x += 0.00004;


    smallParticles.rotation.y -= 0.00008;

    smallParticles.rotation.x += 0.000025;
    particles.position.y =
        Math.sin(time) * 0.12;

    particles.position.x =
        Math.cos(time * 0.7) * 0.08;

    smallParticles.position.y =
        Math.cos(time * 0.6) * 0.18;

    smallParticles.position.x =
        Math.sin(time * 0.5) * 0.12;


    renderer.render(
        scene,
        camera
    );
}


animate();


function resize() {

    const width =
        window.innerWidth;

    const height =
        window.innerHeight;


    camera.aspect =
        width / height;

    camera.updateProjectionMatrix();


    renderer.setSize(
        width,
        height
    );
}


window.addEventListener(
    "resize",
    resize
);
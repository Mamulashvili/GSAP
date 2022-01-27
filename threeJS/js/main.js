document.addEventListener('DOMContentLoaded', function () {
    let scene, camera, renderer;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);
    camera.rotation.y = 45 / 180 * Math.PI;
    camera.position.x = 5;
    camera.position.y = 10;
    camera.position.z = 10;

    hlight = new THREE.AmbientLight(0x404040, 6);
    scene.add(hlight);

    dLight = new THREE.DirectionalLight(0xffffff, 3);
    dLight.position.set(1, 1, 1);
    dLight.castShadow = true;
    scene.add(dLight);


    light = new THREE.PointLight(0x404040, 6);
    light.position.set(0, 300, 500);
    scene.add(light);

    light2 = new THREE.PointLight(0x404040, 10);
    light2.position.set(500, 100, 0);
    scene.add(light2);

    light2 = new THREE.PointLight('blue', 10);
    light2.position.set(600, 100, 0);
    scene.add(light2);

    light3 = new THREE.PointLight(0x404040, 10);
    light3.position.set(0, 100, -500);
    scene.add(light3);

    light4 = new THREE.PointLight('red', 3);
    light4.position.set(-500, 300, 0);
    scene.add(light4);


    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', renderer);

    let loader = new THREE.GLTFLoader();
    loader.load('../res/scene.gltf', function (gltf) {
        scObj = gltf.scene.children[0];
        scObj.scale.set(1, 1, 1);
        scene.add(gltf.scene);
        animate();
    })

    function animate() {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
})
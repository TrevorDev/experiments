/// <reference path="../../typings/threejs/three.d.ts" />

var $ = require('./bower_components/jquery/dist/jquery.js')

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.z = 500;
scene.add(camera);

var number = $("#hello")[0]
var object = new THREE.CSS3DObject( number );
scene.add(object);

var renderer = new THREE.CSS3DRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
  
animate();

function animate() {
  requestAnimationFrame(animate);
  object.rotation.x += 0.03;
  object.position.x += 0.5
  render();
}

function render() {
  renderer.render(scene, camera);
}
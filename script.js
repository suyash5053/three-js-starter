import * as THREE from "three"

let w = window.innerWidth
let h = window.innerHeight


const scene = new THREE.Scene()

let fov = 75
let aspect = w/h
let near = 0.1
let far = 1000

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
camera.position.z = 5

const renderer = new THREE.WebGLRenderer()
renderer.setSize(w, h)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
}

animate()
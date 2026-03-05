# THREE JS STARTER

This is a starter project for Three Js.

**Repository:** [suyash5053/three-js-starter](https://github.com/suyash5053/three-js-starter)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/suyash5053/three-js-starter
   cd three-js-starter
   ```
2. **Install dependencies**
   ```bash
   npm i
   ```
3. **Start the dev server**
   ```bash
   npx vite
   ```
4. Open the URL shown in the terminal (e.g. `http://localhost:5173`) to see the project.

## To add Extra Features

**To add orbit controls:** you can add the following code to the script.js file:
```javascript
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const controls = new OrbitControls(camera, renderer.domElement);
```

To add any 3d model (glb file) you can use the following code:
```javascript
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");

const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);

loader.load('./path/to/your/model.glb', (gltf) => {
  const model = gltf.scene;
  model.traverse((child) => {
    // code to modify the model
  });
  scene.add(model);
});
```


### Requirements:
- Node.js on your system so you can get access to npm (Node Package Manager) and npx (Node Package Runner)

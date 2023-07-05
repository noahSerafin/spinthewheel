import {useLocation} from "react-router-dom";
import "./TurntableScene.scss";
import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import React, { useState, useEffect } from "react";
//import base from '../../../assets/models/base';

const TurntableScene = () => {  
  //var [currentPage, setCurrentPage] = useState();
  useLocation();
  useEffect(() => { 
    //page listener 
      const url = window.location.href;
      const urlEnd = url.substring(url.lastIndexOf('/') + 1);
      //setCurrentPage(currentPage = urlEnd)

    // Canvas
    const canvas = document.querySelector("canvas.webgl");

    // Scene
    const scene = new THREE.Scene();

    // Objects
    //const geometry = new THREE.TorusGeometry( .8, .3, 18, 100 );
    const loader = new GLTFLoader();
    loader.load(
      '../../../assets/models/base.glb', 
      function (gltf){
      scene.add(gltf.scene)
    }, undefined, function (error) {
      console.error(error);
    });
    

    const geometry = new THREE.SphereGeometry(1, 24, 16, 1);

    // Texture Loader
    //const loader = new THREE.TextureLoader()
    //const pic = loader.load('./circ.png')

    // Materials
    /*const shadowMaterial = new THREE.MeshPhongMaterial({
        color: 0x5b5b5b
      //transparent: false
    });*/

    const  material = new THREE.MeshBasicMaterial({
        color: "rgb(214, 35, 41)",
        wireframe: true
    });

   

    // Mesh
    const sphere = new THREE.Mesh(geometry, material);
    //sphere.receiveShadow = true;
    //sphere.castShadow = true;
   
    //particlesMesh.castShadow = true;
    //sphere.rotation.x = Math.PI / 2
    sphere.position.z = 0;
    sphere.position.x = -0.2;
    sphere.position.y = -0.9;
    
    
   
    //scene.add(particlesMesh);   
    scene.add(sphere)
    

    // Lights

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));      
    });

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0.3;
    camera.position.z = 0.4;
    camera.rotateX(-0.5);
    scene.add(camera);

    // Controls
    //const controls = new OrbitControls(camera, canvas)
    // controls.enableDamping = true

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(new THREE.Color("#000"), 1);
    //renderer.shadowMap.enabled = true;

    //mouse
   // const animateParticles = (event) => {
     // mouseY = event.clientY;
      //mouseX = event.clientX;
    //};

    //document.addEventListener("mousemove", animateParticles);
   // let mouseX = 0;
    //let mouseY = 0;

    let mouseDown = false;
    //const sphereMat = new THREE.MeshNormalMaterial({ wireframe: true});

    const catchMouse = () => {
      //sphere.material = sphereMat;
      mouseDown = true;
    };
    const stopMouse = () => {
      //sphere.material = THREE.PointsMaterial
      mouseDown = false;
    };
    document.addEventListener("mousedown", catchMouse);
    document.addEventListener("mouseup", stopMouse);

    /**
     * Animate
     */

     var mrefreshinterval = 500; // update display every 500ms
     var lastmousex=-1; 
     var lastmousey=-1;
     var lastmousetime;
     var mousetravel = 0;
     document.addEventListener("mousemove", function(e) {
         var mouseX = e.pageX;
         var mouseY = e.pageY;
         if (lastmousex > -1)
             mousetravel += Math.max( Math.abs(mouseX-lastmousex), Math.abs(mouseY-lastmousey) );
         lastmousex = mouseX;
         lastmousey = mouseY;
     });

    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update objects

      /*if (mouseDown) {
        
      } else {
        sphere.rotation.y = 0.08 * elapsedTime;
      }*/
      sphere.rotation.y = elapsedTime * 0.08;
      //sphere.rotation.y = mousetravel *  0.00006;
      sphere.rotation.x = mousetravel * 0.0006;
      //particlesMesh.rotation.y = mouseX * (elapsedTime * 0.00008);
      //particlesMesh.rotation.x = mouseY * (elapsedTime * 0.00008);

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }); //, []

  return (
    <div className="background">
      <canvas id="webglCanvas" className="webgl"></canvas>
    </div>
  );
};

export default TurntableScene;
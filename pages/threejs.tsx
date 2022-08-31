import type { NextPage } from 'next'
import { useRef, useEffect } from 'react';
import * as THREE from 'three'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

import styles from '../styles/Threejs.module.css'

let scene: THREE.Scene; 
let camera: THREE.PerspectiveCamera;
let renderer: THREE.Renderer;
let controls: any; // no type for this

const ThreejsPage: NextPage = () => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();

    controls = new TrackballControls(camera, renderer.domElement);    
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;

    renderer.setSize( window.innerWidth, window.innerHeight );
    
    root?.current?.appendChild( renderer.domElement );
    
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
     
    scene.add( cube );
    camera.position.z = 5;
    
    const animate = function () {
      requestAnimationFrame( animate );

      controls.update();
      renderer?.render( scene, camera );
    };
    
    animate();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Threejs playground</h1>
      <div className={styles.three} ref={root}/>
    </div>
  )
}

export default ThreejsPage

import type { NextPage } from 'next'
import { useRef, useEffect } from 'react';
import * as THREE from 'three'

import styles from '../styles/Threejs.module.css'

let scene = null;
let camera = null;
let renderer = null;

function Threejs(): NextPage {
  const root = useRef();

  useEffect(() => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    root.current.appendChild( renderer.domElement );
    
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    
    scene.add( cube );
    camera.position.z = 5;
    
    const animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
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

export default Threejs

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import metal from './metal.jpg' ;

export default function Sphere(props) {
    const mesh = useRef();

    useFrame(() => {
        mesh.current.rotation.x =  mesh.current.rotation.z -= -0.5 * Math.PI/25 ;
    })
    const base = new THREE.TextureLoader().load(metal);

    return (
        <mesh
         
            { ...props }
            ref={ mesh }
        >
            <sphereGeometry attach='geometry' args={[1.5, 16, 16]} />
            <meshBasicMaterial 
                attach='material' color='limegreen' map={ base }
            />
        </mesh>
        
    );
}
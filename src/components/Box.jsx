import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import metal from './metal.jpg' ;

export default function Box(props) {
    const mesh = useRef();

    useFrame(() => (
            mesh.current.rotation.x = mesh.current.rotation.y += 0.05
        )
    );

    const base = new THREE.TextureLoader().load(metal);

    return (
        <mesh
            { ...props }
            ref={ mesh }
        >
            <boxGeometry args={[2, 2, 2]}/>            
            <meshBasicMaterial  attach='material' color='red' map={ base } />
        </mesh>
    )
};
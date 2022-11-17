import { useSpring, animated } from "@react-spring/three";
import * as THREE from 'three';
import metal from './metal.jpg' ;

export default function Moving() {
    const spring = useSpring({
        loop: { reverse: true },
        from: { position: [-1, 0, 0] },
        to: { position: [1, 0, 0] }
      });

      const styles = useSpring({
        loop: true,
        from: {rotateZ: 0},
        to: {rotateZ: 180},
      });


    const base = new THREE.TextureLoader().load(metal);

    return (   
        <animated.mesh position={spring.position} style={{styles}}
        >
            <torusKnotGeometry />
            <meshBasicMaterial attach='material'  map={ base } color="#FFD700" />
        </animated.mesh>
    
    )
}
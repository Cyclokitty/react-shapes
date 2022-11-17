import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from './components/Box';
import Sphere from './components/Sphere';
import Moving from './components/Moving';
import Light from './components/Light';
import Opener from './components/Opener';
import Closer from './components/Closer';
import './App.css';

function App() {
  return (
    <div className='space'>
      <Opener />
      <div><h2>A spinning cube of lava</h2></div>
      <section>
        <Canvas style={{ position: 'relative'
        }}>
          <OrbitControls />
          <ambientLight />
          <Box />
        </Canvas>
      </section>
      <div><h2>A round lime</h2></div>
      <section>
        <Canvas style={{ position: 'relative'
        }}>
          <OrbitControls />
          <Light brightness={10} color={'white'}/>
          <Sphere />
        </Canvas>
      </section>
      <div><h2>This is a Torus Knot -- it's very knotty.</h2></div>
      <section>
        <Canvas style={{ position: 'relative'
        }}>
          <OrbitControls/>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Moving />          
        </Canvas>
      </section>
      <Closer />
    </div>
  );
}

export default App;

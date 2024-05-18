import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Fox from '../../public/Fox'

function foxComponent() {

  return (
    <>
      <Canvas>
        <ambientLight intensity={2} />
        <OrbitControls
          enableZoom={false}
          rotateSpeed={2}
          autoRotate={true}
          autoRotateSpeed={0.25}
        />
        <Suspense fallback={null}>
          <Fox 
          position={[-3, -2, -3]}
          // rotation={[Math.PI / -0.1, -0.5, 0.5]}
          scale={[0.5, 0.5, 0.5]}
        />
          </Suspense>
        <Environment preset='sunset' />
      </Canvas>
    </>
  )
}

export default foxComponent;
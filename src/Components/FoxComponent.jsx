import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Fox from '../../public/Fox'

function foxComponent() {

    return (
        <>
        <Canvas>
        <ambientLight intensity={2} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Fox />
        </Suspense>
        <Environment preset='sunset' />
      </Canvas>
        </>
    )
}

export default foxComponent;
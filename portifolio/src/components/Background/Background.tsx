import { Canvas } from '@react-three/fiber'
import Scene from './Scene'
import './Background.css'

function Background() {
  return (
    <div className="bg-fx" aria-hidden="true">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }}
        eventSource={document.getElementById('root') ?? undefined}
        eventPrefix="client"
      >
        <Scene />
      </Canvas>
    </div>
  )
}

export default Background

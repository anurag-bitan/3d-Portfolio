import { Html } from '@react-three/drei';


const Loader = () => {
  return (
    <Html>
    <div className="flex items-center justify-center">
        <div className = "w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin" />
        <p className="text-white text-lg ml-4"></p>
      
    </div>
    </Html>
  )
}

export default Loader

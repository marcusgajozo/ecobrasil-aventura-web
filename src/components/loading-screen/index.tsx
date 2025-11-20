import { motion } from 'motion/react'

interface LoadingScreenProps {
  started: boolean
  progress: number
}

export function LoadingScreen({ started, progress }: LoadingScreenProps) {
  return (
    <motion.div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white ${
        started ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
      animate={{ opacity: started ? 0 : 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <h2 className="mb-4 text-2xl tracking-wider">Carregando Ilhas...</h2>

      <div className="h-3 w-64 overflow-hidden rounded-full border border-gray-700 bg-gray-800">
        <motion.div
          className="h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2, ease: 'linear' }}
        />
      </div>

      <p className="mt-2 font-mono text-sm text-gray-400">
        {progress.toFixed(0)}%
      </p>
    </motion.div>
  )
}

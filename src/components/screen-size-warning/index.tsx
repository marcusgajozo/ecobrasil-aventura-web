import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const MIN_WIDTH = 890

const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

const isTouchDevice = () => {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-expect-error - msMaxTouchPoints exists in IE/Edge
    navigator.msMaxTouchPoints > 0
  )
}

export function ScreenSizeWarning() {
  const [shouldShowWarning, setShouldShowWarning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const mobile = isMobileDevice() || isTouchDevice()
      const smallScreen = window.innerWidth < MIN_WIDTH

      setIsMobile(mobile)
      setShouldShowWarning(mobile || smallScreen)
    }

    checkDevice()

    window.addEventListener('resize', checkDevice)

    return () => {
      window.removeEventListener('resize', checkDevice)
    }
  }, [])

  if (!shouldShowWarning) {
    return null
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="from-primary-500 to-primary-800 fixed inset-0 z-[999999] flex h-screen w-screen items-center justify-center bg-gradient-to-br p-5"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full max-w-md rounded-3xl bg-white p-12 text-center shadow-2xl"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-primary-500 mb-6 flex justify-center"
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </motion.div>

          <h1 className="text-primary-500 mb-4 text-4xl">
            {isMobile ? 'Dispositivo não compatível' : 'Tela muito pequena'}
          </h1>

          <p className="font-secondary mb-6 text-base leading-relaxed text-gray-600">
            {isMobile ? (
              <>
                Este jogo requer um{' '}
                <strong className="text-primary-500 font-semibold">
                  teclado
                </strong>{' '}
                para movimentar o personagem usando as teclas{' '}
                <strong className="text-primary-500 font-semibold">
                  W, A, S, D
                </strong>{' '}
                e outras teclas de controle.
                <br />
                <br />
                Por favor, acesse em um computador desktop ou notebook.
              </>
            ) : (
              <>
                Para a melhor experiência, este jogo precisa ser jogado em um
                computador com monitor de pelo menos{' '}
                <strong className="text-primary-500 font-semibold">
                  {MIN_WIDTH}px de largura
                </strong>
                .
              </>
            )}
          </p>

          {isMobile ? (
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="font-secondary border-warning-200 bg-warning-50 text-warning-700 mb-6 rounded-xl border-2 p-4 text-sm"
            >
              <div className="mb-2 text-base font-bold">
                Controles necessários:
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <kbd className="rounded bg-white px-2 py-1 text-xs font-bold shadow">
                  W
                </kbd>
                <kbd className="rounded bg-white px-2 py-1 text-xs font-bold shadow">
                  A
                </kbd>
                <kbd className="rounded bg-white px-2 py-1 text-xs font-bold shadow">
                  S
                </kbd>
                <kbd className="rounded bg-white px-2 py-1 text-xs font-bold shadow">
                  D
                </kbd>
                <kbd className="rounded bg-white px-2 py-1 text-xs font-bold shadow">
                  SPACE
                </kbd>
                <kbd className="rounded bg-white px-2 py-1 text-xs font-bold shadow">
                  E
                </kbd>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="font-secondary mb-6 rounded-xl border-2 border-gray-200 bg-gray-50 p-4 text-sm text-gray-600"
            >
              Largura atual:{' '}
              <span className="text-destructive-500 text-lg font-bold">
                {window.innerWidth}px
              </span>
            </motion.div>
          )}

          <div className="border-t-2 border-gray-200 pt-6">
            <p className="font-secondary m-0 text-sm text-gray-500">
              {isMobile
                ? 'Use um computador para jogar ⌨️'
                : 'Por favor, acesse em um dispositivo com tela maior 🖥️'}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

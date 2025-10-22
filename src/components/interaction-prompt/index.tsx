import { cn } from '@/lib/utils/utils'
import styles from './styles/styles.module.css'

interface InteractionPromptProps {
  title: string
  descriptionAction?: string
  keyboardKey?: string
  isLoading?: boolean
}

export function InteractionPrompt({
  title,
  descriptionAction,
  keyboardKey,
  isLoading,
}: InteractionPromptProps) {
  return (
    <div
      className={cn(
        'font-primary bg-primary flex min-w-max flex-col items-center justify-center rounded-md p-3 text-white select-none',
        styles.borderNeon
      )}
    >
      <span className="text-2xl">{title}</span>
      {descriptionAction && (
        <div className="text-primary flex flex-col items-center rounded-md bg-white p-2 text-xl">
          {keyboardKey && (
            <span>
              Aperte{' '}
              <span className="bg-success animate-pulse rounded-sm px-2 shadow">
                {keyboardKey}
              </span>{' '}
              !
            </span>
          )}
          <span className="leading-5">{descriptionAction}</span>
        </div>
      )}
      {isLoading && <span className="mt-2 text-sm">Carregando...</span>}
    </div>
  )
}

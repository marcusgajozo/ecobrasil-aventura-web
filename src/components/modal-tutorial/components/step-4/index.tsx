import teleportationPng from '@images/teleportation.png'

export function Step4() {
  return (
    <div className="flex items-center gap-8">
      <div className="w-60">
        <img src={teleportationPng} alt="Teletransporte" />
      </div>
      <div>
        <div>
          <h2 className="text-3xl">Encontre o teletransporte</h2>
          <p className="w-100">
            Depois de responder corretamente à caixa de perguntas, o
            teletransporte será desbloqueado. Use-o para viajar entre as ilhas e
            continuar sua aventura ecológica!
          </p>
        </div>
        <div>
          <h2 className="mt-4 text-3xl">Aproveite a aventura!</h2>
        </div>
      </div>
    </div>
  )
}

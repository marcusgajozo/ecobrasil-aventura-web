import boxQuestionPng from '@images/box-question.png'

export function Step3() {
  return (
    <div className="flex items-center gap-8">
      <div className="w-60">
        <img src={boxQuestionPng} alt="Caixa de perguntas" />
      </div>
      <div>
        <div>
          <h2 className="text-3xl">Encontre a caixa de perguntas</h2>
          <p className="w-100">
            Procure pela caixa de perguntas para responder e avançar no jogo,
            cada ilha possui uma caixa de perguntas única. Reponda corretamente
            para salvar a ilha e desbloquear o teletransporte.
          </p>
        </div>
      </div>
    </div>
  )
}

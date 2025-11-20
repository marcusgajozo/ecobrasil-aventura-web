import robotPng from '@images/robot.png'

export function Step1() {
  return (
    <div className="flex items-center gap-1">
      <div className="w-40">
        <img src={robotPng} alt="Robot" />
      </div>
      <div>
        <div>
          <h2 className="text-3xl">Bem-vindo ao EcoBrasil Aventura!</h2>
          <p>Esse é o primeiro passo para aprender a jogar.</p>
        </div>
        <div>
          <h3 className="mt-4 text-2xl">Olá, meu nome é BIO!</h3>
          <p>Eu vou te ajudar a entender como jogar.</p>
        </div>
        <div>
          <h3 className="mt-4 text-2xl">Objetivo do jogo</h3>
          <p>Preservar o meio ambiente enquanto se diverte.</p>
        </div>
      </div>
    </div>
  )
}

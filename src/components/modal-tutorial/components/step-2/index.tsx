import keysPng from '@images/keys.png'

export function Step2() {
  return (
    <div className="flex items-center gap-8">
      <div className="w-60">
        <img src={keysPng} alt="Keys" />
      </div>
      <div>
        <div>
          <h2 className="text-3xl">Controlando o personagem BIO</h2>
          <p>Use as teclas para mover o personagem pelo ambiente.</p>
        </div>
        <div>
          <h3 className="mt-4 text-2xl">W - Mover para frente</h3>
          <h3 className="text-2xl">A - Mover para esquerda</h3>
          <h3 className="text-2xl">S - Mover para trás</h3>
          <h3 className="text-2xl">D - Mover para direita</h3>
          <h3 className="text-2xl">E - Rotaciona a camera para direita</h3>
          <h3 className="text-2xl">Q - Rotaciona a camera para esquerda</h3>
          <h3 className="text-2xl">
            F - Executa uma ação com o personagem BIO
          </h3>
        </div>
      </div>
    </div>
  )
}

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { animated } from '@react-spring/three'
import { useAnimations, useGLTF } from '@react-three/drei'
import { GroupProps, useGraph } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import { SkeletonUtils } from 'three-stdlib'

import { useTeleportCharacter } from '@/lib/hooks/use-teleport-character'
import robot from '@models/robot.glb'

type CharacterModelProps = {
  animation?: string
  color?: string
} & GroupProps

const CharacterModel = ({
  animation = 'RobotArmature|Robot_Idle',
  ...props
}: CharacterModelProps) => {
  const group = useRef(null)
  const { scene, animations } = useGLTF(robot)
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  const { animationTeleport } = useTeleportCharacter()

  useEffect(() => {
    if (actions[animation]) actions[animation].reset().fadeIn(0.5).play()

    return () => {
      if (actions[animation]) actions[animation].fadeOut(0.5)
    }
  }, [actions, animation])

  return (
    <animated.group scale={animationTeleport.scale}>
      <group ref={group} {...props} dispose={null}>
        <group name="Root_Scene">
          <group name="RootNode">
            <group
              name="RobotArmature"
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            >
              <primitive object={nodes.Bone} />
            </group>
            <group
              name="HandR"
              position={[-0.003, 2.37, -0.021]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            >
              <skinnedMesh
                name="HandR_1"
                geometry={nodes.HandR_1.geometry}
                material={materials.Main}
                skeleton={nodes.HandR_1.skeleton}
              />

              <skinnedMesh
                name="HandR_2"
                geometry={nodes.HandR_2.geometry}
                material={materials.Grey}
                skeleton={nodes.HandR_2.skeleton}
              />
            </group>
            <group
              name="HandL"
              position={[-0.003, 2.37, -0.021]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            >
              <skinnedMesh
                name="HandL_1"
                geometry={nodes.HandL_1.geometry}
                material={materials.Main}
                skeleton={nodes.HandL_1.skeleton}
              />
              <skinnedMesh
                name="HandL_2"
                geometry={nodes.HandL_2.geometry}
                material={materials.Grey}
                skeleton={nodes.HandL_2.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </animated.group>
  )
}

useGLTF.preload(robot)

export default CharacterModel

import { RigidBody, RigidBodyProps } from '@react-three/rapier'

type FixedElementProps = { children: React.ReactNode } & Omit<
  RigidBodyProps,
  'type'
>

export const FixedElement = ({
  children,
  colliders = false,
  ...rigidBodyProps
}: FixedElementProps) => {
  return (
    <RigidBody type="fixed" colliders={colliders} {...rigidBodyProps}>
      {children}
    </RigidBody>
  )
}

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface BrightenOptions {
  /**
   * Cor de emissão do material (hex). Ex: 0x333333 para cinza escuro
   * @default 0x333333
   */
  emissiveColor?: number;

  /**
   * Intensidade da emissão (0-1). Quanto maior, mais brilho próprio
   * @default 0.2
   */
  emissiveIntensity?: number;

  /**
   * Rugosidade da superfície (0-1). Menor = mais reflexivo
   * @default 0.2
   */
  roughness?: number;

  /**
   * Nivel metálico (0-1). Menor = menos escuro
   * @default 0.05
   */
  metalness?: number;

  /**
   * Intensidade da reflexão do ambiente
   * @default 1.5
   */
  envMapIntensity?: number;

  /**
   * Intensidade da oclusão ambiente (0-1). Menor = menos sombras nas dobras
   * @default 0.2
   */
  aoMapIntensity?: number;

  /**
   * Intensidade da resposta à luz (>1 = mais sensível)
   * @default 1.2
   */
  lightMapIntensity?: number;
}

/**
 * Função utilitária para aplicar configurações de brilho a um material
 */
export const applyBrightenToMaterial = (
  material: THREE.MeshStandardMaterial,
  options: BrightenOptions = {}
) => {
  const {
    emissiveColor = 0x333333,
    emissiveIntensity = 0.2,
    roughness = 0.2,
    metalness = 0.05,
    envMapIntensity = 1.5,
    aoMapIntensity = 0.2,
    lightMapIntensity = 1.2,
  } = options;

  // Configurar emissão para brilho próprio
  material.emissive = new THREE.Color(emissiveColor);
  material.emissiveIntensity = emissiveIntensity;

  // Ajustar propriedades de superfície
  material.roughness = Math.max(roughness, material.roughness || 1);
  material.metalness = Math.min(metalness, material.metalness || 0);

  // Intensificar reflexões do ambiente
  material.envMapIntensity = envMapIntensity;

  // Reduzir sombras internas (oclusão ambiente)
  if (material.aoMapIntensity !== undefined) {
    material.aoMapIntensity = aoMapIntensity;
  }

  // Aumentar sensibilidade à iluminação
  if (material.lightMapIntensity !== undefined) {
    material.lightMapIntensity = lightMapIntensity;
  }

  material.needsUpdate = true;
};

/**
 * Hook para clarear modelos 3D ajustando propriedades do material
 * sem alterar a textura original
 */
export const useBrightenModel = (options: BrightenOptions = {}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const {
    emissiveColor = 0x333333,
    emissiveIntensity = 0.2,
    roughness = 0.2,
    metalness = 0.05,
    envMapIntensity = 1.5,
    aoMapIntensity = 0.2,
    lightMapIntensity = 1.2,
  } = options;

  useEffect(() => {
    if (meshRef.current && meshRef.current.material) {
      const material = meshRef.current.material as THREE.MeshStandardMaterial;

      // Configurar emissão para brilho próprio
      material.emissive = new THREE.Color(emissiveColor);
      material.emissiveIntensity = emissiveIntensity;

      // Ajustar propriedades de superfície
      material.roughness = Math.max(roughness, material.roughness || 1);
      material.metalness = Math.min(metalness, material.metalness || 0);

      // Intensificar reflexões do ambiente
      material.envMapIntensity = envMapIntensity;

      // Reduzir sombras internas (oclusão ambiente)
      if (material.aoMapIntensity !== undefined) {
        material.aoMapIntensity = aoMapIntensity;
      }

      // Aumentar sensibilidade à iluminação
      if (material.lightMapIntensity !== undefined) {
        material.lightMapIntensity = lightMapIntensity;
      }

      material.needsUpdate = true;
    }
  }, [
    emissiveColor,
    emissiveIntensity,
    roughness,
    metalness,
    envMapIntensity,
    aoMapIntensity,
    lightMapIntensity,
  ]);

  return { meshRef };
};

/**
 * Hook para modelos complexos com múltiplos materiais
 * Aplica configurações de brilho a todos os materiais fornecidos
 */
export const useBrightenComplexModel = (
  materials: Record<string, THREE.MeshStandardMaterial>,
  options: BrightenOptions = {}
) => {
  useEffect(() => {
    Object.values(materials).forEach((material) => {
      if (material && material instanceof THREE.MeshStandardMaterial) {
        applyBrightenToMaterial(material, options);
      }
    });
  }, [materials, options]);
};

// Presets para diferentes tipos de animais
export const animalBrightenPresets = {
  /**
   * Para animais aquáticos (jacaré, peixe, etc.)
   * Simula pele úmida e reflexiva
   */
  aquatic: {
    emissiveColor: 0x444444,
    emissiveIntensity: 0.25,
    roughness: 0.15,
    metalness: 0.03,
    envMapIntensity: 2.0,
  } as BrightenOptions,

  /**
   * Para animais terrestres (capivara, ema, etc.)
   * Brilho mais sutil e natural
   */
  terrestrial: {
    emissiveColor: 0x333333,
    emissiveIntensity: 0.2,
    roughness: 0.25,
    metalness: 0.05,
    envMapIntensity: 1.5,
  } as BrightenOptions,

  /**
   * Para aves (tuiuiú, papagaio, etc.)
   * Destaque para penas com brilho suave
   */
  bird: {
    emissiveColor: 0x444444,
    emissiveIntensity: 0.15,
    roughness: 0.3,
    metalness: 0.02,
    envMapIntensity: 1.8,
  } as BrightenOptions,

  /**
   * Para répteis (cobra, lagarto, etc.)
   * Simula escamas com reflexos
   */
  reptile: {
    emissiveColor: 0x555555,
    emissiveIntensity: 0.3,
    roughness: 0.1,
    metalness: 0.08,
    envMapIntensity: 2.2,
  } as BrightenOptions,

  /**
   * Para vegetação (árvores, flores, etc.)
   * Brilho mais natural e orgânico
   */
  vegetation: {
    emissiveColor: 0x2a4a2a,
    emissiveIntensity: 0.1,
    roughness: 0.4,
    metalness: 0.01,
    envMapIntensity: 1.2,
  } as BrightenOptions,
};

export interface ProjectorModel {
  id: string;
  name: string;
  type: string;
  power: number;
  lumens: number;
  minDistance: number;
  maxDistance: number;
  lenses: LensOption[];
}

export interface LensOption {
  id: string;
  name: string;
  angle: number;
  minDistance: number;
  maxDistance: number;
  optimalDistance: number;
}

export interface CalculationResult {
  projector: ProjectorModel;
  lens: LensOption;
  distance: number;
  diameter: number;
  intensity: number;
  status: 'optimal' | 'adjustable' | 'not-recommended';
  efficiency: number;
}

export const projectorModels: ProjectorModel[] = [
  {
    id: 'ml-pro-30',
    name: 'Magic-Lum Pro 30W',
    type: 'LED',
    power: 30,
    lumens: 3000,
    minDistance: 2,
    maxDistance: 20,
    lenses: [
      { id: 'wide-15', name: 'Wide 15°', angle: 15, minDistance: 2, maxDistance: 8, optimalDistance: 5 },
      { id: 'medium-25', name: 'Medium 25°', angle: 25, minDistance: 3, maxDistance: 12, optimalDistance: 7 },
      { id: 'narrow-35', name: 'Narrow 35°', angle: 35, minDistance: 5, maxDistance: 20, optimalDistance: 12 }
    ]
  },
  {
    id: 'ml-pro-50',
    name: 'Magic-Lum Pro 50W',
    type: 'LED',
    power: 50,
    lumens: 5000,
    minDistance: 3,
    maxDistance: 30,
    lenses: [
      { id: 'wide-12', name: 'Wide 12°', angle: 12, minDistance: 3, maxDistance: 10, optimalDistance: 6 },
      { id: 'medium-20', name: 'Medium 20°', angle: 20, minDistance: 4, maxDistance: 15, optimalDistance: 9 },
      { id: 'narrow-30', name: 'Narrow 30°', angle: 30, minDistance: 6, maxDistance: 25, optimalDistance: 15 },
      { id: 'ultra-narrow-45', name: 'Ultra Narrow 45°', angle: 45, minDistance: 8, maxDistance: 30, optimalDistance: 20 }
    ]
  },
  {
    id: 'ml-pro-80',
    name: 'Magic-Lum Pro 80W',
    type: 'LED',
    power: 80,
    lumens: 8000,
    minDistance: 5,
    maxDistance: 50,
    lenses: [
      { id: 'wide-10', name: 'Wide 10°', angle: 10, minDistance: 5, maxDistance: 15, optimalDistance: 10 },
      { id: 'medium-18', name: 'Medium 18°', angle: 18, minDistance: 6, maxDistance: 25, optimalDistance: 15 },
      { id: 'narrow-25', name: 'Narrow 25°', angle: 25, minDistance: 8, maxDistance: 35, optimalDistance: 20 },
      { id: 'ultra-narrow-40', name: 'Ultra Narrow 40°', angle: 40, minDistance: 12, maxDistance: 50, optimalDistance: 30 }
    ]
  },
  {
    id: 'ml-ultra-120',
    name: 'Magic-Lum Ultra 120W',
    type: 'LED',
    power: 120,
    lumens: 12000,
    minDistance: 8,
    maxDistance: 80,
    lenses: [
      { id: 'wide-8', name: 'Wide 8°', angle: 8, minDistance: 8, maxDistance: 20, optimalDistance: 14 },
      { id: 'medium-15', name: 'Medium 15°', angle: 15, minDistance: 10, maxDistance: 35, optimalDistance: 22 },
      { id: 'narrow-22', name: 'Narrow 22°', angle: 22, minDistance: 15, maxDistance: 50, optimalDistance: 32 },
      { id: 'ultra-narrow-35', name: 'Ultra Narrow 35°', angle: 35, minDistance: 20, maxDistance: 80, optimalDistance: 50 }
    ]
  }
];

export const environmentFactors = {
  indoor: 1.0,
  'semi-outdoor': 0.8,
  outdoor: 0.6
};

export const applicationFactors = {
  decorative: 0.7,
  branding: 1.0,
  architectural: 1.2,
  artistic: 0.9
};
import { ProjectorModel, LensOption, CalculationResult, projectorModels, environmentFactors, applicationFactors } from './calculator-data';

export interface CalculatorInputs {
  distance: number;
  desiredDiameter: number;
  environment: keyof typeof environmentFactors;
  application: keyof typeof applicationFactors;
  mode: 'standard' | 'inverse';
}

export function calculateProjectorRecommendations(inputs: CalculatorInputs): CalculationResult[] {
  const results: CalculationResult[] = [];
  const envFactor = environmentFactors[inputs.environment];
  const appFactor = applicationFactors[inputs.application];

  for (const projector of projectorModels) {
    for (const lens of projector.lenses) {
      const result = calculateSingleResult(projector, lens, inputs, envFactor, appFactor);
      if (result) {
        results.push(result);
      }
    }
  }

  // Sort by efficiency (best recommendations first)
  return results.sort((a, b) => b.efficiency - a.efficiency);
}

function calculateSingleResult(
  projector: ProjectorModel,
  lens: LensOption,
  inputs: CalculatorInputs,
  envFactor: number,
  appFactor: number
): CalculationResult | null {
  const { distance, desiredDiameter, mode } = inputs;

  // Calculate projected diameter at given distance
  const projectedDiameter = calculateProjectedDiameter(distance, lens.angle);
  
  // Calculate intensity (lux) at the projection surface
  const baseIntensity = projector.lumens / (Math.PI * Math.pow(projectedDiameter / 2, 2));
  const adjustedIntensity = baseIntensity * envFactor * appFactor;

  // For inverse mode, we check if we can achieve the desired diameter
  if (mode === 'inverse') {
    const requiredDistance = calculateRequiredDistance(desiredDiameter, lens.angle);
    if (requiredDistance < lens.minDistance || requiredDistance > lens.maxDistance) {
      return null; // Not feasible with this lens
    }
  }

  // Check if distance is within lens capabilities
  if (distance < lens.minDistance || distance > lens.maxDistance) {
    return null;
  }

  // Calculate efficiency and status
  const diameterMatch = Math.abs(projectedDiameter - desiredDiameter) / desiredDiameter;
  const distanceOptimality = calculateDistanceOptimality(distance, lens);
  const efficiency = calculateEfficiency(diameterMatch, distanceOptimality, adjustedIntensity);
  const status = getRecommendationStatus(efficiency, diameterMatch);

  return {
    projector,
    lens,
    distance: mode === 'inverse' ? calculateRequiredDistance(desiredDiameter, lens.angle) : distance,
    diameter: mode === 'inverse' ? desiredDiameter : projectedDiameter,
    intensity: adjustedIntensity,
    status,
    efficiency
  };
}

function calculateProjectedDiameter(distance: number, lensAngle: number): number {
  // Convert angle from degrees to radians
  const angleRad = (lensAngle * Math.PI) / 180;
  // Calculate diameter using trigonometry
  return 2 * distance * Math.tan(angleRad / 2);
}

function calculateRequiredDistance(desiredDiameter: number, lensAngle: number): number {
  // Convert angle from degrees to radians
  const angleRad = (lensAngle * Math.PI) / 180;
  // Calculate required distance
  return (desiredDiameter / 2) / Math.tan(angleRad / 2);
}

function calculateDistanceOptimality(distance: number, lens: LensOption): number {
  // Calculate how close the distance is to the optimal distance (0-1 scale)
  const distanceFromOptimal = Math.abs(distance - lens.optimalDistance);
  const maxDeviation = Math.max(
    lens.optimalDistance - lens.minDistance,
    lens.maxDistance - lens.optimalDistance
  );
  return Math.max(0, 1 - (distanceFromOptimal / maxDeviation));
}

function calculateEfficiency(diameterMatch: number, distanceOptimality: number, intensity: number): number {
  // Weighted efficiency calculation
  const diameterScore = Math.max(0, 1 - diameterMatch); // Better when diameter matches
  const distanceScore = distanceOptimality; // Better when at optimal distance
  const intensityScore = Math.min(1, intensity / 1000); // Normalize intensity (assuming 1000 lux is good)
  
  // Weighted average
  return (diameterScore * 0.4 + distanceScore * 0.3 + intensityScore * 0.3) * 100;
}

function getRecommendationStatus(efficiency: number, diameterMatch: number): 'optimal' | 'adjustable' | 'not-recommended' {
  if (efficiency >= 80 && diameterMatch < 0.1) {
    return 'optimal';
  } else if (efficiency >= 60 && diameterMatch < 0.3) {
    return 'adjustable';
  } else {
    return 'not-recommended';
  }
}

export function formatNumber(num: number, decimals: number = 1): string {
  return num.toFixed(decimals);
}
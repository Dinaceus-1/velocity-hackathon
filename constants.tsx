
import { ImpactProject } from './types';

export const IMPACT_PROJECTS: ImpactProject[] = [
  {
    id: '1',
    projectCode: 'FOREST',
    name: 'Amazon Reforestation',
    category: 'Environment',
    costPerOutcome: 12.50,
    unitName: 'Trees Planted',
    efficiencyRating: 98,
    description: 'Direct capital for indigenous-led planting programs in the Amazon basin.',
    totalOutcomes: 1245000,
    fundingTarget: '$15.5M'
  },
  {
    id: '2',
    projectCode: 'READ',
    name: 'Rural Literacy Initiative',
    category: 'Education',
    costPerOutcome: 45.00,
    unitName: 'Months of Schooling',
    efficiencyRating: 92,
    description: 'Providing digital learning kits and trained educators to remote villages.',
    totalOutcomes: 89000,
    fundingTarget: '$4.0M'
  },
  {
    id: '3',
    projectCode: 'CLEAN',
    name: 'Ocean Plastic Recovery',
    category: 'Environment',
    costPerOutcome: 2.20,
    unitName: 'KG of Plastic Removed',
    efficiencyRating: 95,
    description: 'Autonomous barrier systems capturing ocean-bound plastic in major rivers.',
    totalOutcomes: 3400000,
    fundingTarget: '$7.4M'
  },
  {
    id: '4',
    projectCode: 'WATER',
    name: 'Clean Water Access',
    category: 'Infrastructure',
    costPerOutcome: 150.00,
    unitName: 'People Served Yearly',
    efficiencyRating: 89,
    description: 'Borehole construction and solar-powered filtration in drought-prone areas.',
    totalOutcomes: 12000,
    fundingTarget: '$1.8M'
  }
];

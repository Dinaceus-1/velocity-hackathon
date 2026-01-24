
export interface ImpactProject {
  id: string;
  projectCode: string;
  name: string;
  category: 'Environment' | 'Education' | 'Health' | 'Infrastructure';
  costPerOutcome: number;
  unitName: string;
  efficiencyRating: number;
  description: string;
  totalOutcomes: number;
  fundingTarget: string;
}

export interface PortfolioItem {
  project: ImpactProject;
  unitsContributed: number;
  totalDonated: number;
}

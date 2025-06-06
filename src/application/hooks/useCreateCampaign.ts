import { useState } from 'react';
import { campaignService } from '../services/campaignService';

interface CampaignInput {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  budget: number;
}

export const useCreateCampaign = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [createdCampaign, setCreatedCampaign] = useState<any>(null);

  const createCampaign = async (input: CampaignInput) => {
    setLoading(true);
    setError(null);

    try {
      const result = await campaignService.createCampaign(input);
      setCreatedCampaign(result);
      return result;
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return {
    createCampaign,
    loading,
    error,
    createdCampaign,
  };
};

import axios from 'axios';

const API_URL = '/api/campaigns';

export const campaignService = {
  createCampaign: async (data: any) => {
    const response = await axios.post(API_URL, data);
    return response.data;
  },
};

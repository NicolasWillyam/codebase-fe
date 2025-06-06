import { useState } from 'react';
import { authService } from '../services/authService';

export const useFormLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await authService.login(email, password);
      return result;
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
    error,
  };
};

import { supabase } from '../lib/supabase';

export const saveResult = async (userId: string, moonSign: string) => {
  try {
    const { error } = await supabase
      .from('moon_sign_results')
      .insert([
        {
          user_id: userId,
          moon_sign: moonSign,
          calculated_at: new Date().toISOString(),
        },
      ]);

    if (error) throw error;
  } catch (error) {
    console.error('Error saving result:', error);
    throw error;
  }
};

export const getUserResults = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('moon_sign_results')
      .select('*')
      .eq('user_id', userId)
      .order('calculated_at', { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching results:', error);
    throw error;
  }
};
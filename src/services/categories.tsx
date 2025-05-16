import { supabase } from "../supabase/supabase";

export const getAllCategories = async () => {
    const { data, error } = await supabase
        .from('categories')
        .select('*');

    if (error) throw new Error(error.message);

    return data;
};

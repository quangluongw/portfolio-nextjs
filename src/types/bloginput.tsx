export type Inputs = {
  id: string;
  title: string;
  image: string;
  description: string;
  longdescription: string;
  category_id: string;
  slug: string;
};
export type dataBlog = {
  data: Inputs[] ;
  totalPages: number;
  page: number;
};

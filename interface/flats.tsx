export interface FlatProps {
  id: number;
  attributes: {
    images: {
      data: {
        id: number;
        attributes: {
          name: string;
          url: string;
        };
      }[];
    };
    name: string;
    address: string;
    city: string;
    state: string;
    BHK: string;
    area: string;
    yt_link: string;
    description: string;
    project_type: string;
  };
}

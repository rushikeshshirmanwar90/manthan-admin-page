export interface LeadProps {
  id: number;
  attributes: {
    assign: string;
    user_id: string;
    flat_id: number;
    user_name: string;
    flat_name: string;
    channel_partner: string;
    phone_number: string;
    createdAt : string
  };
}

export interface staffProps {
  id: number;
  attributes: {
    name: string;
    number: number;
    email: string;
  };
}

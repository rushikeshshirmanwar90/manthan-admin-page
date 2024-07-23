export interface clientLeadProps {
  id: number;
  attributes: {
    user_id: string;
    flat_id: number;
    user_name: string;
    flat_name: string;
  };
}

export interface brokerLeadProps {
  id: number;
  attributes: {
    flatId: string;
    brokerId: string;
    brokerName: string;
    leadName: string;
    leadNumber: string;
    flat_name: string;
  };
}

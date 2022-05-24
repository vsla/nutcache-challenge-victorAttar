export type TeamInterface = "FrontEnd" | "BackEnd" | "Mobile" | null;
export type GenderType = "Male" | "Female";

export interface UserInterface {
  _id: number;
  name: string;
  birthDate: Date;
  Gender: GenderType;
  Email: string;
  CPF: string;
  StartDate: Date;
  Team: TeamInterface;
}

export interface UserFormInterface {
  name: string;
  birthDate: Date | string;
  Gender: GenderType | "";
  Email: string;
  CPF: string;
  StartDate: Date | string;
  Team: TeamInterface | "";
}

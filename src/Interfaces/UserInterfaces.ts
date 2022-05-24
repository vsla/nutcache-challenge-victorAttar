export type TeamInterface = "FrontEnd" | "BackEnd" | "Mobile" | null;
export type GenderType = "Male" | "Female";
export type ModalType = "EDIT" | "CREATE";

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

export interface EditUserPayloadInterface {
  _id?: number | null;
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

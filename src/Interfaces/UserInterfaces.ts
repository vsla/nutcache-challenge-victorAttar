export interface UserInterface {
  _id: number;
  name: string;
  birthDate: Date;
  Gender: "Male" | "Female";
  Email: string;
  CPF: string;
  StartDate: Date;
  Team: "FrontEnd" | "BackEnd" | "Mobile" | null;
}

export interface UserInterface {
  id: number;
  name: string;
  birthDate: Date;
  Gender: "Male" | "Female";
  Email: string;
  CPF: string;
  StartDate: Date;
  Team: "FrontEnd" | "BackEnd" | "Mobile" | null;
}

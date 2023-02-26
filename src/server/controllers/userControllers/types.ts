export interface PreferedStructure {
  simulator: string[];
  car: string[];
  circuit: string[];
}

export interface UserStructure {
  username: string;
  name: string;
  lastname: string;
  password: string;
  age: number;
  language: string;
  simulators: string;
  prefered: PreferedStructure;
  confidence: number;
  comunities: string;
  avatar: string;
}

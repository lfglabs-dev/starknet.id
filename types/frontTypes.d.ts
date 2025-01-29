export type ClickableIconProps = {
  socialId: string;
};

export type IconProps = {
  height?: string;
  width?: string;
  color?: string;
};

type Step = {
  title: string;
  icon: string;
  banner: string;
  content: ReactNode;
};

export interface IdentityData {
  id: string;
  owner: string;
  main: boolean;
  creation_date: number;
  domain?: Domain;
  user_data: UserData[];
  verifier_data: VerifierData[];
  extended_verifier_data: ExtendedVerifierData[];
}

interface Domain {
  domain: string;
  migrated: boolean;
  root: boolean;
  creation_date: number;
  expiry?: number;
  resolver?: string;
  legacy_address?: string;
  rev_address?: string;
}

interface UserData {
  field: string;
  data: string;
}

interface VerifierData {
  verifier: string;
  field: string;
  data: string;
}

interface ExtendedVerifierData {
  verifier: string;
  field: string;
  extended_data: string[];
}

export interface ICounter{
  finalValue : number;
}
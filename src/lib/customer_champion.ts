import { CustomerProfile } from "./customer_profile";

export interface CustomerChampion {
  readonly slug: string;
  readonly name: string;
  readonly title: string;
  readonly avatar: string;
  readonly company?: CustomerProfile;
}

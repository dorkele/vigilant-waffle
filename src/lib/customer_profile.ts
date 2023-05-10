import { CmsFolderCollection, FolderCollection } from "./cms_collection";

export interface CustomerProfile {
  readonly slug: string;
  readonly name: string;
  readonly website?: {
    url: string;
    label: string;
  };
  readonly logo?: string;
  readonly description?: string;
  readonly founded?: string;
  readonly size?: number;
  readonly reasonForSwitching?: string;
  readonly setupTime?: string;
  readonly product?: "all_in_one" | "analytics";
}

const customerProfileCollection = new CmsFolderCollection({
  collection: FolderCollection.CustomerProfile,
});

export function fetchAllCustomers() {
  return customerProfileCollection.getCollection() as CustomerProfile[];
}

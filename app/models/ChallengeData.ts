export interface ChallengeData {
  id: string;
  calendar: Calendar[];
  created: string;
  customer: Customer;
  deleted: boolean;
  status: string;
}

export interface Calendar {
  actions: Action[];
  month: number;
  year: number;
}

export interface Action {
  id: string;
  arrivalEndWindow?: string;
  arrivalStartWindow?: string;
  name: string;
  price: number;
  scheduledDate?: string;
  status: string;
  vendor?: Vendor;
}

export interface Vendor {
  id: string;
  city?: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  state?: string;
  streetAddress?: string;
  vendorName: string;
  zip?: string;
}

export interface Customer {
  id: string;
  city: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  state: string;
  street: string;
  zip: string;
}

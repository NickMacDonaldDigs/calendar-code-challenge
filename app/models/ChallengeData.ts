export interface ChallengeData {
    id: string
    calendar: Calendar[]
    created: string
    customer: Customer
    deleted: boolean
    firstPaymentDate: string
    planCreated: string
    status: string
  }
  
  export interface Calendar {
    actions: Action[]
    month: number
    year: number
  }
  
  export interface Action {
    id: string
    arrivalEndWindow?: string
    arrivalStartWindow?: string
    defaultAdded: boolean
    icon: string
    included: boolean
    location: string
    name: string
    options: Options
    order: number
    perYear: number
    price?: number
    scheduledDate?: string
    selectedUnit?: SelectedUnit
    serviceId: string
    status?: string
    unitLabel?: string
    vendor?: Vendor
  }
  
  export interface Options {
    priceTiers?: number[]
    type: string
    price?: number
    quantity?: number
    min?: number
    selectors?: Selector[]
  }
  
  export interface Selector {
    default?: boolean
    price: number
    unit: string
  }
  
  export interface SelectedUnit {
    price?: number
    quantity?: number
    unit: string
    default?: boolean
  }
  
  export interface Vendor {
    id: string
    additionalContacts: AdditionalContact[]
    address2: any
    categories: string[]
    city: any
    date_created: string
    deleted: boolean
    emailAddress: string
    firstName: string
    googleAddress: any
    lastName: string
    marketId: string
    notes: any
    paypal: any
    phoneNumber: string
    state: string
    streetAddress: any
    userId: any
    vendorName: string
    vendorWebsite: any
    venmo: string
    zip: any
  }

  export interface AdditionalContact {
    firstName: string
    lastName: string
    phoneNumber: string
  }
  
  export interface Customer {
    id: string
    city: string
    email: string
    firstName: string
    googleAddress: GoogleAddress
    lastName: string
    phoneNumber: string
    state: string
    street: string
    zip: string
  }
  
  export interface GoogleAddress {
    address_components: AddressComponent[]
    formatted_address: string
    geometry: Geometry
    html_attributions: any[]
    place_id: string
  }
  
  export interface AddressComponent {
    long_name: string
    short_name: string
    types: string[]
  }
  
  export interface Geometry {
    location: Location
  }
  
  export interface Location {
    lat: number
    lng: number
  }
  
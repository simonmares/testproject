type GeoPayload = {
  lat: string;
  lng: string;
};

type AddressPayload = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoPayload;
};

type CompanyPayload = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type UserPayload = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressPayload;
  phone: string;
  website: string;
  company: CompanyPayload;
};

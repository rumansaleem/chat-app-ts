export interface IPerson {
  id: string;
  name: string;
  email: string;
  phone: string;
  imageUrl: string;
}

export type People = IPerson[];

export interface PeopleState {
  isLoading: boolean;
  errorMessage: string | null;
  personIds: string[];
  all: { [personId: string]: IPerson };
}

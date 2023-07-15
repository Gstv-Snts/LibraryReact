export interface RentHistory {
  studentName: string;
  class: string;
  withdrawalDate: string;
  deliveryDate: string;
}

export interface Status {
  isActive: boolean;
  description: string;
}

export interface BookType {
  tittle: string;
  author: string;
  genre: string;
  status: Status;
  image: string;
  systemEntryDate: string;
  synopsis: string;
  rentHistory: Array<RentHistory>;
}

export const emptyBook = (): BookType => {
  return {
    tittle: '',
    author: '',
    genre: '',
    status: {
      isActive: false,
      description: '',
    },
    image: '',
    systemEntryDate: '',
    synopsis: '',
    rentHistory: [
      {
        studentName: '',
        class: '',
        withdrawalDate: '',
        deliveryDate: '',
      },
    ],
  };
};

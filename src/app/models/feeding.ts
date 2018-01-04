export interface Feeding {
    date?: string;
    id?: string;
    feedings?: [
      {
        bmAmount?: number;
        fAmount?: number;
        parent?: string;
        pee?: boolean;
        poop?: boolean;
        time?: string;
      }
    ];
  }
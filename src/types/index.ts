export interface ICard {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number;
}

export interface  IUser {
    payment: string;
    email: string;
    phone: string;
    address: string;
    total: number;
    items: ICard[];
}

export interface ICardsData {
    cards: ICard[];
    prewiev: string | null;
	deleteCard(cardId: string, payload: Function | null): void;
	getCard(cardId: string): ICard;
}

export interface IUserData{
    getUserInfo(): TUserTotal;
	setUserInfo(userData: IUser): void;
	checkUserValidation(data: Record<keyof TUserContact, string> | Record<keyof TUserAdres, string>): boolean;
}

export type TCardInfo = Pick<ICard, 'description' | 'image' | 'title' | 'category' | 'price'>;

export type TCardBasket = Pick<ICard, 'title' | 'price'>;

export type TUserAdres = Pick<IUser, 'address'>;

export type TUserContact = Pick<IUser, 'email' | 'phone'>;

export type TUserTotal = Pick<IUser, 'total'>;
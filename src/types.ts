import { Dispatch } from 'react';


export interface UserInterface {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": AddressInterface,
    "phone": string,
    "website": string,
    "company": CompanyInterface
}
export interface AddressInterface{
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": GeoInterface,
}
export interface GeoInterface{
    "lat": string,
    "lng": string,
}
export interface CompanyInterface{
    "name": "Romaguera-Crona",
    "catchPhrase": string,
    "bs": string,
}
//---------------------------------------------
export interface PostInterface {
    "userId": number,
    "id": number,
    "title": string,
    "body": string,
}
//---------------------------------------------
export interface MainContextInterface {
    users: UserInterface[];
    setUsers: Dispatch<UserInterface[]>;
    renderPosts: (posts: PostInterface[]) => JSX.Element;
    posts: PostInterface[];
    setPosts: Dispatch<PostInterface[]>;
    renderUsers: (users: UserInterface[]) => JSX.Element;
}





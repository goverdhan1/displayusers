export interface User {
    
about: string,
address: string,
age: number,
balance: string,
company: string,
email: string, 
eyeColor: string, 
favoriteFruit: string, 
friends: Array<friends>,
gender: string,
greeting: string,
guid: string,
index: number,
isActive: boolean,
latitude: number,
longitude: number,
name: string, 
phone: string, 
picture: string, 
registered: Date,
tags: Array<string>,
_id: string
}

export interface friends{
    id: number, 
    name: string
}


export interface IDestinations {
    name:string,
    images:{
        png:string,
        webp:string
    },
    description:string,
    distance:string,
    travel:string,
}

export interface ICrew {
    name:string,
    images:{
        png:string,
        webp:string
    },
    role:string,
    bio:string
}

export interface ITechnology {
    name:string,
    images:{
        portrait:string,
        landscape:string,
    },
    description:string
}

export interface IMessage {
    message:string
}

export interface ISpace {
    destinations:IDestinations[],
    crew:ICrew[],
    technology:ITechnology[]
}

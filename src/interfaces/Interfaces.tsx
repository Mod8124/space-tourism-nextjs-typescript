export interface IHeaderStyle {
    path:string,
    value:string,
    mobile:boolean
};

export interface IHeaderMenuActive {
    menuActive:boolean
}

export interface ILoad {
    complete:()=>void
}

export interface ICtaStyle {
    subTitle?:string,
    title:string,
    para:string,
    type?:string
};

export interface ICtaTypeStyle {
    type?:string
}

export interface ISpanIndexStyled {
    value?:number,
    index:number
}

export interface IDivImgContainerStyled {
    value?:string
}

export interface IParaStyled {
    value?:string
}

export interface IDivPlanetStyled {
    value:number,
    index:number
}

export interface IDivNumberStyled {
    value?:number,
    index:number
}

export interface IMobileTitle {
    mobile:boolean
}

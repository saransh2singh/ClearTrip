export enum TravelMode {
    Plane = "Plane",
    Train = "Train",
    Bus = "Bus"
}
export interface ITravel{
    travelID : number;
    source:string;
    travelDate: Date;
    destination : string;
    travelMode : TravelMode;
    imageUrl: string,
    rating: number;
}
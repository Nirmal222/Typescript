//Arrays
// const superHeroes = []  -> This takes the type "Never"
// superHeroes.push("nfd")

const Bikes: string[] = [];

Bikes.push("Enfield", "Honda");

const Places: Array<string> = [];

Places.push("Himachal", "Kakinada");


type user = {
    name: string,
    isActive: boolean
}

const allUsers: Array<user> = [];

allUsers.push({ name:"nirmal", isActive:false });

// const MlModels: number[][] = [];
const MlModels: Array<Array<number>> = [];
MlModels.push([1,2,3]);
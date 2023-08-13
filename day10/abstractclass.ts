abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}
    abstract getSapia(): void
}

// const nirmal = new TakePhoto("burst", "b&w")

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        ){
            super(cameraMode, filter)
        }
        getSapia(): void {
            console.log("Hello")
        }
}
// Here we wont be able to create an instance using the abstract class
// while we can create an instance of a class for which this class 
// is inherited to
const clickPic = new  Instagram("burst", "b&w")


export {}
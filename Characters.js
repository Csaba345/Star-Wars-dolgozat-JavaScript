import { Szereplok } from "./Character.js";

export default class Characters{
constructor(nev,height,mass,hair_color,skin_color,eye_color,birth_year,gender){
    this.nev=nev
    this.height=height
    this.mass=mass
    this.hair_color=hair_color
    this.skin_color=skin_color
    this.eye_color=eye_color
    this.birth_year=birth_year
    this.gender=gender
}
megjelemites(){
let kod=`
    <div class="szereplok">
        <li>${this.nev}</li>
        <li>${this.height}</li>
        <li>${this.mass}</li>
        <li>${this.hair_color}</li>
        <li>${this.skin_color}</li>
        <li>${this.eye_color}</li>
        <li>${this.birth_year}</li>
        <li>${this.gender}</li>
    </div>

`
}
}
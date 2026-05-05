import { Szereplok } from "./Character.js";

export default class Characters{

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
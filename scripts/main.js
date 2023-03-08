import { Bands } from "./bands.js";
import { Venues } from "./venues.js"
import { bookings } from "./bookings.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Sugar On Me</h1>
<article class="details">
    <article id="booking">
        <h2>Bookings</h2>
        ${bookings()}
    </section>
    
    <section id="venue">
        <h2>Venues</h2>
        ${Venues()}
    </section>
</article>
    <section id="band">
    <h2>Bands</h2>
    ${Bands()}
</section>
`

mainContainer.innerHTML = applicationHTML

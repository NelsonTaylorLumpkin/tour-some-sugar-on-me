import { getBookings } from "./database.js"
import { getBands } from "./database.js"
import { getVenues } from "./database.js"

const venues = getVenues()
const bookings = getBookings()
const bands = getBands()
export const Bands = () => {
    let html = "<ul>"
    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }
    html += "</ul>"
    return html
}

/* 
function for finding the venues a band will play at
*/
export const bandBookings = (band) => {
    let tourVenues = ""
    for (const booking of bookings) {
        if (booking.bandId === band.id) {
            for (const venue of venues) {
                if (venue.id === booking.venueId) {
                    tourVenues += `${venue.name}\n`

                }

            }
        }

    }
    return tourVenues
}



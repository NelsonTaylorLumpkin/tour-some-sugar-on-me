import { getVenues } from "./database.js";
import { getBookings } from "./database.js";
import { getBands } from "./database.js";

const bands = getBands()
const bookings = getBookings()
const venues = getVenues()

export const Venues = () => {
    let html = "<ul>"
    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }
    html += "</ul>"
    return html
}

export const venueBookings = (venue) => {
    let tourBands = ""
    for (const booking of bookings) {
        if (booking.venueId === venue.id) {
            for (const band of bands) {
                if (band.id === booking.bandId) {
                    tourBands += `${band.name}\n`

                }

            }
        }

    }
    return tourBands
}
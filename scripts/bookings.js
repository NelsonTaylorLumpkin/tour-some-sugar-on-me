import { bandBookings } from "./bands.js";
import { getBands, getVenues, getBookings } from "./database.js";
import { venueBookings } from "./venues.js";



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("booking")) {
            const [, bookingId] = itemClicked.id.split("--")
            for (const booking of Bookings) {
                const foundBand = findBand(booking, Bands)
                if (booking.id === parseInt(bookingId)) {
                    window.alert(`${foundBand.name} \n ${foundBand.genre} \n Formed in ${foundBand.year} \n ${foundBand.members} band member`)
                }
            }
        }
    }
)

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("band")) {
            const [, bandId] = itemClicked.id.split("--")
            for (const band of Bands) {
                if (band.id === parseInt(bandId)) {
                    const bandTourVenues = bandBookings(band)
                    window.alert(`This ${band.name} is playing over hereeee: ${bandTourVenues} `)
                }
            }
        }
    }
)
//this event listener displays all the bands that have played at this venue
document.addEventListener(
"click",
(clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("venue")) {
        const [, venueId] = itemClicked.id.split("--")
        for (const venue of Venues) {
            if (venue.id === parseInt(venueId)) {
                const venueArtists = venueBookings(venue)
                window.alert(`${venueArtists}`)
            }
        }
    }
}
)
const Bands = getBands()
const Venues = getVenues()
const Bookings = getBookings()


const findBand = (booking) => {
    let bookedBand = ""

    for (const band of Bands) {
        if (booking.bandId === band.id) {
            bookedBand = band
        }
    }
    return bookedBand
}

const findVenue = (booking) => {
    let bookedVenue = ""

    for (const venue of Venues) {
        if (booking.venueId === venue.id) {
            bookedVenue = venue.name
        }
    }
    return bookedVenue
}

export const bookings = () => {
    let html = ""
    html = "<ul>"

    for (const booking of Bookings) {
        const banded = findBand(booking)
        const venued = findVenue(booking)

        html += `<li id="booking--${booking.id}">${banded.name} is playing at ${venued} on ${booking.date}</li>`
    }
    html += "</ul>"

    return html
}
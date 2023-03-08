const database = {
    bands: [{
        id: 1,
        name: "Mount Eerie",
        genre: "Psychedelic Folk",
        members: 1,
        year: 2000
    }, {
        id: 2,
        name: "Aphex Twin",
        genre: "Electronic",
        members: 1,
        year: 1986
    }, {
        id: 3,
        name: "Oneohtrix Point Never",
        genre: "Electronic",
        members: 1,
        year: 2004
    }, {
        id: 4,
        name: "Brian Eno",
        genre: "Ambient",
        members: 1,
        year: 1970
    }, {
        id: 5,
        name: "Grouper",
        genre: "Psychedelic Folk",
        members: 1,
        year: 2005
    }, {
        id: 6,
        name: "Lapalux",
        genre: "Electronic",
        members: 1,
        year: 2008
    }],
    venues: [{
        id: 1,
        name: "Rotted Arp",
        address: "251 Pighead Road",
        sqft: 578,
        maxOcc: 1000
    }, {
        id: 2,
        name: "Lady Pachuca's Sugar Bowl",
        address: "666 Froghead Road",
        sqft: 9000000,
        maxOcc: 5
    }, {
        id: 3,
        name: "The Sizeable Kahuna",
        address: "459 Road Street",
        sqft: 5,
        maxOcc: 6
    }, {
        id: 4,
        name: "The Invisible Man's Wardrobe",
        address: "1111 Street Road",
        sqft: 400,
        maxOcc: 27
    }],
    bookings: [{
        id: 1,
        bandId: 1,
        venueId: 1,
        date: "January 15th"
    }, {
        id: 2,
        bandId: 6,
        venueId: 4,
        date: "January 16th"
    }, {
        id: 3,
        bandId: 2,
        venueId: 2,
        date: "January 17th"
    }, {
        id: 4,
        bandId: 5,
        venueId: 3,
        date: "January 18th"
    }, {
        id: 5,
        bandId: 3,
        venueId: 1,
        date: "January 19th"
    }, {
        id: 6,
        bandId: 4,
        venueId: 4,
        date: "January 20th"
    }, {
        id: 7,
        bandId: 1,
        venueId: 2,
        date: "January 21st"
    }, {
        id: 8,
        bandId: 6,
        venueId: 3,
        date: "January 22nd"
    }, {
        id: 9,
        bandId: 2,
        venueId: 1,
        date: "January 23rd"
    }, {
        id: 10,
        bandId: 5,
        venueId: 4,
        date: "January 24th"
    }]
}

export const getBands = () => {
    return database.bands.map(band => ({ ...band }))
}

export const getVenues = () => {
    return database.venues.map(venue => ({ ...venue }))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({ ...booking }))
}
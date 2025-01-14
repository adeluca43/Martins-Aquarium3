export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "evilOne",
            power: "finger guns"
        },
        {
            id: 2,
            name: "evilTwo",
            power: "invisibility"
        }
    ]
}
// function to export a copy of the villain data
export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}

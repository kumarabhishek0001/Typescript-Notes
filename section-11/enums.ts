enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

// auto-incementing
enum Status {
    PENDING = 100,
    SEVERD, // 101 -> AUTOMATIC
    CANCELLED // 102 -> AUTOMATIC
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger",
}

function makeChai(type: ChaiType){
    console.log(`Making: ${type}`)
}

makeChai(ChaiType.MASALA)
// OUTPUT ->  Making: masala

makeChai(ChaiType.GINGER)
// OUTPUT -> Making: ginger


// HETEROGENOUS VALUES
enum RandomEnum {
    ID = 1,
    NAME = "chai",
}

// STANDARD PRACTIEC -> don't add multiple types to enum
// enum RandomEnum -> not a standard practice

// cannot change enum Sugars
const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const addSugar = Sugars.HIGH
function solve() {

    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight)

            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength,text) {
            super(color, gasWeight)

            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }

            this.text = text;
        }

        get ribbon() {
            return this._ribbon;
        }
    }


    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }

}

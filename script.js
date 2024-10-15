phone = {
    make: "I-Phone",
    model: 16,
    space: "64GB",
    year: 2023,
    color: "black",

    displayinfo: function () {

        console.log(`make: ${this.make} model: ${this.model} space: ${this.space} year: ${this.year} color: ${this.color}`);
        
    },

    update: function (params) {

        this.model = params.nModel;
        this.space = params.nSpace;
        this.year = params.nYear;
        this.color = params.nColor;
        
    }


}

phone.displayinfo()


function updatePhoneData() {

    phone.update ({
        nModel: 17,
        nSpace: "320GB",
        nYear: 2024,
        nColor: "silver"
    })

    phone.displayinfo()
    
}



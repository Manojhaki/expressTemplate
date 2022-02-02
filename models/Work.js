const mongoose = require('mongoose');
const WorkSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Plaease add name'],

        maxlength: [200, 'name cannot be more than this.']


    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Plaease add description'],

        maxlength: [500, 'Description cannot be more than this.'],
    },

    website: {

        type: String,
        match: [/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'please add a Valit URL']
    },

    phone: {

        type: String,
        maxlength: [20, 'enter valid number']

    },

    email: {
        type: String,
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please add valid email']
    },

    address: {

        type: String,
        required: [true, 'Please add an address']
    },
    location: {

        type: {
            type: String,
            enum: ['Point'],
            required: true

        },
        cooridinates: {
            type: [Number],
            required: true,
            indes: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String,


    },
    workers: {
        type: [String],
        required: true,
        enum: [
            'tester',
            'mangaer',
            'worker'

        ]

    },
    upvote: {
        type: Number,
    },

    workCost: Number,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.export = mongoose.model('Work', WorkSchema);
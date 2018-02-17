import { ModelConfig } from "./ModelConfig";

let mongoose = require('mongoose');

// TransportRequest Schema
let userSchema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ModelConfig.User
    },
    category: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: ModelConfig.Category
        }
    ],
    maxWeightCapacity: {
        type: Number,
        required: true
    },
    maxPriceCapacity: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    endDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    commission: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

let TransportRequestModel = module.exports = mongoose.model(ModelConfig.TransportRequest, userSchema);


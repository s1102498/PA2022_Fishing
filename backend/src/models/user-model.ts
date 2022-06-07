import { Role } from '@shared/enums';
import mongoose from 'mongoose';
import {IMongoEntity} from './mongo-entity';

// User model
export interface IUser {
    //_id: Types.ObjectId;
    email: string;
    username: string;
    role: Role;
    credit: number;
}

export const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String, // enum Role
        required: true,
    },
    credit: {
        type: Number,
        required: true,
    }
});

export const User = mongoose.model<IUser & IMongoEntity>('User', userSchema);

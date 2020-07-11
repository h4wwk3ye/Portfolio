import mongoose, { Schema } from 'mongoose';
import { IUser } from './User';

interface Education {
  name: string;
  school: string;
  score: {
    value: string;
    postfix: string;
  };
}

interface Project {
  name: string;
  description: string;
  gitLink: string;
}

interface Experience {
  name: string;
  role: string;
  timeFrom: Date;
  timeTo: Date;
  currentlyWorking: boolean;
}

export interface IProfile extends Document {
  user: IUser['id'];
  smallDescription: string;
  about: string;
  image: string;
  resume: string;
  loc: {
    // Cant name it location. Some typescript error
    city: string;
    country: string;
  };
  connect: {
    facebook: string;
    instagram: string;
    linkedin: string;
    github: string;
    twitter: string;
    steam: string;
  };
  skills: Array<string>;
  education: Array<Education>;
  projects: Array<Project>;
  experiences: Array<Experience>;
}

const ProfileSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  smallDescription: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  image: String,
  resume: String,
  loc: {
    city: String,
    country: String,
  },
  connect: {
    facebook: String,
    instagram: String,
    linkedin: String,
    github: String,
    twitter: String,
    steam: String,
  },
  skills: [
    {
      type: String,
      required: true,
    },
  ],
  education: [
    {
      name: {
        type: String,
        required: true,
      },
      school: {
        type: String,
        required: true,
      },
      score: {
        value: String,
        postfix: {
          type: String,
          default: '%',
          enum: ['%', 'CGPA'],
        },
      },
    },
  ],
  projects: [
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      gitLink: String,
    },
  ],
  experiences: [
    {
      name: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        required: true,
      },
      timeFrom: {
        type: Date,
        required: true,
      },
      timeTo: Date,
      currentlyWorking: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

// Export the model and return your IProfile interface
export default mongoose.model('Profile', ProfileSchema);

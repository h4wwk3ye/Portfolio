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

interface Skill {
  name: string;
  value: number;
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
  connect: {
    facebook: string;
    instagram: string;
    linkedin: string;
    github: string;
    twitter: string;
  };
  skills: Array<Skill>;
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
  connect: {
    facebook: String,
    instagram: String,
    linkedin: String,
    github: String,
    twitter: String,
  },
  skills: [
    {
      name: {
        type: String,
        required: true,
      },
      value: {
        type: Number,
        default: 100,
      },
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
      gitLink: {
        type: String,
      },
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
      timeTo: {
        type: Date,
      },
      currentlyWorking: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

// Export the model and return your IProfile interface
export default mongoose.model('Profile', ProfileSchema);

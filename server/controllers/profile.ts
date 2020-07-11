import express, { Request, Response } from 'express';
import Profile from '../models/Profile';
import User from '../models/User';
import auth from '../utils/auth';
import { check, validationResult } from 'express-validator';
import { IProfile } from '../models/Profile';
import { uploadFile, deleteFile } from '../upload';

const profileRouter = express.Router();

/**
 * @route         GET /api/profile/me
 * @description   Get logged in user profile
 * @access        PRIVATE
 */
profileRouter.get(
  '/me',
  auth,
  async (request: Request, response: Response): Promise<Response> => {
    const profile = await Profile.findOne({
      user: request.user.id,
    }).populate('user', ['name', 'email']);

    if (!profile) {
      return response
        .status(400)
        .json({ errors: [{ msg: 'There is no profile for current user' }] });
    }

    return response.json(profile);
  }
);

/**
 * @route         POST /api/profile
 * @description   create or update profile
 * @access        PRIVATE
 */
profileRouter.post(
  '/',
  [
    auth,
    uploadFile,
    check('smallDescription', 'Give 1 line description about yourself')
      .not()
      .isEmpty(),
    check('about', 'Give some details about yourself').not().isEmpty(),
  ],
  async (request: Request, response: Response): Promise<Response> => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    let body: IProfile = request.body as IProfile;
    body = JSON.parse(JSON.stringify(body)) as IProfile;
    body = { ...body, user: request.user.id };
    console.log(body);

    if (request.file) body['image'] = request.file.location;

    let profile = await Profile.findOne({ user: request.user.id });

    if (request.file && profile && profile.get('image')) {
      // delete previous image if new image is in the request
      await deleteFile(profile.get('image'));
    }

    // TODO
    // !Add all the remaining fields as required and update them in the model too

    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: request.user.id },
        { $set: body },
        { new: true }
      );
      return response.json(profile);
    }

    profile = new Profile(body);
    await profile.save();
    return response.json(profile);
  }
);

/**
 * @route         GET /api/profile
 * @description   Get all profiles
 * @access        PUBLIC
 */
profileRouter.get(
  '/',
  async (_request, response): Promise<Response> => {
    const profiles = await Profile.find().populate('user', ['name', 'email']);
    return response.json(profiles);
  }
);

/**
 * @route         GET /api/profile/user/:user_id
 * @description   Get profile by user id
 * @access        PUBLIC
 */
profileRouter.get(
  '/user/:user_id',
  async (request, response): Promise<Response> => {
    const profile = await Profile.findOne({
      user: request.params.user_id,
    }).populate('user', ['name', 'email']);

    if (!profile) {
      return response
        .status(400)
        .json({ errors: [{ msg: 'There is no profile for this user' }] });
    }

    return response.json(profile);
  }
);

/**
 * @route         DELETE /api/profile
 * @description   Delete profile and user
 * @access        Private
 */
profileRouter.delete(
  '/',
  auth,
  async (request, response): Promise<Response> => {
    // remove profile
    await Profile.findOneAndRemove({ user: request.user.id });
    // remove user
    await User.findByIdAndRemove(request.user.id);

    return response.json({ msg: 'User deleted' });
  }
);

/**
 * @route         PUT /api/profile
 * @description   Update profile
 * @access        Private
 */
profileRouter.put('/', auth, async (request, response) => {
  let body: IProfile = request.body as IProfile;
  body = { ...body, user: request.user.id };

  const profile = await Profile.findOneAndUpdate(
    { user: request.user.id },
    { $set: body },
    { new: true }
  );
  return response.json(profile);
});

export default profileRouter;

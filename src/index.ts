// ! NOTE: assets of avatar and scene are in `.gitignore` for protecting privacy.
// ! NOTE: manually add the assets for the test.

import axios from 'axios';
import { GATEWAY_SERVER_URL, ADMIN_KEY, SCENE, AVATAR } from './lib/consts';
import fs from 'fs';
import FormData from 'form-data';

/**
 * @description send generating avatar requests to gateway server,
 * and test whole pipeline and quality of ai result.
 */
async function generateAvatar() {
  console.log('generate avatars.');
  for (const { title, gender, fileDirectory } of AVATAR) {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('gender', gender);
    formData.append(
      'body',
      fs.createReadStream(`${__dirname}/${fileDirectory}/body.jpg`),
    );
    formData.append(
      'face',
      fs.createReadStream(`${__dirname}/${fileDirectory}/face.jpg`),
    );
    formData.append('key', ADMIN_KEY);

    await axios
      .post(`${GATEWAY_SERVER_URL}/sample/avatar`, formData, {
        headers: formData.getHeaders(),
      })
      .then(() => {
        console.log('success');
      })
      .catch((err) => {
        console.log('error is fired');
        console.log(err);
      });
  }
}

/**
 * @description send generating scene requests to gateway server,
 * and test whole pipeline and quality of ai result.
 */
async function generateScene() {
  console.log('generate scenes.');
  for (const { title, type, fileDirectory } of SCENE) {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('type', type);
    formData.append(
      'video',
      fs.createReadStream(`${__dirname}/${fileDirectory}/video.mp4`),
    );
    formData.append('key', ADMIN_KEY);

    await axios
      .post(`${GATEWAY_SERVER_URL}/sample/avatar`, formData, {
        headers: formData.getHeaders(),
      })
      .then(() => {
        console.log('success');
      })
      .catch((err) => {
        console.log('error is fired');
        console.log(err.response.data);
      });
  }
}

/* -------------------------------------------------------------------------- */
/*                                BELOW IS MAIN                               */
/* -------------------------------------------------------------------------- */

async function main() {
  const arg = process.argv[2];
  switch (arg) {
    case '--testAvatar':
      await generateAvatar();
      break;
    case '--testScene':
      await generateScene();
      break;
    default:
      console.log('Invalid argument. Use --testAvatar or --testScene');
  }
}

main();

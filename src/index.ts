// ! NOTE: assets of avatar and scene are in `.gitignore` for protecting privacy.
// ! NOTE: manually add the assets for the test.

import axios from 'axios';
import { GATEWAY_SERVER_URL, SCENE, AVATAR } from './lib/consts';
import { promises as fs } from 'fs';
import path from 'path';

/**
 * @description send generating avatar requests to gateway server,
 * and test whole pipeline and quality of ai result.
 */
async function generateAvatar() {
  console.log('generate avatars.');
  AVATAR.forEach(async ({ title, gender, fileDirectory }) => {
    const bodyData = await loadFile(fileDirectory, 'body.jpg');
    const faceData = await loadFile(fileDirectory, 'face.jpg');

    // FIXME: check API endpoint.
    await axios.post(`${GATEWAY_SERVER_URL}/source/avatar`, {
      title,
      gender,
      body: convertToBase64(bodyData),
      face: convertToBase64(faceData),
    });
  });
}

/**
 * @description send generating scene requests to gateway server,
 * and test whole pipeline and quality of ai result.
 */
async function generateScene() {
  console.log('generate scenes.');
  SCENE.forEach(async ({ title, type, fileDirectory }) => {
    const videoData = await loadFile(fileDirectory, 'video.mp4');

    // FIXME: check API endpoint.
    await axios.post(`${GATEWAY_SERVER_URL}/source/scene`, {
      title,
      location: type,
      video: convertToBase64(videoData),
    });
  });
}

/* -------------------------------------------------------------------------- */
/*                               BELOW IS UTILS                               */
/* -------------------------------------------------------------------------- */

async function loadFile(fileDirectory: string, fileName: string) {
  const filePath = path.join(__dirname, '../assets', fileDirectory, fileName);
  return await fs.readFile(filePath);
}

function convertToBase64(data: Buffer) {
  return data.toString('base64');
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

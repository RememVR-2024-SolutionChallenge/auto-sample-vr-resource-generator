# sample-vr-resource-generator

## Usage

The generator can be used to generate VR resources by running the following command:

```bash
$ git clone https://github.com/GoogleCloudPlatform/sample-vr-resource-generator.git
$ cd sample-vr-resource-generator
$ npm install
$ npm run test:avatar
$ npm run test:scene
```

- `.env` is required to run this script.
- Images and video files are required to run this script.
- Script `test:avatar` generates sample avatars, and script `test:scene` generates sample scenes.

## Why we use this script?

1. Make much easier to generate sample VR resources and save time to insert metadata of sample VR resources.
2. By going directly through the gateway server, it is possible to perform the role of an integration test for the main logic, as the request reaches the AI server.

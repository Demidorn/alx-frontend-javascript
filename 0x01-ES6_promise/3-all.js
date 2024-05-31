import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const promises = ([uploadPhoto(), createUser()]);
  Promise.all(promises).then((values) => {
    console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
  })
    .catch(() => console.log('Signup system offline'));
    return promises;
}

export default handleProfileSignup;

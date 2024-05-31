function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}

function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}

function handleProfileSignup() {
  const promises = ([uploadPhoto(), createUser()]);
  Promise.all(promises).then((values) => {
    console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
  })
    .catch((error) => console.error('Signup system offline'));
}

export default handleProfileSignup;

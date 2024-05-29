function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}

function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`Error: ${fileName} cannot be uploaded`));
    }, 1000);
  });
}

function handleProfileSignup(firstName, lastName, fileName) {
  const result = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  Promise.allSettled(result).then((value) => {
    const newresult = [];
    for (const res of value) {
      if (res.status === 'fulfilled') {
        newresult.push({ status: res.status, value: res.value });
      } else if (res.status === 'rejected') {
        newresult.push({ status: res.status, value: res.reason });
      }
    }
    return newresult;
  });
}

export default handleProfileSignup;

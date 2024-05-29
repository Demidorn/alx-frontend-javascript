function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`Error: ${fileName} cannot be uploaded`));
    }, 1000);
  });
}

export default uploadPhoto;

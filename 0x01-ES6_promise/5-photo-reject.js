// export default function uploadPhoto(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error(`${filename} cannot be processed`));
//     }, 1000);
//   });
// }

export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
}

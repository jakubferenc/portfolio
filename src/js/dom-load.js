import {
  __removeClass,
  __addClass,
  __hasClass,
  __toggleClass,
} from './lib/utils';


const domLoad = () => {

  console.log('domLoad:mdh');

  const d = document;

  const $photoContainer = document.getElementsByClassName('profile-photo')[0];
  const $profilePhotoRight = $photoContainer.getElementsByClassName('profile-right')[0];
  const $profilePhotoLeft = $photoContainer.getElementsByClassName('profile-left')[0];

  const swapPhoto = setInterval(() => {
    __toggleClass($profilePhotoRight, 'is-hidden');
    __toggleClass($profilePhotoLeft, 'is-hidden');
  }, 4000);

  //swapPhoto();
  //clearTimeout(swapPhoto);
};

export default domLoad;

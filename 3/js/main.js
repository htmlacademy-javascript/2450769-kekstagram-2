const description = [
  'Озеро',
  'Табличка',
  'Море',
  'Девушка',
  'Обед',
  'Черная машина',
  'Клубника',
  'Морс',
  'Самолет',
  'Обувь',
  'Пляж',
  'Белая машина',
  'Салат',
  'Котролл',
  'Тапочки',
  'Горы',
  'Хор',
  'Красная машина',
  'Тапочки с фанариком',
  'Пальмы',
  'Завтрак',
  'Закат',
  'Краб',
  'Концерт',
  'Сафари',
];
const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const nameСommentator = [
  'Артём',
  'Вася',
  'Петя',
  'Маша',
  'Марина',
  'Катя',
  'Даша',
  'Елена',
  'Евгения',
  'Екатерина',
];
const id = Array.from({length: 25}, (_, i) => i + 1);
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const randomId = getRandomInteger(0, id.length - 1);
const comment = () => ({
  id: getRandomInteger(1, 9999),
  avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
  message: message[getRandomInteger(0, message.length - 1)],
  name: nameСommentator[getRandomInteger(0, nameСommentator.length - 1)],
});

const comments = Array.from({length: 31}, comment);
const commentsCount = getRandomInteger(0, comments.length - 1);

const photo = {
  id: randomId,
  url: `photos/${ randomId }.jpg`,
  description: description[randomId - 1],
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: commentsCount}, comment),
};

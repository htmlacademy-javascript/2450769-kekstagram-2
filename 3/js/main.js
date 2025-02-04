//Функция получения уникального идентификатора
const createIdGenerator = (start = 0) => {
  let lastGeneratedId = start;
  return function() {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};
  //Функция получения уникального идентификатора (начинает сначала при достижении заданного значения)
const createCircleGenerator = (maxCount) => {
  let lastGeneratedId = 0;
  return function() {
    if(lastGeneratedId >= maxCount) {
      lastGeneratedId = 0;
      return lastGeneratedId++;
    }
    return lastGeneratedId++;
  };
};
  //Функция получения случайного значения в заданных пределах
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
  //Функция получения случайного элемента массива
const getRandomArrayElement = (elements) => (
  elements[getRandomInteger(0, elements.length - 1)]
);

const COUNT_ITEMS = 25;
const avatarRange = {
  MIN: 1,
  MAX: 6
};
const likesRange = {
  MIN: 15,
  MAX: 200
};
const commentsRange = {
  MIN: 3,
  MAX: 15
};
const commentMessageRange = {
  MIN: 1,
  MAX: 2
};
const MIN_ID_COMMENT = 100;
const DESCRIPTIONS = [
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
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
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
const generateItemId = createIdGenerator();
const generateItemPathId = createIdGenerator();
const generateDescriptionId = createCircleGenerator(DESCRIPTIONS.length);
const generateCommentId = createIdGenerator(MIN_ID_COMMENT);
const getCommentMessage = () => Array.from({length: getRandomInteger(commentMessageRange.MIN, commentMessageRange.MAX)},
  () => getRandomArrayElement(MESSAGES)).join(' ');
const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(avatarRange.MIN, avatarRange.MAX)}.svg`,
  message: getCommentMessage(),
  name: getRandomArrayElement(NAMES)
});
const createItem = () => ({
  id: generateItemId(),
  url: `photos/${generateItemPathId()}.jpg`,
  description: DESCRIPTIONS[generateDescriptionId()],
  likes: getRandomInteger(likesRange.MIN, likesRange.MAX),
  comments: Array.from({length: getRandomInteger(commentsRange.MIN, commentsRange.MAX)}, createComment)
});
const generatePosts = () => Array.from({length: COUNT_ITEMS}, createItem);
console.log(generatePosts());

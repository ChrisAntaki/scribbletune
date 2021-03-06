import utils from './utils';

const pattern = (len = 4, chars = 'x_x_', shuffle = false) => {
	if (shuffle) {
		chars = utils.shuffle(chars.split('')).join('');
	}
	return chars.repeat(len);
}

export default pattern;
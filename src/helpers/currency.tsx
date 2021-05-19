import numeral from 'numeral';

export default (price: string) => numeral(price).format('0,0');

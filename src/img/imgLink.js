import shirtG from './camisa_bien.png';
import shirtB1 from './camisa_conf1.png';
import shirtB2 from './camisa_conf2.png';
import pG from './p_bien.png';
import pB1 from './p_conf1.png';
import pB2 from './p_conf2.png';
import sG from './zapato_bien.png';
import sB1 from './zapato_conf1.png';
import sB2 from './zapato_conf2.png';

let shirts = [{value: true, link:shirtG}, {value: false, link: shirtB1}, {value: false, link:shirtB2}];
let pants = [{value: true, link: pG}, {value: false, link: pB1}, {value: false, link: pB2}];
let shoes = [{value: true, link: sG}, {value: false, link: sB1}, {value: false, link: sB2}];

export {
    shirts,
    pants,
    shoes
}
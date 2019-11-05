import { __removeClass, __toggleClass } from '../lib/utils';
import Component from './component';

export default class TemplateClass extends Component {

  constructor(id, element, opts) {
    super(element);

    this.id = id;

    this.opts = Object.assign({}, Card.defaults, opts);

  }

  init() {
    console.log ('from init template class')
  }


}

TemplateClass.defaults = {
  itemClass: 'template',
  optionClass: 'option',
  selectedClass: 'selected',
};

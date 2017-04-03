import {bootstrap} from 'angular2/platform/browser';
import {Component, Directive} from 'angular2/core';

@Directive({
  selector: 'input[my-log-directive]',
  host: {
    '(input)': 'onInput($event)'
  }
})
class MyLogDirective {
  onInput(event) {
    console.log(event.target.value);
  }
}

@Component({
  selector: 'my-directive-example',
  directives: [MyLogDirective],
  template: '<input type="text" my-log-directive>'
})
class DirectiveExample {}

bootstrap(DirectiveExample);

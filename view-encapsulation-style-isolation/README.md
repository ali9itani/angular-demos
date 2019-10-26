# View Encapsulation - Style Isolation
  - Applied by default in angular components (Emulated)
### Style Isolation Benefits
  -  Better CSS maintainability
  - Applying styles to a component without affecting the styling of other components
  - Styles won't affect a third party components, and vice versa
### How Emulated View Encapsulation Works
  -  Each component will have a unique property attached to the host element: _nghost-emp-c140, _ngcontent-emp-c140 …
  -  Element property with the element itself will be used to apply styles only to this element

### To disable the style isolation:
```
@Component({
// ...
encapsulation: ViewEncapsulation.None,
// ...]
})
```

### Using pseudo-class selector to bypass style isolation
##### :host
  -  to style the component custom html, not something inside its template
    [_nghost-bgr-c1] {   }
##### :host a
  -  will style the a element that is directly in the template of the component host
  [_nghost-efq-c15] a[_ngcontent-efq-c15] {   }
	 
##### :host ::ng-deep a
  -  To style element in component & its child components at any level
  -  It will not jump to parent component siblings or any higher level
	[_nghost-ocg-c2] a {   }
##### ::ng-deep a
  -  Used to style anchors in the whole app

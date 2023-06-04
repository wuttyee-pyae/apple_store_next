var doc = document;
var trigger = doc.querySelectorAll('.accordion__heading__trigger');
var self;
var target;
var i;

// add 'js' class to <body> so the panels will only be hidden if JavaScript is enabled.
doc.getElementsByTagName('body')[0].classList.add('js');

// loop through accordion triggers
for ( i = 0; i < trigger.length; i++ ) {
  self = trigger[i];
  
  /*
    To simplify this example, instead of creating <button> elements and injecting them into the existing headings, we'll just convert the <span>s into ARIA buttons with the appropriate default attributes.
  */
  // revise role to be announced as a button
  self.setAttribute('role', 'button');  
  // panels are collapsed by default
  self.setAttribute('aria-expanded', 'false'); 
  // make the 'button' accessible to keyboard navigation
  self.tabIndex = 0; 
  // associate what panel the 'button' controls 
  // even though aria-controls is currently 'poop'
  // http://www.heydonworks.com/article/aria-controls-is-poop
  self.setAttribute('aria-controls', 'accordion_' + i); 
  
  
  /*
    when an accordion trigger is interacted with, update the aria-expanded value to articulate the panel's state.
    Also toggle the 'is-active' class on the panel itself, as that class is used to show/hide the panel.
  */
  self.addEventListener('click', function ( e ) {
    target = this.getAttribute('aria-controls');
    
    this.setAttribute('aria-expanded', e.target.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    doc.getElementById(target).classList.toggle('is-active');
  });
  
  
  /*
    Since we're not using an actual button element for the triggers, the expected keyboard functionality needs to be remapped to the spans that are mascarading as buttons.
  */
  self.addEventListener('keydown', function ( e ) {
    var keyCode = e.keyCode || e.which;
    
    switch ( keyCode ) {
      case 32:
      case 13:
        e.preventDefault();
        e.target.click();
        
      default: 
        break;
    }
  });
}
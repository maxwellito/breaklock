# Components

No framework has been used to make the app as lightweight as possible. However there's a lot of constraints. It's a bit more complex to extend, devs must be confortable with the DOM API, respect a structure.

Because this project is quite small, it was possible.

## Contructor

Every contructor will require different parameters, depending on what's required to build the component. But in every case, the constructor will build the DOM of the component.

## Properties

### `.el` [DOM Element]

This is the root DOM element of your component. It can be used to append your component anywhere else.

## Methods

### `.setupTemplate()`

Build the DOM of the component and set it to the `.el` property.

### `.init()`

Start to listen to required events. This method must be called manually, it's not triggered by default.

### `.destroy()`

Stop listening to events, delete the DOM and remove any link that could block the garbage collector to clean this up. However this method is not used at any point in this project.

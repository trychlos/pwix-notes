# pwix:notes

## What is it ?

A Meteor package which manages notes:

- add a SimpleSchema to the collection
- provide a template to manage notes indicator in a tabular list
- provide a template to enter notes as an input panel

## Installation

This Meteor package is installable with the usual command:

```sh
    meteor add pwix:notes
```

## Usage

```js
    import { Notes } from 'meteor/pwix:notes';

    // add a standard notes to a collection

    // add several notes

    // have a note indicator in a tabular list

    // using the edition template
```

## Provides

### `Notes`

The exported `Notes` global object provides following items:

#### Functions

##### `Forms.configure()`

See [below](#configuration).

##### `Notes.field( [o] )`

Returns an object suitable for a Forms.field definition.

Accepts an object with following keys:

- `field`: the name of the field in the collection, defaulting to the corresponding configured value.

- `type`: the type of the field in the collection, defaulting to `String`.

- `optional`: whether this field is optional, defaulting to `true`.

- `dt_title`: the title to be displayed in the header of a tabular display, defaulting to the configured value.

- `dt_template`: the edition template, defaulting to our provided `Notes.template`.

Available both on the client and the server.

##### `Notes.i18n.namespace()`

Returns the i18n namespace used by the package. Used to add translations at runtime.

Available both on the client and the server.

##### `Notes.schema( [field] )`

Returns a SimpleSchema instance which describe the schema to be added to the collection.

Accepts a `field` name, which defaults to the corresponding configured value.

Available both on the client and the server.

### Blaze components

#### `noteTabularHeader`

#### `noteTabularRow`

#### `notePanel`

## Configuration

The package's behavior can be configured through a call to the `Notes.configure()` method, with just a single javascript object argument, which itself should only contains the options you want override.

Known configuration options are:

- `field`

    The name of the field to be added to the collections.

    Defaults to `notes`.

- `verbosity`

    Define the expected verbosity level.

    The accepted value can be any or-ed combination of following:

    - `Notes.C.Verbose.NONE`

        Do not display any trace log to the console

    - `Notes.C.Verbose.CONFIGURE`

Please note that `Notes.configure()` method should be called in the same terms both in client and server sides.

Remind too that Meteor packages are instanciated at application level. They are so only configurable once, or, in other words, only one instance has to be or can be configured. Addtionnal calls to `Notes.configure()` will just override the previous one. You have been warned: **only the application should configure a package**.

## NPM peer dependencies

Starting with v 0.3.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`.

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 0.3.0:
```
    '@popperjs/core': '^2.11.6',
    'bootstrap': '^5.2.1',
    'lodash': '^4.17.0'
```

Each of these dependencies should be installed at application level:
```
    meteor npm install <package> --save
```

## Translations

New and updated translations are willingly accepted, and more than welcome. Just be kind enough to submit a PR on the [Github repository](https://github.com/trychlos/pwix-notes/pulls).

## Cookies and comparable technologies

None at the moment.

## Issues & help

In case of support or error, please report your issue request to our [Issues tracker](https://github.com/trychlos/pwix-blaze-layout/issues).

---
P. Wieser
- Last updated on 2023, June 5th

# pwix:notes

## What is it ?

A Meteor package which manages notes:

- add a SimpleSchema to the collection
- provide a template to manage notes indicator in a tabular list
- provide a template to enter notes as an input panel

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

## Provides

`Notes` provides following items:

### Functions

- `Notes.i18n.namespace()`

    Returns the i18n namespace used by the package. Used to add translations at runtime.

    Available both on the client and the server.

- `Notes.schema( [field] )`

    Returns a SimpleSchema instance which describe the schema to be added to the collection.

    Can provide a `field` name, which defaults to the corresponding configured value.

    Available both on the client and the server.

### Methods

### Blaze components

#### `coreCookiesLink`

Display a link to the Cookies Policy.

Parameters can be provided:

- label, defaulting to 'Cookies management policy'
- title, defaulting to 'Cookies management policy'
- route, defaulting to configured routePrefix + '/cookies'.

#### `coreFieldCheckIndicator`

Display an indicator about the validity status of a field.

Parameters:

- type: a `Notes.FieldCheck` constant as `INVALID`, `NONE`, `UNCOMPLETE` or `VALID`.

#### `coreFieldTypeIndicator`

Display an indicator about the type of a field.

Parameters:

- type: a `Notes.FieldType` constant as `INFO`, `SAVE` or `WORK`
- classes: if set, a list of classes to be added to the default ones.

#### `coreGDPRLink`

Display a link to the Privacy Policy.

Parameters can be provided:

- label, defaulting to 'Privacy Policy'
- title, defaulting to 'Privacy Policy'
- route, defaulting to configured routePrefix + '/gdpr'.

#### `coreGTULink`

Display a link to the General Terms of Use.

Parameters can be provided:

- label, defaulting to 'General Terms of Use'
- title, defaulting to 'General Terms of Use'
- route, defaulting to configured routePrefix + '/gtu'.

#### `coreLegalsLink`

Display a link to the Legal Informations.

Parameters can be provided:

- label, defaulting to 'Legal Informations'
- title, defaulting to 'Legal Informations'
- route, defaulting to configured routePrefix + '/legals'.

### Less mixins

#### `.x-btn-variant( @color )`

#### `.x-btn-outline-variant( @color )`

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

`pwix:notes` may use `localStorage` to record ...

Because this is dynamically done on a per dialog basis, and only on the caller request, the package doesn't advertize of this use, relying on the caller own declaration.

---
P. Wieser
- Last updated on 2023, June 5th

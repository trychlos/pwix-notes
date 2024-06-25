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
    //  inside your `Field.Set` definition
    Notes.fieldDef()

    // add several notes
    //  inside your `Field.Set` definition
    Notes.fieldDef({
        name: 'adminNotes',
        dt_title: pwixI18n.label( I18N, 'list.admin_notes_th' ),
        form_title: pwixI18n.label( I18N, 'tabs.admin_notes_title' )
    }),
    Notes.fieldDef({
        name: 'userNotes',
        dt_title: pwixI18n.label( I18N, 'list.user_notes_th' ),
        form_title: pwixI18n.label( I18N, 'tabs.user_notes_title' )
    })
```

## Provides

### `Notes`

The exported `Notes` global object provides following items:

#### Functions

##### `Forms.configure()`

See [below](#configuration).

##### `Notes.fieldDef( [o] )`

Returns an object suitable for a `Field.Def` definition, as the following default definition:

```js
    name: Notes.configure().name,
    type: String,
    optional: true,
    dt_title: pwixI18n.label( I18N, 'dt_title' ),       // defaulting to 'Notes'
    dt_template: Meteor.isClient && Template.NotesTd,
    dt_templateContext( rowData ){
        return {
            item: rowData
        };
    },
    form_title: pwixI18n.label( I18N, 'form_title' ),   // the title of the nav for example
    form_label: pwixI18n.label( I18N, 'form_label' ),   // the label on the left column of the NotesEdit input table
    form_placeholder: pwixI18n.label( I18N, 'form_placeholder' )
```

The optional argument may override any part of this default.

Available both on the client and the server.

##### `Notes.i18n.namespace()`

Returns the i18n namespace used by the package. Used to add translations at runtime.

Available both on the client and the server.

##### `Notes.schema( [field] )`

Returns a SimpleSchema instance which describe the schema to be added to the collection.

Accepts a `field` name, which defaults to the corresponding configured value.

Available both on the client and the server.

### Blaze components

#### `NotesTd`

This component is automatically included in the tabular display as soon as you have defined the `Field.Def` field in your `Field.Set`.

#### `NotesEdit`

This component provides a `TEXTAREA` node inside of a `DIV`.

It is meant to be included, for example inside of a tabbed panel.

The component reacts to each `input` event by trigerring a `notes-data` event with following data:

```js
    {
        ...template_context
        content: instance.$( event.target ).val(),  // the current content of the textarea
    }
```

## Configuration

The package's behavior can be configured through a call to the `Notes.configure()` method, with just a single javascript object argument, which itself should only contains the options you want override.

Known configuration options are:

- `name`

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

`Notes.configure()` is a reactive data source.

## NPM peer dependencies

Starting with v 0.3.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`.

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.0.0:
```
    'lodash': '^4.17.0',
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
- Last updated on 2024, Jun. 24th

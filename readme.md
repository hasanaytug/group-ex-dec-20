Make a todo app.

Add an input field for the note content.
A button "Save" to save the notes in an array.
A button "Sort By Text" to sort the notes by text, and a button "Sort By Time" to sort the notes by the timestamp when they were created.
When user saves a note, create an object `{text: *the text inside the input*, timestamp: *current timestamp, looks like this: 1671402915492*}`.

Save the object in an array, and save that array to localstorage.

When user loads the page, load notes from localstorage.

The Sort By Text button sorts the notes array by text. Use a.text.localeCompare(b.text);
The Sort By Time button sorts the notes array by the timestamp in each note. Use a.timestamp - b.timestamp.


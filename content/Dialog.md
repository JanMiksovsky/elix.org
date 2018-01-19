# Dialog

A basic type of overlay that presents its assigned children as a basic modal dialog which appears on top of the main page content. The user must interact with the dialog before they can return to the page.

[A simple dialog](/demos/dialog.html)

Dialog uses [ModalBackdrop](ModalBackdrop) to add a backdrop behind the main overlay content.

## Usage

    // JavaScript
    import Dialog from 'elix/src/Dialog.js';
    const dialog = new Dialog(); // or
    const dialog = document.createElement('elix-dialog');

    <!-- HTML -->
    <script type="module" src="elix/src/Dialog.js"></script>
    <elix-dialog>
      <!-- Dialog contents go here -->
    </elix-dialog>

As with other elements that use [DialogModalityMixin](DialogModalityMixin), use modal overlays only when it's critical that you gain the user's attention, or when you need them to provide a response in order to continue. For all other overlay situations, consider using a [Popup](Popup) or other component using [PopupModalityMixin](PopupModalityMixin).

For a simple form of `Dialog` that can be easily created in JavaScript to ask a single question, see [AlertDialog](AlertDialog).

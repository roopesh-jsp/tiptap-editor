import { Extension } from "@tiptap/core";

export const Uppercase = Extension.create({
  name: "uppercase",
  addCommands() {
    return {
      transformToUppercase:
        () =>
        ({ editor }) => {
          const { from, to } = editor.state.selection;
          const selectedText = editor.state.doc.textBetween(from, to);
          editor
            .chain()
            .focus()
            .insertContentAt({ from, to }, selectedText.toUpperCase())
            .run();
        },
    };
  },
});

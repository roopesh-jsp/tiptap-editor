import { Extension } from "@tiptap/core";

export const Lowercase = Extension.create({
  name: "lowercase",
  addCommands() {
    return {
      transformToLowercase:
        () =>
        ({ editor }) => {
          const { from, to } = editor.state.selection;
          console.log(from, to);

          const selectedText = editor.state.doc.textBetween(from, to);
          editor
            .chain()
            .focus()
            .insertContentAt({ from, to }, selectedText.toLowerCase())
            .run();
        },
    };
  },
});

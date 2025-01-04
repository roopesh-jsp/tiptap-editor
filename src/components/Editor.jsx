import React from "react";
import Toolbar from "./toolbar";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Lowercase } from "../extentions-tiptap/lowercase";
import { Uppercase } from "../extentions-tiptap/uppercase";

function Editor() {
  const editor = useEditor({
    extensions: [StarterKit, Lowercase, Uppercase],
    content: "<p>helloo !! </p>",
  });
  return (
    <div>
      <Toolbar editor={editor} />

      <div className="editor-container">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

export default Editor;

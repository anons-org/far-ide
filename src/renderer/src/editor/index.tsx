import MonacoEditor from "@monaco-editor/react";
export default function Editor() {
  const handleEditorMount = (editor: any, monaco: any) => {
    console.log("Editor mounted", editor, monaco);
  };
  return (
    <div className="h-full w-full">
      <MonacoEditor
        height="100%"
        width="100%"
        language="javascript"
        theme="vs-dark"
        value="console.log('Hello, world!');"
        onMount={handleEditorMount}
      />
    </div>
  );
}

import { useFileContent } from "@/store/useFileContent.store";
import MonacoEditor from "@monaco-editor/react";
export default function Editor() {
  const fileContent = useFileContent((state) => state.fileContent);
  const selectedFileInfo = useFileContent((state) => state.selectedFileInfo);
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
        value={fileContent}
        onMount={handleEditorMount}
      />
    </div>
  );
}

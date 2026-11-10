import { Component, OnInit, ViewChild } from '@angular/core';
import { EditorComponent } from 'ngx-monaco-editor-v2';
import { FormsModule } from '@angular/forms';
import * as Monaco from 'monaco-editor';

@Component({
  imports: [EditorComponent,FormsModule],
  selector: 'app-main-editor',
  styleUrl: './main-editor.scss',
  templateUrl: './main-editor.html',
})
export class MainEditor {
  @ViewChild("editor")
  editor!: EditorComponent;

  editorOptions = { theme: 'vs-dark', language: 'javascript' };
  text = ""

  onEditorInit(editor:Monaco.editor.IEditor) {
    console.log(editor)
    editor.
  }



}

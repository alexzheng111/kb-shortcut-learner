interface IShortcut {
    key: string,
    command: string,
    when?: string,
    args?: Object
}

export const macOSKeybindings: IShortcut[] = [
    {
        key: "escape escape", command: "workbench.action.exitZenMode",
        when: "inZenMode"
    },
    {
        key: "shift+escape", command: "closeReferenceSearch",
        when: "inReferenceSearchEditor && !config.editor.stablePeek"
    },
    {
        key: "escape", command: "closeReferenceSearch",
        when: "inReferenceSearchEditor && !config.editor.stablePeek"
    },
    {
        key: "escape", command: "editor.closeTestPeek",
        when: "testing.isInPeek && !config.editor.stablePeek || testing.isPeekVisible && !config.editor.stablePeek"
    },
    {
        key: "shift+escape", command: "cancelSelection",
        when: "editorHasSelection && textInputFocus"
    },
    {
        key: "escape", command: "cancelSelection",
        when: "editorHasSelection && textInputFocus"
    },
    {
        key: "cmd+down", command: "cursorBottom",
        when: "textInputFocus"
    },
    {
        key: "shift+cmd+down", command: "cursorBottomSelect",
        when: "textInputFocus"
    },
    {
        key: "shift+alt+cmd+down", command: "cursorColumnSelectDown",
        when: "textInputFocus"
    },
    {
        key: "shift+alt+cmd+left", command: "cursorColumnSelectLeft",
        when: "textInputFocus"
    },
    {
        key: "shift+alt+cmd+pagedown", command: "cursorColumnSelectPageDown",
        when: "textInputFocus"
    },
    {
        key: "shift+alt+cmd+pageup", command: "cursorColumnSelectPageUp",
        when: "textInputFocus"
    },
    {
        key: "shift+alt+cmd+right", command: "cursorColumnSelectRight",
        when: "textInputFocus"
    },
    {
        key: "shift+alt+cmd+up", command: "cursorColumnSelectUp",
        when: "textInputFocus"
    },
    {
        key: "ctrl+n", command: "cursorDown",
        when: "textInputFocus"
    },
    {
        key: "down", command: "cursorDown",
        when: "textInputFocus"
    },
    {
        key: "shift+down", command: "cursorDownSelect",
        when: "textInputFocus"
    },
    {
        key: "cmd+right", command: "cursorEnd",
        when: "textInputFocus",
        "args": { "sticky": false }
    },
    {
        key: "end", command: "cursorEnd",
        when: "textInputFocus",
        "args": { "sticky": false }
    },
    {
        key: "shift+cmd+right", command: "cursorEndSelect",
        when: "textInputFocus",
        "args": { "sticky": false }
    },
    {
        key: "shift+end", command: "cursorEndSelect",
        when: "textInputFocus",
        "args": { "sticky": false }
    },
    {
        key: "cmd+left", command: "cursorHome",
        when: "textInputFocus"
    },
    {
        key: "home", command: "cursorHome",
        when: "textInputFocus"
    },
    {
        key: "shift+cmd+left", command: "cursorHomeSelect",
        when: "textInputFocus"
    },
    {
        key: "shift+home", command: "cursorHomeSelect",
        when: "textInputFocus"
    },
    {
        key: "ctrl+b", command: "cursorLeft",
        when: "textInputFocus"
    },
    {
        key: "left", command: "cursorLeft",
        when: "textInputFocus"
    },
    {
        key: "shift+left", command: "cursorLeftSelect",
        when: "textInputFocus"
    },
    {
        key: "ctrl+e", command: "cursorLineEnd",
        when: "textInputFocus"
    },
    {
        key: "ctrl+shift+e", command: "cursorLineEndSelect",
        when: "textInputFocus"
    },
    {
        key: "ctrl+a", command: "cursorLineStart",
        when: "textInputFocus"
    },
    {
        key: "ctrl+shift+a", command: "cursorLineStartSelect",
        when: "textInputFocus"
    },
    {
        key: "pagedown", command: "cursorPageDown",
        when: "textInputFocus"
    },
    {
        key: "shift+pagedown", command: "cursorPageDownSelect",
        when: "textInputFocus"
    },
    {
        key: "pageup", command: "cursorPageUp",
        when: "textInputFocus"
    },
    {
        key: "shift+pageup", command: "cursorPageUpSelect",
        when: "textInputFocus"
    },
    {
        key: "ctrl+f", command: "cursorRight",
        when: "textInputFocus"
    },
    {
        key: "right", command: "cursorRight",
        when: "textInputFocus"
    },
    {
        key: "shift+right", command: "cursorRightSelect",
        when: "textInputFocus"
    },
    {
        key: "cmd+up", command: "cursorTop",
        when: "textInputFocus"
    },
    {
        key: "shift+cmd+up", command: "cursorTopSelect",
        when: "textInputFocus"
    },
    {
        key: "ctrl+p", command: "cursorUp",
        when: "textInputFocus"
    },
    {
        key: "up", command: "cursorUp",
        when: "textInputFocus"
    },
    {
        key: "shift+up", command: "cursorUpSelect",
        when: "textInputFocus"
    },
    {
        key: "ctrl+backspace", command: "deleteLeft",
        when: "textInputFocus"
    },
    {
        key: "ctrl+h", command: "deleteLeft",
        when: "textInputFocus"
    },
    {
        key: "shift+backspace", command: "deleteLeft",
        when: "textInputFocus"
    },
    {
        key: "backspace", command: "deleteLeft",
        when: "textInputFocus"
    },
    {
        key: "ctrl+delete", command: "deleteRight",
        when: "textInputFocus"
    },
    {
        key: "ctrl+d", command: "deleteRight",
        when: "textInputFocus"
    },
    {
        key: "delete", command: "deleteRight",
        when: "textInputFocus"
    },
    { key: "cmd+a", command: "editor.action.selectAll" },
    { key: "cmd+c", command: "execCopy" },
    { key: "cmd+x", command: "execCut" },
    { key: "cmd+v", command: "execPaste" },
    {
        key: "cmd+l", command: "expandLineSelection",
        when: "textInputFocus"
    },
    {
        key: "down", command: "inlineChat.arrowOutDown",
        when: "inlineChatFocused && inlineChatHasProvider && inlineChatInnerCursorLast && !accessibilityModeEnabled && !isEmbeddedDiffEditor"
    },
    {
        key: "up", command: "inlineChat.arrowOutUp",
        when: "inlineChatFocused && inlineChatHasProvider && inlineChatInnerCursorFirst && !accessibilityModeEnabled && !isEmbeddedDiffEditor"
    },
    {
        key: "ctrl+o", command: "lineBreakInsert",
        when: "textInputFocus && !editorReadonly"
    },
    {
        key: "down", command: "notebook.focusNextEditor",
        when: "config.notebook.navigation.allowNavigateToSurroundingCells && inlineChatFocused && inlineChatInnerCursorLast && inputFocus && notebookEditorFocused && !accessibilityModeEnabled && !isEmbeddedDiffEditor && notebookEditorCursorAtBoundary != 'none' && notebookEditorCursorAtBoundary != 'top'"
    },
    {
        key: "down", command: "notebook.focusNextEditor",
        when: "config.notebook.navigation.allowNavigateToSurroundingCells && inlineChatFocused && inlineChatInnerCursorLast && notebookCursorNavigationMode && notebookEditorFocused && !accessibilityModeEnabled && !isEmbeddedDiffEditor && !notebookCellMarkdownEditMode && notebookCellType == 'markup'"
    },
    {
        key: "shift+tab", command: "outdent",
        when: "editorTextFocus && !editorReadonly && !editorTabMovesFocus"
    },
    { key: "shift+cmd+z", command: "redo" },
    {
        key: "ctrl+pagedown", command: "scrollLineDown",
        when: "textInputFocus"
    },
    {
        key: "ctrl+pageup", command: "scrollLineUp",
        when: "textInputFocus"
    },
    {
        key: "cmd+pagedown", command: "scrollPageDown",
        when: "textInputFocus"
    },
    {
        key: "cmd+pageup", command: "scrollPageUp",
        when: "textInputFocus"
    },
    {
        key: "tab", command: "tab",
        when: "editorTextFocus && !editorReadonly && !editorTabMovesFocus"
    },
    { key: "cmd+z", command: "undo" },
    {
        key: "shift+down", command: "cursorColumnSelectDown",
        when: "editorColumnSelection && textInputFocus"
    },
    {
        key: "shift+left", command: "cursorColumnSelectLeft",
        when: "editorColumnSelection && textInputFocus"
    },
    {
        key: "shift+pagedown", command: "cursorColumnSelectPageDown",
        when: "editorColumnSelection && textInputFocus"
    },
    {
        key: "shift+pageup", command: "cursorColumnSelectPageUp",
        when: "editorColumnSelection && textInputFocus"
    },
    {
        key: "shift+right", command: "cursorColumnSelectRight",
        when: "editorColumnSelection && textInputFocus"
    },
    {
        key: "shift+up", command: "cursorColumnSelectUp",
        when: "editorColumnSelection && textInputFocus"
    },
    {
        key: "shift+escape", command: "removeSecondaryCursors",
        when: "editorHasMultipleSelections && textInputFocus"
    },
    {
        key: "escape", command: "removeSecondaryCursors",
        when: "editorHasMultipleSelections && textInputFocus"
    },
    {
        key: "enter", command: "inlineChat.accept",
        when: "inlineChatFocused && inlineChatHasProvider && inlineChatVisible && !inlineChatEmpty"
    },
    {
        key: "down", command: "inlineChat.focus",
        when: "editorTextFocus && inlineChatVisible && !accessibilityModeEnabled && !inlineChatFocused && !isEmbeddedDiffEditor && inlineChatOuterCursorPosition == 'above'"
    },
    {
        key: "up", command: "inlineChat.focus",
        when: "editorTextFocus && inlineChatVisible && !accessibilityModeEnabled && !inlineChatFocused && !isEmbeddedDiffEditor && inlineChatOuterCursorPosition == 'below'"
    },
    {
        key: "cmd+down", command: "inlineChat.nextFromHistory",
        when: "inlineChatFocused && inlineChatHasProvider && inlineChatInnerCursorEnd"
    },
    {
        key: "cmd+up", command: "inlineChat.previousFromHistory",
        when: "inlineChatFocused && inlineChatHasProvider && inlineChatInnerCursorStart"
    },
    {
        key: "f12", command: "goToNextReference",
        when: "inReferenceSearchEditor || referenceSearchVisible"
    },
    {
        key: "f4", command: "goToNextReference",
        when: "inReferenceSearchEditor || referenceSearchVisible"
    },
    {
        key: "shift+f12", command: "goToPreviousReference",
        when: "inReferenceSearchEditor || referenceSearchVisible"
    },
    {
        key: "shift+f4", command: "goToPreviousReference",
        when: "inReferenceSearchEditor || referenceSearchVisible"
    },
    {
        key: "shift+enter", command: "refactorPreview.apply",
        when: "refactorPreview.enabled && refactorPreview.hasCheckedChanges && focusedView == 'refactorPreview'"
    },
    {
        key: "alt+enter", command: "testing.editFocusedTest",
        when: "focusedView == 'workbench.view.testing'"
    },
    {
        key: "escape", command: "notebook.cell.quitEdit",
        when: "inputFocus && notebookEditorFocused && !editorHasMultipleSelections && !editorHasSelection && !editorHoverVisible"
    },
    {
        key: "ctrl+enter", command: "notebook.cell.quitEdit",
        when: "inputFocus && notebookEditorFocused && notebookCellType == 'markup'"
    },
    {
        key: "escape", command: "inlineChat.cancel",
        when: "inlineChatHasProvider && inlineChatVisible"
    },
    {
        key: "cmd+f", command: "actions.find",
        when: "editorFocus || editorIsOpen"
    },
    { key: "cmd+e", command: "actions.findWithSelection" },
    {
        key: "enter", command: "breakpointWidget.action.acceptInput",
        when: "breakpointWidgetVisible && inBreakpointWidget"
    },
    {
        key: "enter", command: "chat.action.acceptInput",
        when: "inChatInput && textInputFocus"
    },
    {
        key: "cmd+up", command: "chat.action.focus",
        when: "inChatInput && textInputFocus"
    },
    {
        key: "shift+escape", command: "closeBreakpointWidget",
        when: "breakpointWidgetVisible && textInputFocus"
    },
    {
        key: "escape", command: "closeBreakpointWidget",
        when: "breakpointWidgetVisible && textInputFocus"
    },
    {
        key: "cmd+u", command: "cursorUndo",
        when: "textInputFocus"
    },
    {
        key: "alt+right", command: "cursorWordEndRight",
        when: "textInputFocus"
    },
    {
        key: "shift+alt+right", command: "cursorWordEndRightSelect",
        when: "textInputFocus"
    },
    {
        key: "alt+left", command: "cursorWordLeft",
        when: "textInputFocus"
    },
    {
        key: "shift+alt+left", command: "cursorWordLeftSelect",
        when: "textInputFocus"
    },
    {
        key: "ctrl+alt+left", command: "cursorWordPartLeft",
        when: "textInputFocus"
    },
    {
        key: "ctrl+shift+alt+left", command: "cursorWordPartLeftSelect",
        when: "textInputFocus"
    },
    {
        key: "ctrl+alt+right", command: "cursorWordPartRight",
        when: "textInputFocus"
    },
    {
        key: "ctrl+shift+alt+right", command: "cursorWordPartRightSelect",
        when: "textInputFocus"
    },
    {
        key: "cmd+backspace", command: "deleteAllLeft",
        when: "textInputFocus && !editorReadonly"
    },
    {
        key: "cmd+delete", command: "deleteAllRight",
        when: "textInputFocus && !editorReadonly"
    },
    {
        key: "ctrl+k", command: "deleteAllRight",
        when: "textInputFocus && !editorReadonly"
    },
    {
        key: "alt+backspace", command: "deleteWordLeft",
        when: "textInputFocus && !editorReadonly"
    },
    {
        key: "ctrl+alt+backspace", command: "deleteWordPartLeft",
        when: "textInputFocus && !editorReadonly"
    },
    {
        key: "ctrl+alt+delete", command: "deleteWordPartRight",
        when: "textInputFocus && !editorReadonly"
    },
    {
        key: "alt+delete", command: "deleteWordRight",
        when: "textInputFocus && !editorReadonly"
    },
    {
        key: "f7", command: "editor.action.accessibleDiffViewer.next",
        when: "isInDiffEditor"
    },
    {
        key: "shift+f7", command: "editor.action.accessibleDiffViewer.prev",
        when: "isInDiffEditor"
    },
    {
        key: "cmd+k cmd+c", command: "editor.action.addCommentLine",
        when: "editorTextFocus && !editorReadonly"
    },
    {
        key: "cmd+d", command: "editor.action.addSelectionToNextFindMatch",
        when: "editorFocus"
    },
    {
        key: "alt+cmd+.", command: "editor.action.autoFix",
        when: "textInputFocus && !editorReadonly && supportedCodeAction =~ /(\\s|^)quickfix\\b/"
    },
    {
        key: "shift+alt+a", command: "editor.action.blockComment",
        when: "editorTextFocus && !editorReadonly"
    },
    {
        key: "escape", command: "editor.action.cancelSelectionAnchor",
        when: "editorTextFocus && selectionAnchorSet"
    },
    {
        key: "cmd+f2", command: "editor.action.changeAll",
        when: "editorTextFocus && !editorReadonly"
    },
    { key: "cmd+c", command: "editor.action.clipboardCopyAction" },
    { key: "cmd+x", command: "editor.action.clipboardCutAction" },
    { key: "cmd+v", command: "editor.action.clipboardPasteAction" },
    {
        key: "cmd+/", command: "editor.action.commentLine",
        when: "editorTextFocus && !editorReadonly"
    },
    {
        key: "shift+alt+down", command: "editor.action.copyLinesDownAction",
        when: "editorTextFocus && !editorReadonly"
    },
    {
        key: "shift+alt+up", command: "editor.action.copyLinesUpAction",
        when: "editorTextFocus && !editorReadonly"
    },
    {
        key: "shift+cmd+k", command: "editor.action.deleteLines",
        when: "textInputFocus && !editorReadonly"
    },
    {
        key: "alt+f3", command: "editor.action.dirtydiff.next",
        when: "editorTextFocus && !textCompareEditorActive"
    },
    {
        key: "shift+alt+f3", command: "editor.action.dirtydiff.previous",
        when: "editorTextFocus && !textCompareEditorActive"
    },
    {
        key: "enter", command: "editor.action.extensioneditor.findNext",
        when: "webviewFindWidgetFocused && !editorFocus && activeEditor == 'workbench.editor.extension'"
    },
    {
        key: "shift+enter", command: "editor.action.extensioneditor.findPrevious",
        when: "webviewFindWidgetFocused && !editorFocus && activeEditor == 'workbench.editor.extension'"
    },
    {
        key: "cmd+f", command: "editor.action.extensioneditor.showfind",
        when: "!editorFocus && activeEditor == 'workbench.editor.extension'"
    },
    {
        key: "shift+alt+f", command: "editor.action.formatDocument",
        when: "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor"
    },
    {
        key: "shift+alt+f", command: "editor.action.formatDocument.none",
        when: "editorTextFocus && !editorHasDocumentFormattingProvider && !editorReadonly"
    },
    {
        key: "cmd+k cmd+f", command: "editor.action.formatSelection",
        when: "editorHasDocumentSelectionFormattingProvider && editorTextFocus && !editorReadonly"
    },
    {
        key: "cmd+down", command: "editor.action.goToBottomHover",
        when: "editorHoverFocused"
    },
    {
        key: "end", command: "editor.action.goToBottomHover",
        when: "editorHoverFocused"
    },
    {
        key: "enter", command: "editor.action.goToFocusedStickyScrollLine",
        when: "stickyScrollFocused"
    },
    {
        key: "cmd+f12", command: "editor.action.goToImplementation",
        when: "editorHasImplementationProvider && editorTextFocus && !isInEmbeddedEditor"
    },
    {
        key: "shift+f12", command: "editor.action.goToReferences",
        when: "editorHasReferenceProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor"
    },
    {
        key: "cmd+up", command: "editor.action.goToTopHover",
        when: "editorHoverFocused"
    },
    {
        key: "home", command: "editor.action.goToTopHover",
        when: "editorHoverFocused"
    },
    {
        key: "escape", command: "editor.action.hideColorPicker",
        when: "standaloneColorPickerVisible"
    },
    {
        key: "shift+cmd+.", command: "editor.action.inPlaceReplace.down",
        when: "editorTextFocus && !editorReadonly"
    },
    {
        key: "shift+cmd+,", command: "editor.action.inPlaceReplace.up",
        when: "editorTextFocus && !editorReadonly"
    },
    {
        key: "cmd+]", command: "editor.action.indentLines",
        when: "editorTextFocus && !editorReadonly"
    },
    {
        key: "escape", command: "editor.action.inlineSuggest.hide",
        when: "inlineSuggestionVisible"
    },
    {
        key: "alt+]", command: "editor.action.inlineSuggest.showNext",
        when: "inlineSuggestionVisible && !editorReadonly"
    },
    {
        key: "alt+[", command: "editor.action.inlineSuggest.showPrevious",
        when: "inlineSuggestionVisible && !editorReadonly"
    },
    {
        key: "enter", command: "editor.action.insertColorWithStandaloneColorPicker",
        when: "standaloneColorPickerFocused"
    },
    {
        key: "alt+cmd+up", command: "editor.action.insertCursorAbove",
        when: "editorTextFocus"
    },
    {
        key: "shift+alt+i", command: "editor.action.insertCursorAtEndOfEachLineSelected",
        when: "editorTextFocus"
    },
    {
        key: "alt+cmd+down", command: "editor.action.insertCursorBelow",
        when: "editorTextFocus"
    },
    {
        key: "cmd+enter", command: "editor.action.insertLineAfter",
        when: "editorTextFocus && !editorReadonly"
    },
    {
        key: "shift+cmd+enter", command: "editor.action.insertLineBefore",
        when: "editorTextFocus && !editorReadonly"
    },
    {
        key: "ctrl+j", command: "editor.action.joinLines",
        when: "editorTextFocus && !editorReadonly"
    },
    {
        key: "shift+cmd+\\", command: "editor.action.jumpToBracket",
        when: "editorTextFocus"
    },
    {
        key: "shift+cmd+f2", command: "editor.action.linkedEditing",
        when: "editorHasRenameProvider && editorTextFocus && !editorReadonly"
    },
    {
        key: "alt+f8", command: "editor.action.marker.next",
        when: "editorFocus"
    },
    {
        key: "f8", command: "editor.action.marker.nextInFiles",
        when: "editorFocus"
    },
    {
        key: "shift+alt+f8", command: "editor.action.marker.prev",
        when: "editorFocus"
    },
    {
        key: "shift+f8", command: "editor.action.marker.prevInFiles",
        when: "editorFocus"
    },
    {
        key: "alt+down", command: "editor.action.moveLinesDownAction",
        when: "editorTextFocus && !editorReadonly"
    },
    {
        key: "alt+up", command: "editor.action.moveLinesUpAction",
        when: "editorTextFocus && !editorReadonly"
    },
    {
        key: "cmd+k cmd+d", command: "editor.action.moveSelectionToNextFindMatch",
        when: "editorFocus"
    },
    { key: "alt+f9", command: "editor.action.nextCommentThreadAction" },
    {
        key: "cmd+k alt+cmd+down", command: "editor.action.nextCommentingRange",
        when: "accessibilityModeEnabled && commentFocused || accessibilityModeEnabled && editorFocus || accessibilityHelpIsShown && accessibilityModeEnabled && accessibleViewCurrentProviderId == 'comments'"
    },
    {
        key: "f3", command: "editor.action.nextMatchFindAction",
        when: "editorFocus"
    },
    {
        key: "cmd+g", command: "editor.action.nextMatchFindAction",
        when: "editorFocus"
    },
    {
        key: "enter", command: "editor.action.nextMatchFindAction",
        when: "editorFocus && findInputFocussed"
    },
    {
        key: "cmd+f3", command: "editor.action.nextSelectionMatchFindAction",
        when: "editorFocus"
    },
    {
        key: "shift+alt+o", command: "editor.action.organizeImports",
        when: "textInputFocus && !editorReadonly && supportedCodeAction =~ /(\\s|^)source\\.organizeImports\\b/"
    },
    {
        key: "cmd+[", command: "editor.action.outdentLines",
        when: "editorTextFocus && !editorReadonly"
    },
    {
        key: "alt+down", command: "editor.action.pageDownHover",
        when: "editorHoverFocused"
    },
    {
        key: "pagedown", command: "editor.action.pageDownHover",
        when: "editorHoverFocused"
    },
    {
        key: "alt+up", command: "editor.action.pageUpHover",
        when: "editorHoverFocused"
    },
    {
        key: "pageup", command: "editor.action.pageUpHover",
        when: "editorHoverFocused"
    },
    {
        key: "alt+f12", command: "editor.action.peekDefinition",
        when: "editorHasDefinitionProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor"
    },
    {
        key: "shift+cmd+f12", command: "editor.action.peekImplementation",
        when: "editorHasImplementationProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor"
    },
    { key: "shift+alt+f9", command: "editor.action.previousCommentThreadAction" },
    {
        key: "cmd+k alt+cmd+up", command: "editor.action.previousCommentingRange",
        when: "accessibilityModeEnabled && commentFocused || accessibilityModeEnabled && editorFocus || accessibilityHelpIsShown && accessibilityModeEnabled && accessibleViewCurrentProviderId == 'comments'"
    },
    {
        key: "shift+f3", command: "editor.action.previousMatchFindAction",
        when: "editorFocus"
    },
    {
        key: "shift+cmd+g", command: "editor.action.previousMatchFindAction",
        when: "editorFocus"
    },
    {
        key: "shift+enter", command: "editor.action.previousMatchFindAction",
        when: "editorFocus && findInputFocussed"
    },
    {
        key: "shift+cmd+f3", command: "editor.action.previousSelectionMatchFindAction",
        when: "editorFocus"
    },
    {
        key: "cmd+.", command: "editor.action.quickFix",
        when: "editorHasCodeActionsProvider && textInputFocus && !editorReadonly"
    },
    {
        key: "ctrl+shift+r", command: "editor.action.refactor",
        when: "editorHasCodeActionsProvider && textInputFocus && !editorReadonly"
    },
    {
        key: "alt+cmd+backspace", command: "editor.action.removeBrackets",
        when: "editorTextFocus"
    },
    {
        key: "cmd+k cmd+u", command: "editor.action.removeCommentLine",
        when: "editorTextFocus && !editorReadonly"
    },
    {
        key: "f2", command: "editor.action.rename",
        when: "editorHasRenameProvider && editorTextFocus && !editorReadonly"
    },
    {
        key: "f12", command: "editor.action.revealDefinition",
        when: "editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor"
    },
    {
        key: "cmd+f12", command: "editor.action.revealDefinition",
        when: "editorHasDefinitionProvider && editorTextFocus && isWeb && !isInEmbeddedEditor"
    },
    {
        key: "cmd+k f12", command: "editor.action.revealDefinitionAside",
        when: "editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor"
    },
    {
        key: "cmd+k cmd+f12", command: "editor.action.revealDefinitionAside",
        when: "editorHasDefinitionProvider && editorTextFocus && isWeb && !isInEmbeddedEditor"
    },
    {
        key: "down", command: "editor.action.scrollDownHover",
        when: "editorHoverFocused"
    },
    {
        key: "left", command: "editor.action.scrollLeftHover",
        when: "editorHoverFocused"
    },
    {
        key: "right", command: "editor.action.scrollRightHover",
        when: "editorHoverFocused"
    },
    {
        key: "up", command: "editor.action.scrollUpHover",
        when: "editorHoverFocused"
    },
    {
        key: "escape", command: "editor.action.selectEditor",
        when: "stickyScrollFocused"
    },
    {
        key: "cmd+k cmd+k", command: "editor.action.selectFromAnchorToCursor",
        when: "editorTextFocus && selectionAnchorSet"
    },
    {
        key: "shift+cmd+l", command: "editor.action.selectHighlights",
        when: "editorFocus"
    },
    {
        key: "down", command: "editor.action.selectNextStickyScrollLine",
        when: "stickyScrollFocused"
    },
    {
        key: "up", command: "editor.action.selectPreviousStickyScrollLine",
        when: "stickyScrollFocused"
    },
    {
        key: "cmd+k cmd+b", command: "editor.action.setSelectionAnchor",
        when: "editorTextFocus"
    },
    {
        key: "shift+f10", command: "editor.action.showContextMenu",
        when: "textInputFocus"
    },
    {
        key: "cmd+k cmd+i", command: "editor.action.showHover",
        when: "editorTextFocus"
    },
    {
        key: "ctrl+shift+right", command: "editor.action.smartSelect.expand",
        when: "editorTextFocus"
    },
    {
        key: "ctrl+shift+cmd+right", command: "editor.action.smartSelect.expand",
        when: "editorTextFocus"
    },
    {
        key: "ctrl+shift+left", command: "editor.action.smartSelect.shrink",
        when: "editorTextFocus"
    },
    {
        key: "ctrl+shift+cmd+left", command: "editor.action.smartSelect.shrink",
        when: "editorTextFocus"
    },
    {
        key: "alt+cmd+f", command: "editor.action.startFindReplaceAction",
        when: "editorFocus || editorIsOpen"
    },
    {
        key: "cmd+enter", command: "editor.action.submitComment",
        when: "commentEditorFocused"
    },
    { key: "ctrl+shift+m", command: "editor.action.toggleTabFocusMode" },
    { key: "alt+z", command: "editor.action.toggleWordWrap" },
    {
        key: "ctrl+t", command: "editor.action.transposeLetters",
        when: "textInputFocus && !editorReadonly"
    },
    {
        key: "shift+cmd+space", command: "editor.action.triggerParameterHints",
        when: "editorHasSignatureHelpProvider && editorTextFocus"
    },
    {
        key: "cmd+i", command: "editor.action.triggerSuggest",
        when: "editorHasCompletionItemProvider && textInputFocus && !editorReadonly && !suggestWidgetVisible"
    },
    {
        key: "alt+escape", command: "editor.action.triggerSuggest",
        when: "editorHasCompletionItemProvider && textInputFocus && !editorReadonly && !suggestWidgetVisible"
    },
    {
        key: "ctrl+space", command: "editor.action.triggerSuggest",
        when: "editorHasCompletionItemProvider && textInputFocus && !editorReadonly && !suggestWidgetVisible"
    },
    {
        key: "cmd+k cmd+x", command: "editor.action.trimTrailingWhitespace",
        when: "editorTextFocus && !editorReadonly"
    },
    {
        key: "enter", command: "editor.action.webvieweditor.findNext",
        when: "webviewFindWidgetFocused && !editorFocus && activeEditor == 'WebviewEditor'"
    },
    {
        key: "shift+enter", command: "editor.action.webvieweditor.findPrevious",
        when: "webviewFindWidgetFocused && !editorFocus && activeEditor == 'WebviewEditor'"
    },
    {
        key: "escape", command: "editor.action.webvieweditor.hideFind",
        when: "webviewFindWidgetVisible && !editorFocus && activeEditor == 'WebviewEditor'"
    },
    {
        key: "cmd+f", command: "editor.action.webvieweditor.showFind",
        when: "webviewFindWidgetEnabled && !editorFocus && activeEditor == 'WebviewEditor'"
    },
    {
        key: "f7", command: "editor.action.wordHighlight.next",
        when: "editorTextFocus && hasWordHighlights"
    },
    {
        key: "shift+f7", command: "editor.action.wordHighlight.prev",
        when: "editorTextFocus && hasWordHighlights"
    },
    {
        key: "escape", command: "editor.cancelOperation",
        when: "cancellableOperation"
    },
    {
        key: "cmd+.", command: "editor.changeDropType",
        when: "dropWidgetVisible"
    },
    {
        key: "cmd+.", command: "editor.changePasteType",
        when: "pasteWidgetVisible"
    },
    {
        key: "cmd+k cmd+,", command: "editor.createFoldingRangeFromSelection",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "escape", command: "editor.debug.action.closeExceptionWidget",
        when: "exceptionWidgetVisible"
    },
    {
        key: "cmd+k cmd+i", command: "editor.debug.action.showDebugHover",
        when: "editorTextFocus && inDebugMode"
    },
    {
        key: "f9", command: "editor.debug.action.toggleBreakpoint",
        when: "debuggersAvailable && disassemblyViewFocus || debuggersAvailable && editorTextFocus"
    },
    {
        key: "tab", command: "editor.emmet.action.expandAbbreviation",
        when: "config.emmet.triggerExpansionOnTab && editorTextFocus && !editorReadonly && !editorTabMovesFocus"
    },
    {
        key: "alt+cmd+[", command: "editor.fold",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "cmd+k cmd+0", command: "editor.foldAll",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "cmd+k cmd+/", command: "editor.foldAllBlockComments",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "cmd+k cmd+-", command: "editor.foldAllExcept",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "cmd+k cmd+8", command: "editor.foldAllMarkerRegions",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "cmd+k cmd+1", command: "editor.foldLevel1",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "cmd+k cmd+2", command: "editor.foldLevel2",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "cmd+k cmd+3", command: "editor.foldLevel3",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "cmd+k cmd+4", command: "editor.foldLevel4",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "cmd+k cmd+5", command: "editor.foldLevel5",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "cmd+k cmd+6", command: "editor.foldLevel6",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "cmd+k cmd+7", command: "editor.foldLevel7",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "cmd+k cmd+[", command: "editor.foldRecursively",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "f12", command: "editor.gotoNextSymbolFromResult",
        when: "hasSymbols"
    },
    {
        key: "escape", command: "editor.gotoNextSymbolFromResult.cancel",
        when: "hasSymbols"
    },
    {
        key: "cmd+k cmd+.", command: "editor.removeManualFoldingRanges",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "cmd+k cmd+l", command: "editor.toggleFold",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "alt+cmd+]", command: "editor.unfold",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "cmd+k cmd+j", command: "editor.unfoldAll",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "cmd+k cmd+=", command: "editor.unfoldAllExcept",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "cmd+k cmd+9", command: "editor.unfoldAllMarkerRegions",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "cmd+k cmd+]", command: "editor.unfoldRecursively",
        when: "editorTextFocus && foldingEnabled"
    },
    {
        key: "escape", command: "inlayHints.stopReadingLineWithHint",
        when: "isReadingLineWithInlayHints"
    },
    {
        key: "escape", command: "inlineChat.discard",
        when: "inlineChatHasProvider && inlineChatVisible && !inlineChatUserDidEdit"
    },
    {
        key: "escape", command: "inlineChat.stop",
        when: "inlineChatHasActiveRequest && inlineChatHasProvider && inlineChatVisible && !inlineChatEmpty"
    },
    {
        key: "tab", command: "insertSnippet",
        when: "editorTextFocus && hasSnippetCompletions && !editorTabMovesFocus && !inSnippetMode"
    },
    {
        key: "escape", command: "interactive.acceptChanges",
        when: "inlineChatHasProvider && inlineChatUserDidEdit && inlineChatVisible && !inlineChatDocumentChanged || inlineChatHasProvider && inlineChatUserDidEdit && inlineChatVisible && config.inlineChat.editMode != 'preview'"
    },
    {
        key: "ctrl+enter", command: "interactive.execute",
        when: "activeEditor == 'workbench.editor.interactive'"
    },
    {
        key: "pagedown", command: "notebook.cell.cursorPageDown",
        when: "editorTextFocus && inputFocus && notebookEditorFocused"
    },
    {
        key: "shift+pagedown", command: "notebook.cell.cursorPageDownSelect",
        when: "editorTextFocus && inputFocus && notebookEditorFocused"
    },
    {
        key: "pageup", command: "notebook.cell.cursorPageUp",
        when: "editorTextFocus && inputFocus && notebookEditorFocused"
    },
    {
        key: "shift+pageup", command: "notebook.cell.cursorPageUpSelect",
        when: "editorTextFocus && inputFocus && notebookEditorFocused"
    },
    {
        key: "ctrl+enter", command: "notebook.cell.execute",
        when: "notebookCellListFocused && notebookMissingKernelExtension && !notebookCellExecuting && notebookCellType == 'code' || notebookCellListFocused && !notebookCellExecuting && notebookCellType == 'code' && notebookKernelCount > 0 || notebookCellListFocused && !notebookCellExecuting && notebookCellType == 'code' && notebookKernelSourceCount > 0"
    },
    {
        key: "alt+enter", command: "notebook.cell.executeAndInsertBelow",
        when: "notebookCellListFocused && notebookCellType == 'markup' || notebookCellListFocused && notebookMissingKernelExtension && !notebookCellExecuting && notebookCellType == 'code' || notebookCellListFocused && !notebookCellExecuting && notebookCellType == 'code' && notebookKernelCount > 0 || notebookCellListFocused && !notebookCellExecuting && notebookCellType == 'code' && notebookKernelSourceCount > 0"
    },
    {
        key: "shift+enter", command: "notebook.cell.executeAndSelectBelow",
        when: "notebookCellListFocused && !inlineChatFocused && notebookCellType == 'markup' || notebookCellListFocused && notebookMissingKernelExtension && !inlineChatFocused && !notebookCellExecuting && notebookCellType == 'code' || notebookCellListFocused && !inlineChatFocused && !notebookCellExecuting && notebookCellType == 'code' && notebookKernelCount > 0 || notebookCellListFocused && !inlineChatFocused && !notebookCellExecuting && notebookCellType == 'code' && notebookKernelSourceCount > 0"
    },
    {
        key: "shift+cmd+v", command: "notebook.cell.pasteAbove",
        when: "notebookEditorFocused && !inputFocus"
    },
    {
        key: "down", command: "notebook.focusNextEditor",
        when: "config.notebook.navigation.allowNavigateToSurroundingCells && editorTextFocus && inputFocus && notebookEditorFocused && !accessibilityModeEnabled && !isEmbeddedDiffEditor && notebookEditorCursorAtBoundary != 'none' && notebookEditorCursorAtBoundary != 'top'"
    },
    {
        key: "up", command: "notebook.focusPreviousEditor",
        when: "config.notebook.navigation.allowNavigateToSurroundingCells && editorTextFocus && inputFocus && notebookEditorFocused && !accessibilityModeEnabled && !isEmbeddedDiffEditor && notebookEditorCursorAtBoundary != 'bottom' && notebookEditorCursorAtBoundary != 'none'"
    },
    {
        key: "shift+alt+f", command: "notebook.formatCell",
        when: "editorHasDocumentFormattingProvider && editorTextFocus && inCompositeEditor && notebookEditable && !editorReadonly && activeEditor == 'workbench.editor.notebook'"
    },
    {
        key: "ctrl+enter", command: "openReferenceToSide",
        when: "listFocus && referenceSearchVisible && !inputFocus && !treeElementCanCollapse && !treeElementCanExpand"
    },
    {
        key: "enter", command: "repl.action.acceptInput",
        when: "inDebugRepl && textInputFocus"
    },
    {
        key: "cmd+f", command: "repl.action.filter",
        when: "inDebugRepl && textInputFocus"
    },
    {
        key: "shift+cmd+r", command: "rerunSearchEditorSearch",
        when: "inSearchEditor"
    },
    {
        key: "escape", command: "search.action.focusQueryEditorWidget",
        when: "inSearchEditor"
    },
    {
        key: "shift+cmd+backspace", command: "search.searchEditor.action.deleteFileResults",
        when: "inSearchEditor"
    },
    {
        key: "escape", command: "settings.action.clearSearchResults",
        when: "inSettingsEditor && inSettingsSearch"
    },
    {
        key: "down", command: "settings.action.focusSettingsFile",
        when: "inSettingsSearch && !suggestWidgetVisible"
    },
    {
        key: "cmd+f", command: "settings.action.search",
        when: "inSettingsEditor"
    },
    {
        key: "cmd+/", command: "toggleExplainMode",
        when: "suggestWidgetVisible"
    },
    {
        key: "cmd+k f2", command: "togglePeekWidgetFocus",
        when: "inReferenceSearchEditor || referenceSearchVisible"
    },
    {
        key: "escape", command: "welcome.goBack",
        when: "inWelcome && activeEditor == 'gettingStartedPage'"
    },
    { key: "cmd+k alt+cmd+c", command: "workbench.action.addComment" },
    {
        key: "ctrl+enter", command: "workbench.action.chat.runInTerminal",
        when: "hasChatProvider && inChat"
    },
    {
        key: "alt+f5", command: "workbench.action.editor.nextChange",
        when: "editorTextFocus && !textCompareEditorActive"
    },
    {
        key: "shift+alt+f5", command: "workbench.action.editor.previousChange",
        when: "editorTextFocus && !textCompareEditorActive"
    },
    {
        key: "shift+escape", command: "workbench.action.hideComment",
        when: "commentEditorFocused"
    },
    {
        key: "escape", command: "workbench.action.hideComment",
        when: "commentEditorFocused"
    },
    {
        key: "cmd+right", command: "editor.action.inlineSuggest.acceptNextWord",
        when: "inlineSuggestionVisible && !editorReadonly"
    },
    {
        key: "alt+f8", command: "testing.goToNextMessage",
        when: "editorFocus && testing.isPeekVisible"
    },
    {
        key: "shift+alt+f8", command: "testing.goToPreviousMessage",
        when: "editorFocus && testing.isPeekVisible"
    },
    {
        key: "shift+escape", command: "closeFindWidget",
        when: "editorFocus && findWidgetVisible && !isComposing"
    },
    {
        key: "escape", command: "closeFindWidget",
        when: "editorFocus && findWidgetVisible && !isComposing"
    },
    {
        key: "alt+cmd+enter", command: "editor.action.replaceAll",
        when: "editorFocus && findWidgetVisible"
    },
    {
        key: "cmd+enter", command: "editor.action.replaceAll",
        when: "editorFocus && findWidgetVisible && replaceInputFocussed"
    },
    {
        key: "shift+cmd+1", command: "editor.action.replaceOne",
        when: "editorFocus && findWidgetVisible"
    },
    {
        key: "enter", command: "editor.action.replaceOne",
        when: "editorFocus && findWidgetVisible && replaceInputFocussed"
    },
    {
        key: "alt+enter", command: "editor.action.selectAllMatches",
        when: "editorFocus && findWidgetVisible"
    },
    {
        key: "alt+cmd+c", command: "toggleFindCaseSensitive",
        when: "editorFocus"
    },
    {
        key: "alt+cmd+l", command: "toggleFindInSelection",
        when: "editorFocus"
    },
    {
        key: "alt+cmd+r", command: "toggleFindRegex",
        when: "editorFocus"
    },
    {
        key: "alt+cmd+w", command: "toggleFindWholeWord",
        when: "editorFocus"
    },
    {
        key: "alt+cmd+p", command: "togglePreserveCase",
        when: "editorFocus"
    },
    {
        key: "cmd+enter", command: "interactive.acceptChanges",
        when: "inlineChatHasProvider && inlineChatVisible && !inlineChatDocumentChanged || inlineChatHasProvider && inlineChatVisible && config.inlineChat.editMode != 'preview'"
    },
    {
        key: "tab", command: "jumpToNextSnippetPlaceholder",
        when: "editorTextFocus && hasNextTabstop && inSnippetMode"
    },
    {
        key: "shift+tab", command: "jumpToPrevSnippetPlaceholder",
        when: "editorTextFocus && hasPrevTabstop && inSnippetMode"
    },
    {
        key: "escape", command: "leaveEditorMessage",
        when: "messageVisible"
    },
    {
        key: "shift+escape", command: "leaveSnippet",
        when: "editorTextFocus && inSnippetMode"
    },
    {
        key: "escape", command: "leaveSnippet",
        when: "editorTextFocus && inSnippetMode"
    },
    {
        key: "shift+escape", command: "closeDirtyDiff",
        when: "dirtyDiffVisible"
    },
    {
        key: "escape", command: "closeDirtyDiff",
        when: "dirtyDiffVisible"
    },
    {
        key: "shift+escape", command: "closeMarkersNavigation",
        when: "editorFocus && markersNavigationVisible"
    },
    {
        key: "escape", command: "closeMarkersNavigation",
        when: "editorFocus && markersNavigationVisible"
    },
    {
        key: "escape", command: "notifications.hideToasts",
        when: "notificationToastsVisible"
    },
    {
        key: "shift+escape", command: "closeParameterHints",
        when: "editorFocus && parameterHintsVisible"
    },
    {
        key: "escape", command: "closeParameterHints",
        when: "editorFocus && parameterHintsVisible"
    },
    {
        key: "ctrl+n", command: "showNextParameterHint",
        when: "editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible"
    },
    {
        key: "alt+down", command: "showNextParameterHint",
        when: "editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible"
    },
    {
        key: "down", command: "showNextParameterHint",
        when: "editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible"
    },
    {
        key: "ctrl+p", command: "showPrevParameterHint",
        when: "editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible"
    },
    {
        key: "alt+up", command: "showPrevParameterHint",
        when: "editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible"
    },
    {
        key: "up", command: "showPrevParameterHint",
        when: "editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible"
    },
    {
        key: "shift+tab", command: "acceptAlternativeSelectedSuggestion",
        when: "suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && textInputFocus"
    },
    {
        key: "shift+enter", command: "acceptAlternativeSelectedSuggestion",
        when: "suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && textInputFocus"
    },
    {
        key: "tab", command: "acceptSelectedSuggestion",
        when: "suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && textInputFocus"
    },
    {
        key: "enter", command: "acceptSelectedSuggestion",
        when: "acceptSuggestionOnEnter && suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && suggestionMakesTextEdit && textInputFocus"
    },
    {
        key: "cmd+i", command: "focusSuggestion",
        when: "suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        key: "ctrl+space", command: "focusSuggestion",
        when: "suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        key: "shift+escape", command: "hideSuggestWidget",
        when: "suggestWidgetVisible && textInputFocus"
    },
    {
        key: "escape", command: "hideSuggestWidget",
        when: "suggestWidgetVisible && textInputFocus"
    },
    {
        key: "tab", command: "insertBestCompletion",
        when: "atEndOfWord && textInputFocus && !hasOtherSuggestions && !inSnippetMode && !suggestWidgetVisible && config.editor.tabCompletion == 'on'"
    },
    {
        key: "tab", command: "insertNextSuggestion",
        when: "hasOtherSuggestions && textInputFocus && !inSnippetMode && !suggestWidgetVisible && config.editor.tabCompletion == 'on'"
    },
    {
        key: "shift+tab", command: "insertPrevSuggestion",
        when: "hasOtherSuggestions && textInputFocus && !inSnippetMode && !suggestWidgetVisible && config.editor.tabCompletion == 'on'"
    },
    {
        key: "cmd+pagedown", command: "selectNextPageSuggestion",
        when: "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        key: "pagedown", command: "selectNextPageSuggestion",
        when: "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        key: "ctrl+n", command: "selectNextSuggestion",
        when: "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        key: "cmd+down", command: "selectNextSuggestion",
        when: "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        key: "down", command: "selectNextSuggestion",
        when: "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        key: "cmd+pageup", command: "selectPrevPageSuggestion",
        when: "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        key: "pageup", command: "selectPrevPageSuggestion",
        when: "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        key: "ctrl+p", command: "selectPrevSuggestion",
        when: "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        key: "cmd+up", command: "selectPrevSuggestion",
        when: "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        key: "up", command: "selectPrevSuggestion",
        when: "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        key: "cmd+i", command: "toggleSuggestionDetails",
        when: "suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && textInputFocus"
    },
    {
        key: "ctrl+space", command: "toggleSuggestionDetails",
        when: "suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && textInputFocus"
    },
    {
        key: "ctrl+alt+space", command: "toggleSuggestionFocus",
        when: "suggestWidgetVisible && textInputFocus"
    },
    {
        key: "enter", command: "acceptRenameInput",
        when: "editorFocus && renameInputVisible && !isComposing"
    },
    {
        key: "shift+enter", command: "acceptRenameInputWithPreview",
        when: "config.editor.rename.enablePreview && editorFocus && renameInputVisible && !isComposing"
    },
    {
        key: "shift+escape", command: "cancelLinkedEditingInput",
        when: "LinkedEditingInputVisible && editorTextFocus"
    },
    {
        key: "escape", command: "cancelLinkedEditingInput",
        when: "LinkedEditingInputVisible && editorTextFocus"
    },
    {
        key: "shift+escape", command: "cancelRenameInput",
        when: "editorFocus && renameInputVisible"
    },
    {
        key: "escape", command: "cancelRenameInput",
        when: "editorFocus && renameInputVisible"
    },
    {
        key: "shift+cmd+l", command: "addCursorsAtSearchResults",
        when: "fileMatchOrMatchFocus && searchViewletVisible"
    },
    {
        key: "shift+cmd+;", command: "breadcrumbs.focus",
        when: "breadcrumbsPossible && breadcrumbsVisible"
    },
    {
        key: "shift+cmd+.", command: "breadcrumbs.focusAndSelect",
        when: "breadcrumbsPossible && breadcrumbsVisible"
    },
    {
        key: "alt+right", command: "breadcrumbs.focusNext",
        when: "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        key: "right", command: "breadcrumbs.focusNext",
        when: "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        key: "alt+left", command: "breadcrumbs.focusPrevious",
        when: "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        key: "left", command: "breadcrumbs.focusPrevious",
        when: "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        key: "cmd+enter", command: "breadcrumbs.revealFocused",
        when: "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        key: "space", command: "breadcrumbs.revealFocused",
        when: "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        key: "cmd+enter", command: "breadcrumbs.revealFocusedFromTreeAside",
        when: "breadcrumbsActive && breadcrumbsVisible && listFocus && !inputFocus"
    },
    {
        key: "down", command: "breadcrumbs.selectFocused",
        when: "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        key: "enter", command: "breadcrumbs.selectFocused",
        when: "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        key: "shift+cmd+.", command: "breadcrumbs.toggleToOn",
        when: "!config.breadcrumbs.enabled"
    },
    {
        key: "escape", command: "closeReplaceInFilesWidget",
        when: "replaceInputBoxFocus && searchViewletVisible"
    },
    {
        key: "escape", command: "commentsClearFilterText",
        when: "commentsFilterFocus"
    },
    {
        key: "cmd+f", command: "commentsFocusFilter",
        when: "focusedView == 'workbench.panel.comments'"
    },
    {
        key: "cmd+down", command: "commentsFocusViewFromFilter",
        when: "commentsFilterFocus"
    },
    {
        key: "alt+cmd+c", command: "copyFilePath",
        when: "!editorFocus"
    },
    {
        key: "cmd+k alt+cmd+c", command: "copyFilePath",
        when: "editorFocus"
    },
    {
        key: "shift+alt+cmd+c", command: "copyRelativeFilePath",
        when: "!editorFocus"
    },
    {
        key: "cmd+k shift+alt+cmd+c", command: "copyRelativeFilePath",
        when: "editorFocus"
    },
    {
        key: "alt+enter", command: "debug.openBreakpointToSide",
        when: "breakpointsFocused"
    },
    {
        key: "cmd+enter", command: "debug.openBreakpointToSide",
        when: "breakpointsFocused"
    },
    {
        key: "cmd+f5", command: "debug.openView",
        when: "!debuggersAvailable"
    },
    {
        key: "f5", command: "debug.openView",
        when: "!debuggersAvailable"
    },
    {
        key: "cmd+backspace", command: "debug.removeBreakpoint",
        when: "breakpointsFocused && !breakpointInputFocused"
    },
    {
        key: "cmd+backspace", command: "debug.removeWatchExpression",
        when: "watchExpressionsFocused && !expressionSelected"
    },
    {
        key: "alt+-", command: "decreaseSearchEditorContextLines",
        when: "inSearchEditor"
    },
    { key: "alt+f1", command: "editor.action.accessibilityHelp" },
    { key: "alt+f2", command: "editor.action.accessibleView" },
    {
        key: "ctrl+/", command: "editor.action.accessibleViewAcceptInlineCompletion",
        when: "accessibleViewIsShown && accessibleViewCurrentProviderId == 'inlineCompletions'"
    },
    {
        key: "alt+f6", command: "editor.action.accessibleViewDisableHint",
        when: "accessibilityHelpIsShown && accessibleViewVerbosityEnabled || accessibleViewIsShown && accessibleViewVerbosityEnabled"
    },
    {
        key: "alt+]", command: "editor.action.accessibleViewNext",
        when: "accessibleViewIsShown && accessibleViewSupportsNavigation"
    },
    {
        key: "alt+[", command: "editor.action.accessibleViewPrevious",
        when: "accessibleViewIsShown && accessibleViewSupportsNavigation"
    },
    {
        key: "cmd+k cmd+k", command: "editor.action.defineKeybinding",
        when: "resource == 'vscode-userdata:/Users/runner/work/vs-code-default-keybindings/vs-code-default-keybindings/scripts/get_default_keybindings/empty2/User/keybindings.json'"
    },
    {
        key: "tab", command: "editor.action.inlineSuggest.commit",
        when: "inlineSuggestionHasIndentationLessThanTabSize && inlineSuggestionVisible && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible"
    },
    {
        key: "shift+f9", command: "editor.debug.action.toggleInlineBreakpoint",
        when: "editorTextFocus"
    },
    {
        key: "shift+alt+d", command: "editor.detectLanguage",
        when: "editorTextFocus && !notebookEditable"
    },
    {
        key: "shift+enter", command: "editor.refocusCallHierarchy",
        when: "callHierarchyVisible"
    },
    {
        key: "shift+enter", command: "editor.refocusTypeHierarchy",
        when: "typeHierarchyVisible"
    },
    {
        key: "shift+alt+h", command: "editor.showCallHierarchy",
        when: "editorHasCallHierarchyProvider && editorTextFocus && !inReferenceSearchEditor"
    },
    {
        key: "shift+alt+h", command: "editor.showIncomingCalls",
        when: "callHierarchyVisible && callHierarchyDirection == 'outgoingCalls'"
    },
    {
        key: "shift+alt+h", command: "editor.showOutgoingCalls",
        when: "callHierarchyVisible && callHierarchyDirection == 'incomingCalls'"
    },
    {
        key: "shift+alt+h", command: "editor.showSubtypes",
        when: "typeHierarchyVisible && typeHierarchyDirection == 'supertypes'"
    },
    {
        key: "shift+alt+h", command: "editor.showSupertypes",
        when: "typeHierarchyVisible && typeHierarchyDirection == 'subtypes'"
    },
    {
        key: "ctrl+enter", command: "explorer.openToSide",
        when: "explorerViewletFocus && foldersViewVisible && !inputFocus"
    },
    {
        key: "shift+alt+f", command: "filesExplorer.findInFolder",
        when: "explorerResourceIsFolder && filesExplorerFocus && foldersViewVisible && !inputFocus"
    },
    {
        key: "alt+down", command: "history.showNext",
        when: "historyNavigationForwardsEnabled && historyNavigationWidgetFocus && !isComposing && !suggestWidgetVisible"
    },
    {
        key: "down", command: "history.showNext",
        when: "historyNavigationForwardsEnabled && historyNavigationWidgetFocus && !isComposing && !suggestWidgetVisible"
    },
    {
        key: "alt+up", command: "history.showPrevious",
        when: "historyNavigationBackwardsEnabled && historyNavigationWidgetFocus && !isComposing && !suggestWidgetVisible"
    },
    {
        key: "up", command: "history.showPrevious",
        when: "historyNavigationBackwardsEnabled && historyNavigationWidgetFocus && !isComposing && !suggestWidgetVisible"
    },
    {
        key: "down", command: "iconSelectBox.focusDown",
        when: "iconSelectBoxFocus"
    },
    {
        key: "right", command: "iconSelectBox.focusNext",
        when: "iconSelectBoxFocus && iconSelectBoxInputEmpty || iconSelectBoxFocus && !iconSelectBoxInputFocus"
    },
    {
        key: "left", command: "iconSelectBox.focusPrevious",
        when: "iconSelectBoxFocus && iconSelectBoxInputEmpty || iconSelectBoxFocus && !iconSelectBoxInputFocus"
    },
    {
        key: "up", command: "iconSelectBox.focusUp",
        when: "iconSelectBoxFocus"
    },
    {
        key: "enter", command: "iconSelectBox.selectFocused",
        when: "iconSelectBoxFocus"
    },
    {
        key: "alt+=", command: "increaseSearchEditorContextLines",
        when: "inSearchEditor"
    },
    {
        key: "cmd+k i", command: "inlineChat.start",
        when: "inlineChatHasProvider && !editorReadonly"
    },
    {
        key: "cmd+i", command: "inlineChat.start",
        when: "inlineChatHasProvider && !editorReadonly"
    },
    {
        key: "cmd+z", command: "inlineChat.unstash",
        when: "inlineChatHasStashedSession && !editorReadonly"
    },
    {
        key: "down", command: "interactive.history.next",
        when: "!suggestWidgetVisible && activeEditor == 'workbench.editor.interactive' && interactiveInputCursorAtBoundary != 'none' && interactiveInputCursorAtBoundary != 'top'"
    },
    {
        key: "up", command: "interactive.history.previous",
        when: "!suggestWidgetVisible && activeEditor == 'workbench.editor.interactive' && interactiveInputCursorAtBoundary != 'bottom' && interactiveInputCursorAtBoundary != 'none'"
    },
    {
        key: "cmd+down", command: "interactive.scrollToBottom",
        when: "activeEditor == 'workbench.editor.interactive'"
    },
    {
        key: "cmd+up", command: "interactive.scrollToTop",
        when: "activeEditor == 'workbench.editor.interactive'"
    },
    {
        key: "enter", command: "keybindings.editor.acceptWhenExpression",
        when: "inKeybindings && whenFocus && !suggestWidgetVisible"
    },
    {
        key: "cmd+k cmd+a", command: "keybindings.editor.addKeybinding",
        when: "inKeybindings && keybindingFocus"
    },
    {
        key: "escape", command: "keybindings.editor.clearSearchResults",
        when: "inKeybindings && inKeybindingsSearch"
    },
    {
        key: "cmd+c", command: "keybindings.editor.copyKeybindingEntry",
        when: "inKeybindings && keybindingFocus && !whenFocus"
    },
    {
        key: "enter", command: "keybindings.editor.defineKeybinding",
        when: "inKeybindings && keybindingFocus && !whenFocus"
    },
    {
        key: "cmd+k cmd+e", command: "keybindings.editor.defineWhenExpression",
        when: "inKeybindings && keybindingFocus"
    },
    {
        key: "cmd+down", command: "keybindings.editor.focusKeybindings",
        when: "inKeybindings && inKeybindingsSearch"
    },
    {
        key: "alt+cmd+k", command: "keybindings.editor.recordSearchKeys",
        when: "inKeybindings && inKeybindingsSearch"
    },
    {
        key: "escape", command: "keybindings.editor.rejectWhenExpression",
        when: "inKeybindings && whenFocus && !suggestWidgetVisible"
    },
    {
        key: "cmd+backspace", command: "keybindings.editor.removeKeybinding",
        when: "inKeybindings && keybindingFocus && !inputFocus"
    },
    {
        key: "cmd+f", command: "keybindings.editor.searchKeybindings",
        when: "inKeybindings"
    },
    {
        key: "alt+cmd+p", command: "keybindings.editor.toggleSortByPrecedence",
        when: "inKeybindings"
    },
    {
        key: "escape", command: "list.clear",
        when: "listFocus && listHasSelectionOrFocus && !inputFocus"
    },
    {
        key: "escape", command: "list.closeFind",
        when: "listFocus && treeFindOpen"
    },
    {
        key: "cmd+up", command: "list.collapse",
        when: "listFocus && treeElementCanCollapse && !inputFocus || listFocus && treeElementHasParent && !inputFocus"
    },
    {
        key: "left", command: "list.collapse",
        when: "listFocus && treeElementCanCollapse && !inputFocus || listFocus && treeElementHasParent && !inputFocus"
    },
    {
        key: "shift+cmd+up", command: "list.collapseAll",
        when: "listFocus && !inputFocus"
    },
    {
        key: "cmd+left", command: "list.collapseAll",
        when: "listFocus && !inputFocus"
    },
    {
        key: "right", command: "list.expand",
        when: "listFocus && treeElementCanExpand && !inputFocus || listFocus && treeElementHasChild && !inputFocus"
    },
    {
        key: "shift+down", command: "list.expandSelectionDown",
        when: "listFocus && listSupportsMultiselect && !inputFocus"
    },
    {
        key: "shift+up", command: "list.expandSelectionUp",
        when: "listFocus && listSupportsMultiselect && !inputFocus"
    },
    {
        key: "f3", command: "list.find",
        when: "listFocus && listSupportsFind"
    },
    {
        key: "cmd+f", command: "list.find",
        when: "listFocus && listSupportsFind"
    },
    {
        key: "ctrl+n", command: "list.focusDown",
        when: "listFocus && !inputFocus"
    },
    {
        key: "down", command: "list.focusDown",
        when: "listFocus && !inputFocus"
    },
    {
        key: "home", command: "list.focusFirst",
        when: "listFocus && !inputFocus"
    },
    {
        key: "end", command: "list.focusLast",
        when: "listFocus && !inputFocus"
    },
    {
        key: "pagedown", command: "list.focusPageDown",
        when: "listFocus && !inputFocus"
    },
    {
        key: "pageup", command: "list.focusPageUp",
        when: "listFocus && !inputFocus"
    },
    {
        key: "ctrl+p", command: "list.focusUp",
        when: "listFocus && !inputFocus"
    },
    {
        key: "up", command: "list.focusUp",
        when: "listFocus && !inputFocus"
    },
    {
        key: "cmd+down", command: "list.scrollDown",
        when: "listFocus && !inputFocus && listScrollAtBoundary != 'both' && listScrollAtBoundary != 'bottom'"
    },
    {
        key: "cmd+up", command: "list.scrollUp",
        when: "listFocus && !inputFocus && listScrollAtBoundary != 'both' && listScrollAtBoundary != 'top'"
    },
    {
        key: "cmd+down", command: "list.select",
        when: "listFocus && !inputFocus"
    },
    {
        key: "enter", command: "list.select",
        when: "listFocus && !inputFocus"
    },
    {
        key: "cmd+a", command: "list.selectAll",
        when: "listFocus && listSupportsMultiselect && !inputFocus"
    },
    {
        key: "space", command: "list.toggleExpand",
        when: "listFocus && !inputFocus"
    },
    {
        key: "shift+cmd+enter", command: "list.toggleSelection",
        when: "listFocus && !inputFocus"
    },
    {
        key: "y", command: "notebook.cell.changeToCode",
        when: "notebookEditorFocused && !inputFocus && !notebookOutputFocused && activeEditor == 'workbench.editor.notebook' && notebookCellType == 'markup'"
    },
    {
        key: "m", command: "notebook.cell.changeToMarkdown",
        when: "notebookEditorFocused && !inputFocus && !notebookOutputFocused && activeEditor == 'workbench.editor.notebook' && notebookCellType == 'code'"
    },
    {
        key: "alt+delete", command: "notebook.cell.clearOutputs",
        when: "notebookCellEditable && notebookCellHasOutputs && notebookEditable && notebookEditorFocused && !inputFocus"
    },
    {
        key: "cmd+k cmd+c", command: "notebook.cell.collapseCellInput",
        when: "notebookCellListFocused && !inputFocus && !notebookCellInputIsCollapsed"
    },
    {
        key: "cmd+k t", command: "notebook.cell.collapseCellOutput",
        when: "notebookCellHasOutputs && notebookCellListFocused && !inputFocus && !notebookCellOutputIsCollapsed"
    },
    {
        key: "shift+alt+down", command: "notebook.cell.copyDown",
        when: "notebookEditorFocused && !inputFocus"
    },
    {
        key: "shift+alt+up", command: "notebook.cell.copyUp",
        when: "notebookEditorFocused && !inputFocus"
    },
    {
        key: "cmd+backspace", command: "notebook.cell.delete",
        when: "notebookEditorFocused && !inputFocus"
    },
    {
        key: "shift+alt+d", command: "notebook.cell.detectLanguage",
        when: "notebookCellEditable && notebookEditable"
    },
    {
        key: "enter", command: "notebook.cell.edit",
        when: "notebookCellListFocused && notebookEditable && !editorHoverFocused && !inputFocus"
    },
    {
        key: "cmd+k cmd+c", command: "notebook.cell.expandCellInput",
        when: "notebookCellInputIsCollapsed && notebookCellListFocused"
    },
    {
        key: "cmd+k t", command: "notebook.cell.expandCellOutput",
        when: "notebookCellListFocused && notebookCellOutputIsCollapsed"
    },
    {
        key: "ctrl+cmd+down", command: "notebook.cell.focusInOutput",
        when: "notebookCellHasOutputs && notebookEditorFocused"
    },
    {
        key: "ctrl+cmd+up", command: "notebook.cell.focusOutOutput",
        when: "notebookEditorFocused && notebookOutputFocused"
    },
    {
        key: "shift+cmd+enter", command: "notebook.cell.insertCodeCellAbove",
        when: "notebookCellListFocused && !inputFocus"
    },
    {
        key: "cmd+enter", command: "notebook.cell.insertCodeCellBelow",
        when: "notebookCellListFocused && !inputFocus"
    },
    {
        key: "ctrl+shift+alt+j", command: "notebook.cell.joinAbove",
        when: "notebookEditorFocused"
    },
    {
        key: "ctrl+alt+j", command: "notebook.cell.joinBelow",
        when: "notebookEditorFocused"
    },
    {
        key: "alt+down", command: "notebook.cell.moveDown",
        when: "notebookEditorFocused && !inputFocus"
    },
    {
        key: "alt+up", command: "notebook.cell.moveUp",
        when: "notebookEditorFocused && !inputFocus"
    },
    {
        key: "cmd+k shift+cmd+\\", command: "notebook.cell.split",
        when: "editorTextFocus && notebookCellEditable && notebookEditable && notebookEditorFocused"
    },
    {
        key: "cmd+k y", command: "notebook.cell.toggleOutputScrolling",
        when: "notebookCellHasOutputs && notebookCellListFocused && !inputFocus"
    },
    {
        key: "ctrl+l", command: "notebook.centerActiveCell",
        when: "notebookEditorFocused"
    },
    {
        key: "alt+f3", command: "notebook.diff.action.next",
        when: "activeEditor == 'workbench.editor.notebookTextDiffEditor'"
    },
    {
        key: "shift+alt+f3", command: "notebook.diff.action.previous",
        when: "activeEditor == 'workbench.editor.notebookTextDiffEditor'"
    },
    {
        key: "cmd+f", command: "notebook.find",
        when: "notebookEditorFocused && !editorFocus && activeEditor == 'workbench.editor.interactive' || notebookEditorFocused && !editorFocus && activeEditor == 'workbench.editor.notebook'"
    },
    {
        key: "cmd+down", command: "notebook.focusBottom",
        when: "notebookEditorFocused && !inputFocus"
    },
    {
        key: "down", command: "notebook.focusNextEditor",
        when: "config.notebook.navigation.allowNavigateToSurroundingCells && notebookCursorNavigationMode && notebookEditorFocused && !accessibilityModeEnabled && !isEmbeddedDiffEditor && !notebookCellMarkdownEditMode && notebookCellType == 'markup'"
    },
    {
        key: "ctrl+cmd+down", command: "notebook.focusNextEditor",
        when: "notebookEditorFocused && notebookOutputFocused"
    },
    {
        key: "up", command: "notebook.focusPreviousEditor",
        when: "config.notebook.navigation.allowNavigateToSurroundingCells && notebookCursorNavigationMode && notebookEditorFocused && !accessibilityModeEnabled && !isEmbeddedDiffEditor && !notebookCellMarkdownEditMode && notebookCellType == 'markup'"
    },
    {
        key: "cmd+up", command: "notebook.focusTop",
        when: "notebookEditorFocused && !inputFocus"
    },
    {
        key: "left", command: "notebook.fold",
        when: "notebookEditorFocused && !inputFocus && activeEditor == 'workbench.editor.notebook'"
    },
    {
        key: "alt+cmd+[", command: "notebook.fold",
        when: "notebookEditorFocused && !inputFocus && activeEditor == 'workbench.editor.notebook'"
    },
    {
        key: "shift+alt+f", command: "notebook.format",
        when: "notebookEditable && !editorTextFocus && activeEditor == 'workbench.editor.notebook'"
    },
    {
        key: "escape", command: "notebook.hideFind",
        when: "notebookEditorFocused && notebookFindWidgetFocused"
    },
    {
        key: "right", command: "notebook.unfold",
        when: "notebookEditorFocused && !inputFocus && activeEditor == 'workbench.editor.notebook'"
    },
    {
        key: "alt+cmd+]", command: "notebook.unfold",
        when: "notebookEditorFocused && !inputFocus && activeEditor == 'workbench.editor.notebook'"
    },
    {
        key: "shift+cmd+a", command: "notification.acceptPrimaryAction",
        when: "notificationToastsVisible"
    },
    {
        key: "cmd+backspace", command: "notification.clear",
        when: "notificationFocus"
    },
    {
        key: "left", command: "notification.collapse",
        when: "notificationFocus"
    },
    {
        key: "right", command: "notification.expand",
        when: "notificationFocus"
    },
    {
        key: "enter", command: "notification.toggle",
        when: "notificationFocus"
    },
    {
        key: "space", command: "notification.toggle",
        when: "notificationFocus"
    },
    {
        key: "home", command: "notifications.focusFirstToast",
        when: "notificationFocus && notificationToastsVisible"
    },
    {
        key: "pageup", command: "notifications.focusFirstToast",
        when: "notificationFocus && notificationToastsVisible"
    },
    {
        key: "end", command: "notifications.focusLastToast",
        when: "notificationFocus && notificationToastsVisible"
    },
    {
        key: "pagedown", command: "notifications.focusLastToast",
        when: "notificationFocus && notificationToastsVisible"
    },
    {
        key: "down", command: "notifications.focusNextToast",
        when: "notificationFocus && notificationToastsVisible"
    },
    {
        key: "up", command: "notifications.focusPreviousToast",
        when: "notificationFocus && notificationToastsVisible"
    },
    { key: "cmd+k shift+cmd+n", command: "notifications.showList" },
    {
        key: "escape", command: "problems.action.clearFilterText",
        when: "problemsFilterFocus"
    },
    {
        key: "cmd+c", command: "problems.action.copy",
        when: "problemsVisibility && !relatedInformationFocus && focusedView == 'workbench.panel.markers.view'"
    },
    {
        key: "cmd+f", command: "problems.action.focusFilter",
        when: "focusedView == 'workbench.panel.markers.view'"
    },
    {
        key: "cmd+down", command: "problems.action.focusProblemsFromFilter",
        when: "problemsFilterFocus"
    },
    {
        key: "cmd+down", command: "problems.action.open",
        when: "problemFocus"
    },
    {
        key: "enter", command: "problems.action.open",
        when: "problemFocus"
    },
    {
        key: "ctrl+enter", command: "problems.action.openToSide",
        when: "problemFocus"
    },
    {
        key: "cmd+.", command: "problems.action.showQuickFixes",
        when: "problemFocus"
    },
    {
        key: "space", command: "refactorPreview.toggleCheckedState",
        when: "listFocus && refactorPreview.enabled && !inputFocus"
    },
    {
        key: "alt+cmd+r", command: "revealFileInOS",
        when: "!editorFocus"
    },
    {
        key: "cmd+down", command: "revealReference",
        when: "listFocus && referenceSearchVisible && !inputFocus && !treeElementCanCollapse && !treeElementCanExpand"
    },
    {
        key: "enter", command: "revealReference",
        when: "listFocus && referenceSearchVisible && !inputFocus && !treeElementCanCollapse && !treeElementCanExpand"
    },
    { key: "alt+cmd+s", command: "saveAll" },
    {
        key: "cmd+enter", command: "scm.acceptInput",
        when: "scmRepository"
    },
    {
        key: "alt+down", command: "scm.forceViewNextCommit",
        when: "scmRepository"
    },
    {
        key: "alt+up", command: "scm.forceViewPreviousCommit",
        when: "scmRepository"
    },
    {
        key: "down", command: "scm.viewNextCommit",
        when: "scmInputIsInLastPosition && scmRepository && !suggestWidgetVisible"
    },
    {
        key: "up", command: "scm.viewPreviousCommit",
        when: "scmInputIsInFirstPosition && scmRepository && !suggestWidgetVisible"
    },
    {
        key: "escape", command: "search.action.cancel",
        when: "listFocus && searchViewletVisible && !inputFocus && searchState != '0'"
    },
    {
        key: "cmd+c", command: "search.action.copyMatch",
        when: "fileMatchOrMatchFocus"
    },
    {
        key: "alt+cmd+c", command: "search.action.copyPath",
        when: "fileMatchOrFolderMatchWithResourceFocus"
    },
    {
        key: "f4", command: "search.action.focusNextSearchResult",
        when: "hasSearchResult || inSearchEditor"
    },
    {
        key: "shift+f4", command: "search.action.focusPreviousSearchResult",
        when: "hasSearchResult || inSearchEditor"
    },
    {
        key: "cmd+up", command: "search.action.focusSearchFromResults",
        when: "accessibilityModeEnabled && searchViewletVisible || firstMatchFocus && searchViewletVisible"
    },
    {
        key: "cmd+enter", command: "search.action.openInEditor",
        when: "hasSearchResult && searchViewletFocus"
    },
    {
        key: "cmd+down", command: "search.action.openResult",
        when: "fileMatchOrMatchFocus && searchViewletVisible"
    },
    {
        key: "enter", command: "search.action.openResult",
        when: "fileMatchOrMatchFocus && searchViewletVisible"
    },
    {
        key: "ctrl+enter", command: "search.action.openResultToSide",
        when: "fileMatchOrMatchFocus && searchViewletVisible"
    },
    {
        key: "cmd+backspace", command: "search.action.remove",
        when: "fileMatchOrMatchFocus && searchViewletVisible"
    },
    {
        key: "shift+cmd+1", command: "search.action.replace",
        when: "isEditableItem && matchFocus && replaceActive && searchViewletVisible"
    },
    {
        key: "alt+cmd+enter", command: "search.action.replaceAll",
        when: "replaceActive && searchViewletVisible && !findWidgetVisible"
    },
    {
        key: "shift+cmd+enter", command: "search.action.replaceAllInFile",
        when: "fileMatchFocus && isEditableItem && replaceActive && searchViewletVisible"
    },
    {
        key: "shift+cmd+1", command: "search.action.replaceAllInFile",
        when: "fileMatchFocus && isEditableItem && replaceActive && searchViewletVisible"
    },
    {
        key: "shift+cmd+enter", command: "search.action.replaceAllInFolder",
        when: "folderMatchFocus && isEditableItem && replaceActive && searchViewletVisible"
    },
    {
        key: "shift+cmd+1", command: "search.action.replaceAllInFolder",
        when: "folderMatchFocus && isEditableItem && replaceActive && searchViewletVisible"
    },
    {
        key: "shift+alt+f", command: "search.action.restrictSearchToFolder",
        when: "folderMatchWithResourceFocus && searchViewletVisible"
    },
    {
        key: "cmd+down", command: "search.focus.nextInputBox",
        when: "inSearchEditor && inputBoxFocus || inputBoxFocus && searchViewletVisible"
    },
    {
        key: "cmd+up", command: "search.focus.previousInputBox",
        when: "inSearchEditor && inputBoxFocus || inputBoxFocus && searchViewletVisible && !searchInputBoxFocus"
    },
    {
        key: "shift+cmd+l", command: "selectAllSearchEditorMatches",
        when: "inSearchEditor"
    },
    {
        key: "escape", command: "settings.action.focusLevelUp",
        when: "inSettingsEditor && !inSettingsJSONEditor && !inSettingsSearch"
    },
    {
        key: "enter", command: "settings.action.focusSettingControl",
        when: "inSettingsEditor && settingRowFocus"
    },
    {
        key: "down", command: "settings.action.focusSettingsFromSearch",
        when: "inSettingsSearch && !suggestWidgetVisible"
    },
    {
        key: "enter", command: "settings.action.focusSettingsList",
        when: "inSettingsEditor && settingsTocRowFocus"
    },
    {
        key: "left", command: "settings.action.focusTOC",
        when: "inSettingsEditor && settingRowFocus"
    },
    {
        key: "shift+f9", command: "settings.action.showContextMenu",
        when: "inSettingsEditor"
    },
    { key: "cmd+; cmd+x", command: "testing.cancelRun" },
    { key: "cmd+; cmd+a", command: "testing.debugAll" },
    {
        key: "cmd+; cmd+c", command: "testing.debugAtCursor",
        when: "editorTextFocus"
    },
    {
        key: "cmd+; cmd+f", command: "testing.debugCurrentFile",
        when: "editorTextFocus"
    },
    { key: "cmd+; cmd+e", command: "testing.debugFailTests" },
    { key: "cmd+; cmd+l", command: "testing.debugLastRun" },
    { key: "cmd+; cmd+m", command: "testing.openOutputPeek" },
    { key: "cmd+; e", command: "testing.reRunFailTests" },
    { key: "cmd+; l", command: "testing.reRunLastRun" },
    {
        key: "cmd+; cmd+r", command: "testing.refreshTests",
        when: "testing.canRefresh"
    },
    { key: "cmd+; a", command: "testing.runAll" },
    {
        key: "cmd+; c", command: "testing.runAtCursor",
        when: "editorTextFocus"
    },
    {
        key: "cmd+; f", command: "testing.runCurrentFile",
        when: "editorTextFocus"
    },
    {
        key: "cmd+; cmd+o", command: "testing.showMostRecentOutput",
        when: "testing.hasAnyResults"
    },
    { key: "cmd+; cmd+i", command: "testing.toggleInlineTestOutput" },
    {
        key: "alt+h", command: "testing.toggleTestingPeekHistory",
        when: "testing.isPeekVisible"
    },
    {
        key: "alt+cmd+c", command: "toggleSearchCaseSensitive",
        when: "searchViewletFocus && !fileMatchOrFolderMatchFocus"
    },
    {
        key: "alt+cmd+c", command: "toggleSearchEditorCaseSensitive",
        when: "inSearchEditor && searchInputBoxFocus"
    },
    {
        key: "alt+cmd+l", command: "toggleSearchEditorContextLines",
        when: "inSearchEditor"
    },
    {
        key: "alt+cmd+r", command: "toggleSearchEditorRegex",
        when: "inSearchEditor && searchInputBoxFocus"
    },
    {
        key: "alt+cmd+w", command: "toggleSearchEditorWholeWord",
        when: "inSearchEditor && searchInputBoxFocus"
    },
    {
        key: "alt+cmd+p", command: "toggleSearchPreserveCase",
        when: "searchViewletFocus"
    },
    {
        key: "alt+cmd+r", command: "toggleSearchRegex",
        when: "searchViewletFocus"
    },
    {
        key: "alt+cmd+w", command: "toggleSearchWholeWord",
        when: "searchViewletFocus"
    },
    { key: "ctrl+alt+cmd+n", command: "welcome.showNewFileEntries" },
    {
        key: "cmd+down", command: "widgetNavigation.focusNext",
        when: "inputFocus && navigableContainerFocused || navigableContainerFocused && !listFocus || navigableContainerFocused && listScrollAtBoundary == 'both' || navigableContainerFocused && listScrollAtBoundary == 'bottom'"
    },
    {
        key: "cmd+up", command: "widgetNavigation.focusPrevious",
        when: "inputFocus && navigableContainerFocused || navigableContainerFocused && !listFocus || navigableContainerFocused && listScrollAtBoundary == 'both' || navigableContainerFocused && listScrollAtBoundary == 'top'"
    },
    {
        key: "ctrl+l", command: "workbench.action.chat.clear",
        when: "hasChatProvider && inChat"
    },
    {
        key: "cmd+down", command: "workbench.action.chat.focusInput",
        when: "inChat && !editorFocus"
    },
    {
        key: "f9", command: "workbench.action.chat.nextCodeBlock",
        when: "hasChatProvider && inChat"
    },
    {
        key: "cmd+f9", command: "workbench.action.chat.nextFileTree",
        when: "hasChatProvider && inChat"
    },
    {
        key: "ctrl+cmd+i", command: "workbench.action.chat.open",
        when: "hasChatProvider"
    },
    {
        key: "shift+f9", command: "workbench.action.chat.previousCodeBlock",
        when: "hasChatProvider && inChat"
    },
    {
        key: "shift+cmd+f9", command: "workbench.action.chat.previousFileTree",
        when: "hasChatProvider && inChat"
    },
    {
        key: "cmd+backspace", command: "workbench.action.chat.remove",
        when: "inChat && !inChatInput"
    },
    { key: "cmd+w", command: "workbench.action.closeActiveEditor" },
    { key: "cmd+k cmd+w", command: "workbench.action.closeAllEditors" },
    { key: "cmd+k shift+cmd+w", command: "workbench.action.closeAllGroups" },
    { key: "cmd+k w", command: "workbench.action.closeEditorsInGroup" },
    {
        key: "cmd+k f", command: "workbench.action.closeFolder",
        when: "emptyWorkspaceSupport && workbenchState != 'empty'"
    },
    {
        key: "cmd+w", command: "workbench.action.closeGroup",
        when: "activeEditorGroupEmpty && multipleEditorGroups"
    },
    { key: "alt+cmd+t", command: "workbench.action.closeOtherEditors" },
    {
        key: "shift+escape", command: "workbench.action.closeQuickOpen",
        when: "inQuickOpen"
    },
    {
        key: "escape", command: "workbench.action.closeQuickOpen",
        when: "inQuickOpen"
    },
    { key: "cmd+k u", command: "workbench.action.closeUnmodifiedEditors" },
    { key: "shift+cmd+w", command: "workbench.action.closeWindow" },
    {
        key: "cmd+w", command: "workbench.action.closeWindow",
        when: "!editorIsOpen && !multipleEditorGroups"
    },
    {
        key: "alt+f5", command: "workbench.action.compareEditor.nextChange",
        when: "textCompareEditorVisible"
    },
    {
        key: "cmd+k shift+o", command: "workbench.action.compareEditor.openSide",
        when: "inDiffEditor"
    },
    {
        key: "shift+alt+f5", command: "workbench.action.compareEditor.previousChange",
        when: "textCompareEditorVisible"
    },
    {
        key: "shift+f5", command: "workbench.action.debug.disconnect",
        when: "focusedSessionIsAttach && inDebugMode"
    },
    {
        key: "shift+cmd+f5", command: "workbench.action.debug.restart",
        when: "inDebugMode"
    },
    {
        key: "ctrl+f5", command: "workbench.action.debug.run",
        when: "debuggersAvailable && debugState != 'initializing'"
    },
    {
        key: "f5", command: "workbench.action.debug.start",
        when: "debuggersAvailable && debugState == 'inactive'"
    },
    {
        key: "cmd+f11", command: "workbench.action.debug.stepIntoTarget",
        when: "inDebugMode && stepIntoTargetsSupported && debugState == 'stopped'"
    },
    {
        key: "shift+f11", command: "workbench.action.debug.stepOut",
        when: "debugState == 'stopped'"
    },
    {
        key: "f10", command: "workbench.action.debug.stepOver",
        when: "debugState == 'stopped'"
    },
    {
        key: "shift+f5", command: "workbench.action.debug.stop",
        when: "inDebugMode && !focusedSessionIsAttach"
    },
    {
        key: "cmd+k m", command: "workbench.action.editor.changeLanguageMode",
        when: "!notebookEditorFocused"
    },
    { key: "cmd+k p", command: "workbench.action.files.copyPathOfActiveFile" },
    { key: "cmd+n", command: "workbench.action.files.newUntitledFile" },
    {
        key: "cmd+o", command: "workbench.action.files.openFile",
        when: "false"
    },
    {
        key: "cmd+o", command: "workbench.action.files.openFileFolder",
        when: "isMacNative && openFolderWorkspaceSupport"
    },
    {
        key: "cmd+o", command: "workbench.action.files.openFolderViaWorkspace",
        when: "!openFolderWorkspaceSupport && workbenchState == 'workspace'"
    },
    {
        key: "cmd+o", command: "workbench.action.files.openLocalFileFolder",
        when: "remoteFileDialogVisible"
    },
    { key: "cmd+k r", command: "workbench.action.files.revealActiveFileInWindows" },
    { key: "cmd+s", command: "workbench.action.files.save" },
    { key: "shift+cmd+s", command: "workbench.action.files.saveAs" },
    {
        key: "shift+cmd+s", command: "workbench.action.files.saveLocalFile",
        when: "remoteFileDialogVisible"
    },
    { key: "cmd+k s", command: "workbench.action.files.saveWithoutFormatting" },
    {
        key: "cmd+k o", command: "workbench.action.files.showOpenedFileInNewWindow",
        when: "emptyWorkspaceSupport"
    },
    { key: "shift+cmd+f", command: "workbench.action.findInFiles" },
    { key: "cmd+k cmd+up", command: "workbench.action.focusAboveGroup" },
    { key: "cmd+k cmd+down", command: "workbench.action.focusBelowGroup" },
    { key: "cmd+8", command: "workbench.action.focusEighthEditorGroup" },
    { key: "cmd+5", command: "workbench.action.focusFifthEditorGroup" },
    { key: "cmd+1", command: "workbench.action.focusFirstEditorGroup" },
    { key: "cmd+4", command: "workbench.action.focusFourthEditorGroup" },
    { key: "cmd+k cmd+left", command: "workbench.action.focusLeftGroup" },
    { key: "f6", command: "workbench.action.focusNextPart" },
    { key: "shift+f6", command: "workbench.action.focusPreviousPart" },
    { key: "cmd+k cmd+right", command: "workbench.action.focusRightGroup" },
    { key: "cmd+2", command: "workbench.action.focusSecondEditorGroup" },
    { key: "cmd+7", command: "workbench.action.focusSeventhEditorGroup" },
    { key: "cmd+0", command: "workbench.action.focusSideBar" },
    { key: "cmd+6", command: "workbench.action.focusSixthEditorGroup" },
    { key: "cmd+3", command: "workbench.action.focusThirdEditorGroup" },
    { key: "ctrl+g", command: "workbench.action.gotoLine" },
    { key: "shift+cmd+o", command: "workbench.action.gotoSymbol" },
    {
        key: "down", command: "workbench.action.interactivePlayground.arrowDown",
        when: "interactivePlaygroundFocus && !editorTextFocus"
    },
    {
        key: "up", command: "workbench.action.interactivePlayground.arrowUp",
        when: "interactivePlaygroundFocus && !editorTextFocus"
    },
    {
        key: "pagedown", command: "workbench.action.interactivePlayground.pageDown",
        when: "interactivePlaygroundFocus && !editorTextFocus"
    },
    {
        key: "pageup", command: "workbench.action.interactivePlayground.pageUp",
        when: "interactivePlaygroundFocus && !editorTextFocus"
    },
    {
        key: "cmd+k shift+cmd+\\", command: "workbench.action.joinEditorInGroup",
        when: "sideBySideEditorActive"
    },
    { key: "cmd+k enter", command: "workbench.action.keepEditor" },
    { key: "cmd+k cmd+r", command: "workbench.action.keybindingsReference" },
    { key: "cmd+9", command: "workbench.action.lastEditorInGroup" },
    { key: "ctrl+0", command: "workbench.action.lastEditorInGroup" },
    { key: "cmd+k down", command: "workbench.action.moveActiveEditorGroupDown" },
    { key: "cmd+k left", command: "workbench.action.moveActiveEditorGroupLeft" },
    { key: "cmd+k right", command: "workbench.action.moveActiveEditorGroupRight" },
    { key: "cmd+k up", command: "workbench.action.moveActiveEditorGroupUp" },
    { key: "cmd+k shift+cmd+left", command: "workbench.action.moveEditorLeftInGroup" },
    { key: "cmd+k shift+cmd+right", command: "workbench.action.moveEditorRightInGroup" },
    { key: "ctrl+cmd+1", command: "workbench.action.moveEditorToFirstGroup" },
    { key: "ctrl+cmd+9", command: "workbench.action.moveEditorToLastGroup" },
    { key: "ctrl+cmd+right", command: "workbench.action.moveEditorToNextGroup" },
    { key: "ctrl+cmd+left", command: "workbench.action.moveEditorToPreviousGroup" },
    {
        key: "ctrl+-", command: "workbench.action.navigateBack",
        when: "canNavigateBack"
    },
    {
        key: "ctrl+shift+-", command: "workbench.action.navigateForward",
        when: "canNavigateForward"
    },
    { key: "cmd+k cmd+q", command: "workbench.action.navigateToLastEditLocation" },
    { key: "shift+cmd+n", command: "workbench.action.newWindow" },
    { key: "shift+cmd+]", command: "workbench.action.nextEditor" },
    { key: "alt+cmd+right", command: "workbench.action.nextEditor" },
    { key: "cmd+k alt+cmd+right", command: "workbench.action.nextEditorInGroup" },
    { key: "ctrl+1", command: "workbench.action.openEditorAtIndex1" },
    { key: "ctrl+2", command: "workbench.action.openEditorAtIndex2" },
    { key: "ctrl+3", command: "workbench.action.openEditorAtIndex3" },
    { key: "ctrl+4", command: "workbench.action.openEditorAtIndex4" },
    { key: "ctrl+5", command: "workbench.action.openEditorAtIndex5" },
    { key: "ctrl+6", command: "workbench.action.openEditorAtIndex6" },
    { key: "ctrl+7", command: "workbench.action.openEditorAtIndex7" },
    { key: "ctrl+8", command: "workbench.action.openEditorAtIndex8" },
    { key: "ctrl+9", command: "workbench.action.openEditorAtIndex9" },
    { key: "cmd+k cmd+s", command: "workbench.action.openGlobalKeybindings" },
    { key: "ctrl+r", command: "workbench.action.openRecent" },
    { key: "cmd+,", command: "workbench.action.openSettings" },
    {
        key: "shift+cmd+u", command: "workbench.action.output.toggleOutput",
        when: "workbench.panel.output.active"
    },
    {
        key: "cmd+k shift+enter", command: "workbench.action.pinEditor",
        when: "!activeEditorIsPinned"
    },
    { key: "shift+cmd+[", command: "workbench.action.previousEditor" },
    { key: "alt+cmd+left", command: "workbench.action.previousEditor" },
    { key: "cmd+k alt+cmd+left", command: "workbench.action.previousEditorInGroup" },
    { key: "cmd+p", command: "workbench.action.quickOpen" },
    {
        key: "ctrl+shift+tab", command: "workbench.action.quickOpenLeastRecentlyUsedEditorInGroup",
        when: "!activeEditorGroupEmpty"
    },
    {
        key: "ctrl+tab", command: "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup",
        when: "!activeEditorGroupEmpty"
    },
    { key: "ctrl+q", command: "workbench.action.quickOpenView" },
    {
        key: "shift+cmd+i", command: "workbench.action.quickchat.toggle",
        when: "hasChatProvider"
    },
    { key: "cmd+q", command: "workbench.action.quit" },
    { key: "alt+cmd+o", command: "workbench.action.remote.showMenu" },
    { key: "shift+cmd+t", command: "workbench.action.reopenClosedEditor" },
    { key: "shift+cmd+h", command: "workbench.action.replaceInFiles" },
    {
        key: "shift+cmd+j", command: "workbench.action.search.toggleQueryDetails",
        when: "inSearchEditor || searchViewletFocus"
    },
    { key: "cmd+k cmd+t", command: "workbench.action.selectTheme" },
    { key: "alt+cmd+tab", command: "workbench.action.showAllEditors" },
    { key: "cmd+t", command: "workbench.action.showAllSymbols" },
    { key: "f1", command: "workbench.action.showCommands" },
    { key: "shift+cmd+p", command: "workbench.action.showCommands" },
    {
        key: "cmd+k cmd+i", command: "workbench.action.showTreeHover",
        when: "customTreeView && listFocus && !inputFocus"
    },
    { key: "cmd+\\", command: "workbench.action.splitEditor" },
    { key: "cmd+k cmd+\\", command: "workbench.action.splitEditorDown" },
    {
        key: "cmd+k shift+cmd+\\", command: "workbench.action.splitEditorInGroup",
        when: "activeEditorCanSplitInGroup"
    },
    { key: "cmd+k cmd+\\", command: "workbench.action.splitEditorLeft" },
    { key: "cmd+k cmd+\\", command: "workbench.action.splitEditorOrthogonal" },
    { key: "cmd+k cmd+\\", command: "workbench.action.splitEditorRight" },
    { key: "cmd+k cmd+\\", command: "workbench.action.splitEditorUp" },
    { key: "ctrl+w", command: "workbench.action.switchWindow" },
    {
        key: "shift+cmd+b", command: "workbench.action.tasks.build",
        when: "taskCommandsRegistered"
    },
    {
        key: "escape", command: "workbench.action.terminal.clearSelection",
        when: "terminalFocusInAny && terminalHasBeenCreated && terminalTextSelected && !terminalFindVisible || terminalFocusInAny && terminalProcessSupported && terminalTextSelected && !terminalFindVisible"
    },
    {
        key: "cmd+c", command: "workbench.action.terminal.copySelection",
        when: "terminalTextSelectedInFocused || terminalFocus && terminalHasBeenCreated && terminalTextSelected || terminalFocus && terminalProcessSupported && terminalTextSelected || terminalFocus && terminalTextSelected && terminalTextSelectedInFocused || terminalHasBeenCreated && terminalTextSelected && terminalTextSelectedInFocused || terminalProcessSupported && terminalTextSelected && terminalTextSelectedInFocused"
    },
    {
        key: "f3", command: "workbench.action.terminal.findNext",
        when: "terminalFindFocused && terminalHasBeenCreated || terminalFindFocused && terminalProcessSupported || terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        key: "cmd+g", command: "workbench.action.terminal.findNext",
        when: "terminalFindFocused && terminalHasBeenCreated || terminalFindFocused && terminalProcessSupported || terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        key: "shift+enter", command: "workbench.action.terminal.findNext",
        when: "terminalFindInputFocused && terminalHasBeenCreated || terminalFindInputFocused && terminalProcessSupported"
    },
    {
        key: "shift+f3", command: "workbench.action.terminal.findPrevious",
        when: "terminalFindFocused && terminalHasBeenCreated || terminalFindFocused && terminalProcessSupported || terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        key: "shift+cmd+g", command: "workbench.action.terminal.findPrevious",
        when: "terminalFindFocused && terminalHasBeenCreated || terminalFindFocused && terminalProcessSupported || terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        key: "enter", command: "workbench.action.terminal.findPrevious",
        when: "terminalFindInputFocused && terminalHasBeenCreated || terminalFindInputFocused && terminalProcessSupported"
    },
    {
        key: "cmd+down", command: "workbench.action.terminal.focus",
        when: "accessibilityModeEnabled && accessibleViewOnLastLine && terminalHasBeenCreated && accessibleViewCurrentProviderId == 'terminal' || accessibilityModeEnabled && accessibleViewOnLastLine && terminalProcessSupported && accessibleViewCurrentProviderId == 'terminal'"
    },
    {
        key: "cmd+up", command: "workbench.action.terminal.focusAccessibleBuffer",
        when: "accessibilityModeEnabled && terminalFocus && terminalHasBeenCreated || accessibilityModeEnabled && terminalFocus && terminalProcessSupported"
    },
    {
        key: "alt+f2", command: "workbench.action.terminal.focusAccessibleBuffer",
        when: "accessibilityModeEnabled && terminalFocus && terminalHasBeenCreated || accessibilityModeEnabled && terminalFocus && terminalProcessSupported"
    },
    {
        key: "cmd+f", command: "workbench.action.terminal.focusFind",
        when: "terminalFindFocused && terminalHasBeenCreated || terminalFindFocused && terminalProcessSupported || terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        key: "cmd+k cmd+i", command: "workbench.action.terminal.focusHover",
        when: "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalIsOpen || terminalFocus && terminalProcessSupported || terminalHasBeenCreated && terminalTabsFocus || terminalIsOpen && terminalTabsFocus || terminalProcessSupported && terminalTabsFocus"
    },
    {
        key: "shift+cmd+]", command: "workbench.action.terminal.focusNext",
        when: "terminalFocus && terminalHasBeenCreated && !terminalEditorFocus || terminalFocus && terminalProcessSupported && !terminalEditorFocus"
    },
    {
        key: "alt+cmd+down", command: "workbench.action.terminal.focusNextPane",
        when: "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        key: "alt+cmd+right", command: "workbench.action.terminal.focusNextPane",
        when: "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        key: "shift+cmd+[", command: "workbench.action.terminal.focusPrevious",
        when: "terminalFocus && terminalHasBeenCreated && !terminalEditorFocus || terminalFocus && terminalProcessSupported && !terminalEditorFocus"
    },
    {
        key: "alt+cmd+up", command: "workbench.action.terminal.focusPreviousPane",
        when: "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        key: "alt+cmd+left", command: "workbench.action.terminal.focusPreviousPane",
        when: "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        key: "shift+cmd+\\", command: "workbench.action.terminal.focusTabs",
        when: "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported || terminalHasBeenCreated && terminalTabsFocus || terminalProcessSupported && terminalTabsFocus"
    },
    {
        key: "cmd+g", command: "workbench.action.terminal.goToRecentDirectory",
        when: "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        key: "shift+escape", command: "workbench.action.terminal.hideFind",
        when: "terminalFindVisible && terminalFocus && terminalHasBeenCreated || terminalFindVisible && terminalFocus && terminalProcessSupported"
    },
    {
        key: "escape", command: "workbench.action.terminal.hideFind",
        when: "terminalFindVisible && terminalFocus && terminalHasBeenCreated || terminalFindVisible && terminalFocus && terminalProcessSupported"
    },
    {
        key: "delete", command: "workbench.action.terminal.killActiveTab",
        when: "terminalHasBeenCreated && terminalTabsFocus || terminalIsOpen && terminalTabsFocus || terminalProcessSupported && terminalTabsFocus"
    },
    {
        key: "cmd+backspace", command: "workbench.action.terminal.killActiveTab",
        when: "terminalHasBeenCreated && terminalTabsFocus || terminalIsOpen && terminalTabsFocus || terminalProcessSupported && terminalTabsFocus"
    },
    {
        key: "cmd+w", command: "workbench.action.terminal.killEditor",
        when: "terminalEditorFocus && terminalFocus && terminalHasBeenCreated && resourceScheme == 'vscode-terminal' || terminalEditorFocus && terminalFocus && terminalProcessSupported && resourceScheme == 'vscode-terminal'"
    },
    {
        key: "ctrl+shift+`", command: "workbench.action.terminal.new",
        when: "terminalProcessSupported || terminalWebExtensionContributedProfile"
    },
    {
        key: "shift+cmd+c", command: "workbench.action.terminal.openNativeConsole",
        when: "!terminalFocus"
    },
    {
        key: "cmd+v", command: "workbench.action.terminal.paste",
        when: "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        key: "enter", command: "workbench.action.terminal.renameActiveTab",
        when: "terminalHasBeenCreated && terminalTabsFocus && terminalTabsSingularSelection || terminalProcessSupported && terminalTabsFocus && terminalTabsSingularSelection"
    },
    {
        key: "ctrl+cmd+down", command: "workbench.action.terminal.resizePaneDown",
        when: "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        key: "ctrl+cmd+left", command: "workbench.action.terminal.resizePaneLeft",
        when: "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        key: "ctrl+cmd+right", command: "workbench.action.terminal.resizePaneRight",
        when: "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        key: "ctrl+cmd+up", command: "workbench.action.terminal.resizePaneUp",
        when: "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        key: "cmd+r", command: "workbench.action.terminal.runRecentCommand",
        when: "accessibilityModeEnabled && terminalFocus && terminalHasBeenCreated || accessibilityModeEnabled && terminalFocus && terminalProcessSupported || accessibilityModeEnabled && accessibleViewIsShown && terminalHasBeenCreated && accessibleViewCurrentProviderId == 'terminal' || accessibilityModeEnabled && accessibleViewIsShown && terminalProcessSupported && accessibleViewCurrentProviderId == 'terminal'"
    },
    {
        key: "ctrl+alt+r", command: "workbench.action.terminal.runRecentCommand",
        when: "terminalFocus && terminalHasBeenCreated && !accessibilityModeEnabled || terminalFocus && terminalProcessSupported && !accessibilityModeEnabled"
    },
    {
        key: "alt+cmd+pagedown", command: "workbench.action.terminal.scrollDown",
        when: "terminalFocusInAny && terminalHasBeenCreated && !terminalAltBufferActive || terminalFocusInAny && terminalProcessSupported && !terminalAltBufferActive"
    },
    {
        key: "pagedown", command: "workbench.action.terminal.scrollDownPage",
        when: "terminalFocusInAny && terminalHasBeenCreated && !terminalAltBufferActive || terminalFocusInAny && terminalProcessSupported && !terminalAltBufferActive"
    },
    {
        key: "cmd+end", command: "workbench.action.terminal.scrollToBottom",
        when: "terminalFocusInAny && terminalHasBeenCreated && !terminalAltBufferActive || terminalFocusInAny && terminalProcessSupported && !terminalAltBufferActive"
    },
    {
        key: "cmd+down", command: "workbench.action.terminal.scrollToNextCommand",
        when: "terminalFocus && terminalHasBeenCreated && !accessibilityModeEnabled || terminalFocus && terminalProcessSupported && !accessibilityModeEnabled"
    },
    {
        key: "cmd+up", command: "workbench.action.terminal.scrollToPreviousCommand",
        when: "terminalFocus && terminalHasBeenCreated && !accessibilityModeEnabled || terminalFocus && terminalProcessSupported && !accessibilityModeEnabled"
    },
    {
        key: "cmd+home", command: "workbench.action.terminal.scrollToTop",
        when: "terminalFocusInAny && terminalHasBeenCreated && !terminalAltBufferActive || terminalFocusInAny && terminalProcessSupported && !terminalAltBufferActive"
    },
    {
        key: "alt+cmd+pageup", command: "workbench.action.terminal.scrollUp",
        when: "terminalFocusInAny && terminalHasBeenCreated && !terminalAltBufferActive || terminalFocusInAny && terminalProcessSupported && !terminalAltBufferActive"
    },
    {
        key: "pageup", command: "workbench.action.terminal.scrollUpPage",
        when: "terminalFocusInAny && terminalHasBeenCreated && !terminalAltBufferActive || terminalFocusInAny && terminalProcessSupported && !terminalAltBufferActive"
    },
    {
        key: "cmd+a", command: "workbench.action.terminal.selectAll",
        when: "terminalFocusInAny && terminalHasBeenCreated || terminalFocusInAny && terminalProcessSupported"
    },
    {
        key: "shift+cmd+down", command: "workbench.action.terminal.selectToNextCommand",
        when: "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        key: "shift+cmd+up", command: "workbench.action.terminal.selectToPreviousCommand",
        when: "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        key: "ctrl+space", command: "workbench.action.terminal.sendSequence",
        when: "terminalFocus && terminalShellIntegrationEnabled && !accessibilityModeEnabled && terminalShellType == 'pwsh'",
        "args": { "text": "\u001b[24~a" }
    },
    {
        key: "alt+space", command: "workbench.action.terminal.sendSequence",
        when: "terminalFocus && terminalShellIntegrationEnabled && !accessibilityModeEnabled && terminalShellType == 'pwsh'",
        "args": { "text": "\u001b[24~b" }
    },
    {
        key: "shift+enter", command: "workbench.action.terminal.sendSequence",
        when: "terminalFocus && terminalShellIntegrationEnabled && !accessibilityModeEnabled && terminalShellType == 'pwsh'",
        "args": { "text": "\u001b[24~c" }
    },
    {
        key: "shift+cmd+right", command: "workbench.action.terminal.sendSequence",
        when: "terminalFocus && terminalShellIntegrationEnabled && !accessibilityModeEnabled && terminalShellType == 'pwsh'",
        "args": { "text": "\u001b[24~d" }
    },
    {
        key: "ctrl+space", command: "workbench.action.terminal.sendSequence",
        when: "config.terminal.integrated.shellIntegration.suggestEnabled && terminalFocus && terminalShellIntegrationEnabled && !accessibilityModeEnabled && terminalShellType == 'pwsh'",
        "args": { "text": "\u001b[24~e" }
    },
    {
        key: "shift+cmd+left", command: "workbench.action.terminal.sendSequence",
        when: "terminalFocus && terminalShellType == 'pwsh'",
        "args": { "text": "\u001b[1;2H" }
    },
    {
        key: "ctrl+alt+r", command: "workbench.action.terminal.sendSequence",
        when: "accessibilityModeEnabled && terminalFocus",
        "args": { "text": "\u0012" }
    },
    {
        key: "ctrl+alt+g", command: "workbench.action.terminal.sendSequence",
        when: "terminalFocus",
        "args": { "text": "\u0007" }
    },
    {
        key: "alt+backspace", command: "workbench.action.terminal.sendSequence",
        when: "terminalFocus",
        "args": { "text": "\u0017" }
    },
    {
        key: "alt+delete", command: "workbench.action.terminal.sendSequence",
        when: "terminalFocus",
        "args": { "text": "\u001bd" }
    },
    {
        key: "cmd+backspace", command: "workbench.action.terminal.sendSequence",
        when: "terminalFocus",
        "args": { "text": "\u0015" }
    },
    {
        key: "cmd+left", command: "workbench.action.terminal.sendSequence",
        when: "terminalFocus",
        "args": { "text": "\u0001" }
    },
    {
        key: "cmd+right", command: "workbench.action.terminal.sendSequence",
        when: "terminalFocus",
        "args": { "text": "\u0005" }
    },
    {
        key: "ctrl+shift+2", command: "workbench.action.terminal.sendSequence",
        when: "terminalFocus",
        "args": { "text": "\u0000" }
    },
    {
        key: "ctrl+shift+6", command: "workbench.action.terminal.sendSequence",
        when: "terminalFocus",
        "args": { "text": "\u001e" }
    },
    {
        key: "ctrl+/", command: "workbench.action.terminal.sendSequence",
        when: "terminalFocus",
        "args": { "text": "\u001f" }
    },
    {
        key: "cmd+.", command: "workbench.action.terminal.showQuickFixes",
        when: "terminalFocus"
    },
    {
        key: "alt+z", command: "workbench.action.terminal.sizeToContentWidth",
        when: "terminalFocus && terminalHasBeenCreated && terminalIsOpen || terminalFocus && terminalIsOpen && terminalProcessSupported"
    },
    {
        key: "ctrl+shift+5", command: "workbench.action.terminal.split",
        when: "terminalFocus && terminalProcessSupported || terminalFocus && terminalWebExtensionContributedProfile"
    },
    {
        key: "cmd+\\", command: "workbench.action.terminal.split",
        when: "terminalFocus && terminalProcessSupported || terminalFocus && terminalWebExtensionContributedProfile"
    },
    {
        key: "ctrl+shift+5", command: "workbench.action.terminal.splitActiveTab",
        when: "terminalProcessSupported && terminalTabsFocus"
    },
    {
        key: "cmd+\\", command: "workbench.action.terminal.splitActiveTab",
        when: "terminalProcessSupported && terminalTabsFocus"
    },
    {
        key: "alt+cmd+c", command: "workbench.action.terminal.toggleFindCaseSensitive",
        when: "terminalFindFocused && terminalHasBeenCreated || terminalFindFocused && terminalProcessSupported || terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        key: "alt+cmd+r", command: "workbench.action.terminal.toggleFindRegex",
        when: "terminalFindFocused && terminalHasBeenCreated || terminalFindFocused && terminalProcessSupported || terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        key: "alt+cmd+w", command: "workbench.action.terminal.toggleFindWholeWord",
        when: "terminalFindFocused && terminalHasBeenCreated || terminalFindFocused && terminalProcessSupported || terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        key: "ctrl+`", command: "workbench.action.terminal.toggleTerminal",
        when: "terminal.active"
    },
    { key: "alt+cmd+b", command: "workbench.action.toggleAuxiliaryBar" },
    { key: "alt+cmd+0", command: "workbench.action.toggleEditorGroupLayout" },
    {
        key: "ctrl+cmd+f", command: "workbench.action.toggleFullScreen",
        when: "!isIOS"
    },
    { key: "cmd+j", command: "workbench.action.togglePanel" },
    { key: "cmd+b", command: "workbench.action.toggleSidebarVisibility" },
    { key: "cmd+k z", command: "workbench.action.toggleZenMode" },
    {
        key: "cmd+k shift+enter", command: "workbench.action.unpinEditor",
        when: "activeEditorIsPinned"
    },
    { key: "cmd+numpad_add", command: "workbench.action.zoomIn" },
    { key: "shift+cmd+=", command: "workbench.action.zoomIn" },
    { key: "cmd+=", command: "workbench.action.zoomIn" },
    { key: "cmd+numpad_subtract", command: "workbench.action.zoomOut" },
    { key: "shift+cmd+-", command: "workbench.action.zoomOut" },
    { key: "cmd+-", command: "workbench.action.zoomOut" },
    { key: "cmd+numpad0", command: "workbench.action.zoomReset" },
    {
        key: "shift+cmd+m", command: "workbench.actions.view.problems",
        when: "workbench.panel.markers.view.active"
    },
    {
        key: "escape", command: "workbench.banner.focusBanner",
        when: "bannerFocused"
    },
    {
        key: "down", command: "workbench.banner.focusNextAction",
        when: "bannerFocused"
    },
    {
        key: "right", command: "workbench.banner.focusNextAction",
        when: "bannerFocused"
    },
    {
        key: "up", command: "workbench.banner.focusPreviousAction",
        when: "bannerFocused"
    },
    {
        key: "left", command: "workbench.banner.focusPreviousAction",
        when: "bannerFocused"
    },
    {
        key: "shift+cmd+y", command: "workbench.debug.action.toggleRepl",
        when: "workbench.panel.repl.view.active"
    },
    { key: "cmd+k c", command: "workbench.files.action.compareWithClipboard" },
    { key: "cmd+k d", command: "workbench.files.action.compareWithSaved" },
    {
        key: "cmd+k e", command: "workbench.files.action.focusOpenEditorsView",
        when: "workbench.explorer.openEditorsView.active"
    },
    {
        key: "escape", command: "workbench.statusBar.clearFocus",
        when: "statusBarFocused"
    },
    {
        key: "home", command: "workbench.statusBar.focusFirst",
        when: "statusBarFocused"
    },
    {
        key: "end", command: "workbench.statusBar.focusLast",
        when: "statusBarFocused"
    },
    {
        key: "down", command: "workbench.statusBar.focusNext",
        when: "statusBarFocused"
    },
    {
        key: "right", command: "workbench.statusBar.focusNext",
        when: "statusBarFocused"
    },
    {
        key: "up", command: "workbench.statusBar.focusPrevious",
        when: "statusBarFocused"
    },
    {
        key: "left", command: "workbench.statusBar.focusPrevious",
        when: "statusBarFocused"
    },
    {
        key: "shift+cmd+d", command: "workbench.view.debug",
        when: "viewContainer.workbench.view.debug.enabled"
    },
    {
        key: "shift+cmd+e", command: "workbench.view.explorer",
        when: "viewContainer.workbench.view.explorer.enabled"
    },
    {
        key: "shift+cmd+x", command: "workbench.view.extensions",
        when: "viewContainer.workbench.view.extensions.enabled"
    },
    {
        key: "ctrl+shift+g", command: "workbench.view.scm",
        when: "workbench.scm.active"
    },
    {
        key: "shift+cmd+f", command: "workbench.view.search",
        when: "workbench.view.search.active && neverMatch =~ /doesNotMatch/"
    },
    {
        key: "alt+right", command: "breadcrumbs.focusNextWithPicker",
        when: "breadcrumbsActive && breadcrumbsVisible && listFocus && !inputFocus"
    },
    {
        key: "alt+left", command: "breadcrumbs.focusPreviousWithPicker",
        when: "breadcrumbsActive && breadcrumbsVisible && listFocus && !inputFocus"
    },
    {
        key: "escape", command: "breadcrumbs.selectEditor",
        when: "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        key: "cmd+k down", command: "views.moveViewDown",
        when: "focusedView != ''"
    },
    {
        key: "cmd+k left", command: "views.moveViewLeft",
        when: "focusedView != ''"
    },
    {
        key: "cmd+k right", command: "views.moveViewRight",
        when: "focusedView != ''"
    },
    {
        key: "cmd+k up", command: "views.moveViewUp",
        when: "focusedView != ''"
    },
    {
        key: "shift+cmd+]", command: "workbench.action.debug.nextConsole",
        when: "inDebugRepl"
    },
    {
        key: "shift+cmd+[", command: "workbench.action.debug.prevConsole",
        when: "inDebugRepl"
    },
    {
        key: "tab", command: "workbench.action.terminal.acceptSelectedSuggestion",
        when: "terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible"
    },
    {
        key: "enter", command: "workbench.action.terminal.acceptSelectedSuggestion",
        when: "terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible"
    },
    {
        key: "cmd+k", command: "workbench.action.terminal.clear",
        when: "terminalFocus && terminalHasBeenCreated && !accessibilityModeEnabled || terminalFocus && terminalProcessSupported && !accessibilityModeEnabled"
    },
    {
        key: "escape", command: "workbench.action.terminal.hideSuggestWidget",
        when: "terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible"
    },
    {
        key: "shift+cmd+o", command: "workbench.action.terminal.openDetectedLink",
        when: "terminalFocus && terminalHasBeenCreated"
    },
    {
        key: "shift+cmd+g", command: "workbench.action.terminal.openDetectedLink",
        when: "accessibleViewIsShown && terminalHasBeenCreated && accessibleViewCurrentProviderId == 'terminal'"
    },
    {
        key: "pagedown", command: "workbench.action.terminal.selectNextPageSuggestion",
        when: "terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible"
    },
    {
        key: "down", command: "workbench.action.terminal.selectNextSuggestion",
        when: "terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible"
    },
    {
        key: "pageup", command: "workbench.action.terminal.selectPrevPageSuggestion",
        when: "terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible"
    },
    {
        key: "up", command: "workbench.action.terminal.selectPrevSuggestion",
        when: "terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible"
    },
    {
        key: "f6", command: "workbench.action.debug.pause",
        when: "debugState == 'running'"
    },
    {
        key: "alt+down", command: "workbench.action.terminal.accessibleBufferGoToNextCommand",
        when: "accessibleViewIsShown && accessibleViewCurrentProviderId == 'terminal' || accessibleViewIsShown && terminalHasBeenCreated && accessibleViewCurrentProviderId == 'terminal' || accessibleViewIsShown && terminalProcessSupported && accessibleViewCurrentProviderId == 'terminal'"
    },
    {
        key: "alt+up", command: "workbench.action.terminal.accessibleBufferGoToPreviousCommand",
        when: "accessibleViewIsShown && terminalHasBeenCreated && accessibleViewCurrentProviderId == 'terminal' || accessibleViewIsShown && terminalProcessSupported && accessibleViewCurrentProviderId == 'terminal'"
    },
    {
        key: "enter", command: "debug.renameWatchExpression",
        when: "watchExpressionsFocused"
    },
    {
        key: "enter", command: "debug.setVariable",
        when: "variablesFocused"
    },
    {
        key: "space", command: "debug.toggleBreakpoint",
        when: "breakpointsFocused && !inputFocus"
    },
    {
        key: "escape", command: "notebook.cell.quitEdit",
        when: "notebookEditorFocused && notebookOutputFocused"
    },
    {
        key: "alt+cmd+backspace", command: "deleteFile",
        when: "filesExplorerFocus && foldersViewVisible && !explorerResourceReadonly && !inputFocus"
    },
    {
        key: "cmd+backspace", command: "deleteFile",
        when: "filesExplorerFocus && foldersViewVisible && !explorerResourceMoveableToTrash && !explorerResourceReadonly && !inputFocus"
    },
    {
        key: "shift+cmd+.", command: "editor.action.accessibleViewGoToSymbol",
        when: "accessibilityHelpIsShown && accessibleViewGoToSymbolSupported || accessibleViewGoToSymbolSupported && accessibleViewIsShown"
    },
    {
        key: "shift+cmd+o", command: "editor.action.accessibleViewGoToSymbol",
        when: "accessibilityHelpIsShown && accessibleViewGoToSymbolSupported || accessibleViewGoToSymbolSupported && accessibleViewIsShown"
    },
    {
        key: "cmd+e", command: "editor.action.toggleScreenReaderAccessibilityMode",
        when: "accessibilityHelpIsShown"
    },
    { key: "shift+alt+f1", command: "editor.action.toggleScreenReaderAccessibilityMode" },
    {
        key: "escape", command: "editor.closeCallHierarchy",
        when: "callHierarchyVisible && !config.editor.stablePeek"
    },
    {
        key: "escape", command: "editor.closeTypeHierarchy",
        when: "typeHierarchyVisible && !config.editor.stablePeek"
    },
    {
        key: "cmd+down", command: "explorer.openAndPassFocus",
        when: "filesExplorerFocus && foldersViewVisible && !explorerResourceIsFolder && !inputFocus"
    },
    {
        key: "escape", command: "filesExplorer.cancelCut",
        when: "explorerResourceCut && filesExplorerFocus && foldersViewVisible && !inputFocus"
    },
    {
        key: "cmd+c", command: "filesExplorer.copy",
        when: "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !inputFocus"
    },
    {
        key: "cmd+x", command: "filesExplorer.cut",
        when: "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
    },
    {
        key: "space", command: "filesExplorer.openFilePreserveFocus",
        when: "filesExplorerFocus && foldersViewVisible && !explorerResourceIsFolder && !inputFocus"
    },
    {
        key: "cmd+v", command: "filesExplorer.paste",
        when: "filesExplorerFocus && foldersViewVisible && !explorerResourceReadonly && !inputFocus"
    },
    {
        key: "home", command: "firstCompressedFolder",
        when: "explorerViewletCompressedFocus && filesExplorerFocus && foldersViewVisible && !explorerViewletCompressedFirstFocus && !inputFocus"
    },
    {
        key: "end", command: "lastCompressedFolder",
        when: "explorerViewletCompressedFocus && filesExplorerFocus && foldersViewVisible && !explorerViewletCompressedLastFocus && !inputFocus"
    },
    {
        key: "delete", command: "moveFileToTrash",
        when: "explorerResourceMoveableToTrash && filesExplorerFocus && foldersViewVisible && !explorerResourceReadonly && !inputFocus"
    },
    {
        key: "cmd+backspace", command: "moveFileToTrash",
        when: "explorerResourceMoveableToTrash && filesExplorerFocus && foldersViewVisible && !explorerResourceReadonly && !inputFocus"
    },
    {
        key: "right", command: "nextCompressedFolder",
        when: "explorerViewletCompressedFocus && filesExplorerFocus && foldersViewVisible && !explorerViewletCompressedLastFocus && !inputFocus"
    },
    {
        key: "left", command: "previousCompressedFolder",
        when: "explorerViewletCompressedFocus && filesExplorerFocus && foldersViewVisible && !explorerViewletCompressedFirstFocus && !inputFocus"
    },
    {
        key: "delete", command: "remote.tunnel.closeInline",
        when: "tunnelCloseable && tunnelViewFocus"
    },
    {
        key: "cmd+backspace", command: "remote.tunnel.closeInline",
        when: "tunnelCloseable && tunnelViewFocus"
    },
    {
        key: "cmd+c", command: "remote.tunnel.copyAddressInline",
        when: "tunnelViewFocus && tunnelType == 'Detected' && tunnelViewMultiSelection == 'undefined' || tunnelViewFocus && tunnelType == 'Forwarded' && tunnelViewMultiSelection == 'undefined'"
    },
    {
        key: "enter", command: "remote.tunnel.label",
        when: "tunnelViewFocus && tunnelType == 'Forwarded' && tunnelViewMultiSelection == 'undefined'"
    },
    {
        key: "enter", command: "renameFile",
        when: "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
    },
    {
        key: "f5", command: "workbench.action.debug.continue",
        when: "debugState == 'stopped'"
    },
    {
        key: "f11", command: "workbench.action.debug.stepInto",
        when: "debugState != 'inactive'"
    },
    {
        key: "shift+escape", command: "closeReferenceSearch",
        when: "referenceSearchVisible && !config.editor.stablePeek"
    },
    {
        key: "escape", command: "closeReferenceSearch",
        when: "referenceSearchVisible && !config.editor.stablePeek"
    },
    {
        key: "escape", command: "notifications.hideList",
        when: "notificationCenterVisible"
    },
    {
        key: "ctrl+-", command: "workbench.action.quickInputBack",
        when: "inQuickOpen"
    },
    {
        key: "ctrl+tab", command: "workbench.action.quickOpenNavigateNextInEditorPicker",
        when: "inEditorsPicker && inQuickOpen"
    },
    {
        key: "cmd+p", command: "workbench.action.quickOpenNavigateNextInFilePicker",
        when: "inFilesPicker && inQuickOpen"
    },
    {
        key: "ctrl+r", command: "workbench.action.quickOpenNavigateNextInRecentFilesPicker",
        when: "inQuickOpen && inRecentFilesPicker"
    },
    {
        key: "ctrl+q", command: "workbench.action.quickOpenNavigateNextInViewPicker",
        when: "inQuickOpen && inViewsPicker"
    },
    {
        key: "ctrl+shift+tab", command: "workbench.action.quickOpenNavigatePreviousInEditorPicker",
        when: "inEditorsPicker && inQuickOpen"
    },
    {
        key: "shift+cmd+p", command: "workbench.action.quickOpenNavigatePreviousInFilePicker",
        when: "inFilesPicker && inQuickOpen"
    },
    {
        key: "ctrl+shift+r", command: "workbench.action.quickOpenNavigatePreviousInRecentFilesPicker",
        when: "inQuickOpen && inRecentFilesPicker"
    },
    {
        key: "ctrl+shift+q", command: "workbench.action.quickOpenNavigatePreviousInViewPicker",
        when: "inQuickOpen && inViewsPicker"
    },
    {
        key: "ctrl+n", command: "workbench.action.quickOpenSelectNext",
        when: "inQuickOpen"
    },
    {
        key: "ctrl+p", command: "workbench.action.quickOpenSelectPrevious",
        when: "inQuickOpen"
    },
    {
        key: "cmd+r", command: "workbench.action.reloadWindow",
        when: "isDevelopment"
    },
    {
        key: "shift+cmd+f", command: "workbench.action.terminal.searchWorkspace",
        when: "terminalFocus && terminalProcessSupported && terminalTextSelected"
    },
    {
        key: "alt+cmd+i", command: "workbench.action.toggleDevTools",
        when: "isDevelopment"
    },
    {
        key: "escape", command: "notifications.hideToasts",
        when: "notificationFocus && notificationToastsVisible"
    },
    {
        key: "f10", command: "extension.node-debug.startWithStopOnEntry",
        when: "!inDebugMode && debugConfigurationType == 'node' || !inDebugMode && debugConfigurationType == 'pwa-extensionHost' || !inDebugMode && debugConfigurationType == 'pwa-node'"
    },
    {
        key: "cmd+k alt+cmd+s", command: "git.stageSelectedRanges",
        when: "isInDiffEditor && !operationInProgress"
    },
    {
        key: "shift+cmd+v", command: "markdown.showPreview",
        when: "!notebookEditorFocused && editorLangId == 'markdown'"
    },
    {
        key: "shift+alt+f12", command: "references-view.findReferences",
        when: "editorHasReferenceProvider"
    },
    {
        key: "f11", command: "extension.node-debug.startWithStopOnEntry",
        when: "!inDebugMode && activeViewlet == 'workbench.view.debug' && debugConfigurationType == 'node' || !inDebugMode && activeViewlet == 'workbench.view.debug' && debugConfigurationType == 'pwa-extensionHost' || !inDebugMode && activeViewlet == 'workbench.view.debug' && debugConfigurationType == 'pwa-node'"
    },
    {
        key: "cmd+k cmd+n", command: "git.unstageSelectedRanges",
        when: "isInDiffEditor && !operationInProgress"
    },
    {
        key: "cmd+k v", command: "markdown.showPreviewToSide",
        when: "!notebookEditorFocused && editorLangId == 'markdown'"
    },
    {
        key: "f4", command: "references-view.next",
        when: "reference-list.hasResult && references-view.canNavigate"
    },
    {
        key: "cmd+k cmd+r", command: "git.revertSelectedRanges",
        when: "isInDiffEditor && !operationInProgress"
    },
    {
        key: "shift+f4", command: "references-view.prev",
        when: "reference-list.hasResult && references-view.canNavigate"
    },
    {
        key: "shift+alt+h", command: "references-view.showCallHierarchy",
        when: "editorHasCallHierarchyProvider"
    },
    {
        key: "cmd+.", command: "acceptSelectedCodeAction",
        when: "codeActionMenuVisible"
    },
    {
        key: "enter", command: "acceptSelectedCodeAction",
        when: "codeActionMenuVisible"
    },
    {
        key: "shift+escape", command: "hideCodeActionWidget",
        when: "codeActionMenuVisible"
    },
    {
        key: "escape", command: "hideCodeActionWidget",
        when: "codeActionMenuVisible"
    },
    {
        key: "cmd+enter", command: "previewSelectedCodeAction",
        when: "codeActionMenuVisible"
    },
    {
        key: "ctrl+n", command: "selectNextCodeAction",
        when: "codeActionMenuVisible"
    },
    {
        key: "cmd+down", command: "selectNextCodeAction",
        when: "codeActionMenuVisible"
    },
    {
        key: "down", command: "selectNextCodeAction",
        when: "codeActionMenuVisible"
    },
    {
        key: "ctrl+p", command: "selectPrevCodeAction",
        when: "codeActionMenuVisible"
    },
    {
        key: "cmd+up", command: "selectPrevCodeAction",
        when: "codeActionMenuVisible"
    },
    {
        key: "up", command: "selectPrevCodeAction",
        when: "codeActionMenuVisible"
    },
    {
        key: "escape", command: "diffEditor.exitCompareMove",
        when: "comparingMovedCode"
    }
];
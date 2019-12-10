#!/bin/bash
ROOT_DIR='.'
SRC_DIR="$ROOT_DIR/src"

create_class_module() {
    mkdir -p "$(pwd)/src/components/$1"
    cp "$ROOT_DIR/snippets/snippet.class.component.jsx" "$SRC_DIR/components/$1/$1.component.jsx"
    cp "$ROOT_DIR/snippets/snippet.component.test.js" "$SRC_DIR/components/$1/$1.component.test.js"
    cp "$ROOT_DIR/snippets/snippet.styles.scss" "$SRC_DIR/components/$1/$1.styles.scss"
}

create_functional_module() {
    mkdir -p "$(pwd)/src/components/$1"
    cp "$ROOT_DIR/snippets/snippet.func.component.jsx" "$SRC_DIR/components/$1/$1.component.jsx"
    cp "$ROOT_DIR/snippets/snippet.component.test.js" "$SRC_DIR/components/$1/$1.component.test.js"
    cp "$ROOT_DIR/snippets/snippet.styles.scss" "$SRC_DIR/components/$1/$1.styles.scss"
}

create_action_reducer_folder_contents() {
    mkdir -p "$(pwd)/src/stateManagement/$1"
    cp "$ROOT_DIR/snippets/snippet.redux.actions.js" "$SRC_DIR/stateManagement/$1/$1.actions.js"
    cp "$ROOT_DIR/snippets/snippet.redux.reducer.js" "$SRC_DIR/stateManagement/$1/$1.reducer.js"
}

create_higher_order_component() {
    cp "$ROOT_DIR/snippets/snippet.hoc.js" "$SRC_DIR/$1/$2/$2.hoc.js"
}

alias class_component=create_class_module
alias cc=class_component
alias functional_component=create_functional_module
alias fc=functional_component
alias redux=create_action_reducer_folder_contents
alias hoc=create_higher_order_component
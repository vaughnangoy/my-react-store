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

alias class_component=create_class_module
alias cc=class_component
alias functional_component=create_functional_module
alias fc=functional_component
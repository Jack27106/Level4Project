import * as Blockly from 'blockly';
import { openQASMGenerator } from './blocks.js';
import './blocks.js';

const toolbox = {
    kind: "categoryToolbox",

    contents: [
        {
            kind: "category",
            name: "Quantum Gates",
            colour: "230",

            contents: [
                {
                    kind: "block",
                    type: "quantum_x",
                },
                {
                    kind: "block",
                    type: "quantum_y",
                },
                {
                    kind: "block",
                    type: "quantum_z",
                },
                {
                    kind: "block",
                    type: "quantum_hadamard"
                },
                {
                    kind: "block",
                    type: "quantum_cnot"
                },
            ]
        },

        {
            kind: "category",
            name: "Quantum",
            colour: "67",

            contents: [
                {
                    kind: "block",
                    type: "circuit_create"
                },
                {
                    kind: "block",
                    type: "quantum_measure"
                },
            ]
        },

        {
            kind: "category",
            name: "Logic",
            colour: "210",

            contents: [
                {
                    kind: "block",
                    type: "controls_repeat_ext"
                },
                {
                    kind: "block",
                    type: "math_number"
                },
            ]
        }
    ]
};

const workspace = Blockly.inject("blocklyDiv", {
    toolbox: toolbox,
    collapse: true,
    comments: true,
    trashcan: true,

});

document.getElementById("generateButton").addEventListener("click", () => {
    const code = "OPENQASM 3.0;\n" + openQASMGenerator.workspaceToCode(workspace);

    console.log(code);

    document.getElementById("codeOutput").textContent = code;
});

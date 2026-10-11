import * as Blockly from 'blockly';
import { pythonGenerator } from 'blockly/python';

export const openQASMGenerator = new Blockly.Generator("OpenQASM");

openQASMGenerator.scrub_ = function(block, code) {
    const nextBlock = block.nextConnection && block.nextConnection.targetBlock();

    const nextCode = nextBlock
        ? this.blockToCode(nextBlock)
        : "";

    return code + nextCode;
};

Blockly.Blocks["quantum_hadamard"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Apply H gate to qubit")
            .appendField(
                new Blockly.FieldNumber(0,0),
                "QUBIT"
            );

        this.setPreviousStatement(true,null);
        this.setNextStatement(true,null);

        this.setColour(230);

        this.setTooltip("Applies a Hadamard gate to a specified qubit.");

        this.setHelpUrl('https://en.wikipedia.org/wiki/Quantum_logic_gate#Hadamard_gate')
        

    }
};

openQASMGenerator.forBlock["quantum_hadamard"] = function(block) {

    const qubit = block.getFieldValue("QUBIT");

    return `h q[${qubit}];\n`;
};

Blockly.Blocks["circuit_create"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Create a circuit with")
            .appendField(
                new Blockly.FieldNumber(0,0),
                "QUBITS"
            )
            .appendField("qubits");

        this.setPreviousStatement(true,null);
        this.setNextStatement(true,null);

        this.setColour(230);

        this.setTooltip("Creates a quantum circuit with specified number of qubits");

        this.setHelpUrl("")
        

    }
};

openQASMGenerator.forBlock["circuit_create"] = function(block) {

    const qubits = block.getFieldValue("QUBITS");

    return `qubit[${qubits}] q;\nbit[${qubits}] c;\n`;
};

Blockly.Blocks["quantum_x"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Apply X gate to qubit")
            .appendField(
                new Blockly.FieldNumber(0,0),
                "QUBIT"
            );

        this.setPreviousStatement(true,null);
        this.setNextStatement(true,null);

        this.setColour(230);

        this.setTooltip("Applies an X gate to the specified qubit");

        this.setHelpUrl("")
        

    }
};

openQASMGenerator.forBlock["quantum_x"] = function(block) {

    const qubit = block.getFieldValue("QUBIT");

    return `x q[${qubit}];\n`;
};

Blockly.Blocks["quantum_y"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Apply Y gate to qubit")
            .appendField(
                new Blockly.FieldNumber(0,0),
                "QUBIT"
            );

        this.setPreviousStatement(true,null);
        this.setNextStatement(true,null);

        this.setColour(230);

        this.setTooltip("Applies a Y gate to the specified qubit");

        this.setHelpUrl("")
        

    }
};

openQASMGenerator.forBlock["quantum_y"] = function(block) {

    const qubit = block.getFieldValue("QUBIT");

    return `y q[${qubit}];\n`;
};

Blockly.Blocks["quantum_z"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Apply Z gate to qubit")
            .appendField(
                new Blockly.FieldNumber(0,0),
                "QUBIT"
            );

        this.setPreviousStatement(true,null);
        this.setNextStatement(true,null);

        this.setColour(230);

        this.setTooltip("Applies a Z gate to the specified qubit");

        this.setHelpUrl("")
        

    }
};

openQASMGenerator.forBlock["quantum_z"] = function(block) {

    const qubit = block.getFieldValue("QUBIT");

    return `z q[${qubit}];\n`;
};

Blockly.Blocks["quantum_cnot"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Apply CNOT with control qubit")
            .appendField(
                new Blockly.FieldNumber(0,0),
                "CONTROL"
            )
            .appendField("and target qubit")
            .appendField(
                new Blockly.FieldNumber(0,0),
                "TARGET"
            );

        this.setPreviousStatement(true,null);
        this.setNextStatement(true,null);

        this.setColour(230);

        this.setTooltip("Applies a CNOT operation with the specified control and target qubits");

        this.setHelpUrl("")
        

    }
};

openQASMGenerator.forBlock["quantum_cnot"] = function(block) {

    const control = block.getFieldValue("CONTROL");
    const target = block.getFieldValue("TARGET");

    return `cx q[${control}], q[${target}];\n`;
};

Blockly.Blocks["quantum_measure"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Measure all qubits");

        this.setPreviousStatement(true,null);
        this.setNextStatement(true,null);

        this.setColour(230);

        this.setTooltip("Measures all qubits");

        this.setHelpUrl("")
        

    }
};

openQASMGenerator.forBlock["quantum_measure"] = function(block) {

    return `c = measure q;`
};


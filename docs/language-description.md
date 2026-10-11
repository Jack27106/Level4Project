# Language Description

## 1. Overview

This document describes the blocks available in the block-based programming language developed for this project. The document will list each block providing an explanation of its purpose, available inputs and paramaters, and a translation into OpenQASM.

The aim of the language is to make quantum programming more accessible by allowing users to construct quantum programs using a visual, block-based interface rather than writing a conventional text-based program.

## 2. Language structure

The language is organised into catagories of blocks based on their purpose. These categories can be seen in the toolbox on the left side of the user interace and are also listed below.

| Category | Description |
| -------- | ----------- |
| [Quantum Gates](#31-quantum-gates) | These blocks apply quantum operator to qubits |

## 3. Block definitions

## 3.1 Quantum Gates

### 3.1.1 X Gate

**Block name:** Apply X gate to qubit  

**Purpose:**

Applies an X gate to the selected qubit. This gate is equivalent to a classical bit flip or NOT gate, transforming a |0> into a |1> and a |1> into a |0>.  

**Matrix represenation:**  
$$
X = \begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix}
$$

**Circuit symbol:**  

TODO

**Inputs and parameters:**  

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Qubit | Integer | The index of the qubit to which the gate is applied. |

**Example block usage:**  

Apply X gate to qubit 0

**Generated OpenQASM:**  

```qasm
x q[0];
```

**Code explanation:**

The x instruction applies an X gate to the qubit at index 0 in the quantum register q.

**Notes:**

- The qubit index must refer to an existing qubit.
- The quantum register must be declared before the instruction is executed.

### 3.1.2 Y Gate

**Block name:** Apply Y gate to qubit  

**Purpose:**

TODO

**Matrix represenation:**  
$$
Y = \begin{pmatrix}
0 & -i \\
i & 0
\end{pmatrix}
$$

**Circuit symbol:**

TODO

**Inputs and parameters:**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Qubit | Integer | The index of the qubit to which the gate is applied. |

**Example block usage:**

Apply Y gate to qubit 0

**Generated OpenQASM:**

```qasm
y q[0];
```

**Code explanation:**

The y instruction applies a Y gate to the qubit at index 0 in the quantum register q.

**Notes:**

- The qubit index must refer to an existing qubit.
- The quantum register must be declared before the instruction is executed.

### 3.1.3 Z Gate

**Block name:** Apply Z gate to qubit  

**Purpose:**

TODO

**Matrix represenation:**  
$$
Z = \begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix}
$$

**Circuit symbol:**

TODO

**Inputs and parameters:**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Qubit | Integer | The index of the qubit to which the gate is applied. |

**Example block usage:**

Apply Z gate to qubit 0

**Generated OpenQASM:**  

```qasm
z q[0];
```

**Code explanation:**

The z instruction applies a Z gate to the qubit at index 0 in the quantum register q.

**Notes:**

- The qubit index must refer to an existing qubit.
- The quantum register must be declared before the instruction is executed.

### 3.1.4 Hadamard Gate (H gate)

**Block name:** Apply H gate to qubit  

**Purpose:**

TODO

**Matrix represenation:**  

$$
H = \frac{1}{\sqrt{2}}\begin{pmatrix}
1 & 1 \\
1 & -1
\end{pmatrix}
$$

**Circuit symbol:**

TODO

**Inputs and parameters:**  

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Qubit | Integer | The index of the qubit to which the gate is applied. |

**Example block usage:**

Apply H gate to qubit 0

**Generated OpenQASM:**

```qasm
h q[0]
```

**Code explanation:**

The z instruction applies a Z gate to the qubit at index 0 in the quantum register q.

**Notes:**

- The qubit index must refer to an existing qubit.
- The quantum register must be declared before the instruction is executed.

### 3.1.5 Controlled Not Gate (CNOT)

**Block name:** TODO

**Purpose:**

TODO

**Matrix represenation:**  

$$
CNOT = \begin{pmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0
\end{pmatrix}
$$

**Circuit symbol:**

TODO

**Inputs and parameters:**  

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Control qubit | Integer | The index of the qubit that controls whether the gate is applied |
| Target qubit | Integer | The index of the qubit that is flipped when the control qubit is in state \|1> |

**Example block usage:**

TODO

**Generated OpenQASM:**  

```qasm
cx q[0], q[1];
```

**Code explanation:**

TODO

**Notes:**

- The control and target qubits must refer to an existing qubit.
- The control and target qubits must refer to different qubits.
- The quantum register must be declared before the instruction is executed.

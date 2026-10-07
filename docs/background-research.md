# Background Research

## Towards a Quantum Programming Language

**Author:** Peter Selinger  
**Year:** 2004  
**Paper:** <https://www.mathstat.dal.ca/~selinger/papers/papers/qpl-2up.pdf>

### Summary

In this paper, Selinger proposes a functional and statically typed quantum programming language (QPL). The main purpose of this language is to move away from the typical low-level representations commonly used, such as quantum circuits and quantum Turing machines. This language that Selinger proposes introduces conventional programming abstractions, such as control flow and procedures, while incorporating a type system which is capable of enforcing both standard typing rules as well as restrictions associated with quantum states (e.g., the no-cloning theorem). Selinger also introduces the idea of using a quantum flow chart as a graphical representation of quantum programs.

### Relevance to this project

This paper is relevant to this project as not only is it a very early and influential contribution to the field of quantum programming languages, but it also proposes this idea of using a graphical representation of quantum programs, similar to how this project will be investigating the use of a block-based representation.

## Block-based programming in computer science education

**Author:** David Weintrop  
**Year:** 2019  
**Paper:** <https://dl.acm.org/doi/abs/10.1145/3341221>

### Summary

In this paper, Weintrop examines the role of block-based programming in computing science education, specifically its use as a tool for beginner programmers to learn the basics. Block-based programming environments such as Scratch use visual blocks that represent classical programming constructs, such as loops, which can be combined to construct larger programs. Restrictions are placed upon these blocks, which only allow them to be combined in a valid and logical way. These restrictions can help reduce syntax errors and allow beginners to focus more on the actual programming concepts rather than the syntax of a conventional programming language. Weintrop found that many beginners perceived block-based languages to be "easier" than traditional programming, stating features such as the ability to browse the available set of commands and the shape/visual layout of the blocks to be leading factors for this finding. However, the paper also identifies limitations, including some learners perceiving block-based programming as less authentic or less powerful than conventional programming, as well as questions surrounding the transition from block-based to conventional programming.

### Relevance to this project

This paper is relevant to this project as it investigates the potential benefits and limitations of using a block-based language as an educational tool for inexperienced programmers. Weintrop's findings provide a justification for investigating whether a quantum block-based language would benefit similarly to the traditional block-based language.  

## QScratch: introduction to quantum mechanics concepts through block-based programming

**Author:** Daniel Escanez-Exposito, Marcos Rodriguez-Vega, Carlos Rosa-Remedios and Pino Caballero-Gil  
**Year:** 2025  
**Paper:** https://link.springer.com/article/10.1140/epjqt/s40507-025-00314-9

### Summary 

In this paper, the authors introduce an educational tool, QScratch, designed to teach the fundamentals of quantum mechanics through the use of a block-based programming environment. QScratch is an extension of Scratch and introduces new quantum blocks designed to represent superposition, entanglement and measurement. The aim of QScratch is to make complex quantum concepts easier to understand and learn by providing the user with an interactive visual environment rather than mathematical descriptions or definitions. The authors argue that using this traditional method of mathematical descriptions can make quantum concepts difficult to introduce to students, particularly those without a strong background in mathematics.

The authors then evaluate QScratch through a pilot study involving 68 first-year chemical engineering university students. The students completed a pre-test to gauge their interest and experience in the topic, then received a short introduction to quantum computing and quantum mechanics, followed by practical exercises completed using QScratch. A post-test was then conducted to assess changes in students' knowledge and interest levels. The results suggested that QScratch had a positive impact on both the students' knowledge of and interest in quantum mechanics.

### Relevance to this project

This paper is relevant to this project as it provides a direct example of using block-based programming to make quantum concepts more accessible. The authors demonstrate that quantum concepts such as superposition can be represented using blocks in an intuitive manner. This provides a useful precedent for investigating whether a similar block-based approach can also be applied to quantum programming.

Additionally, this paper is useful as it also demonstrates how a pilot study could be used for evaluating the effectiveness of a block-based environment. This is relevant to this project because the project will also be investigating whether the block-based approach actually improves accessibility via a potentially similar pilot study.

However, there is an important distinction between QScratch and this project. QScratch primarily focuses on introducing fundamental quantum mechanics concepts such as entanglement, whereas this project focuses on the accessibility of quantum programming.

## Teaching Quantum Design Automation with Block-Based Programming

**Author:** Damian Rovara, Robert Wille  
**Year:** 2026  
**Paper:** <https://arxiv.org/pdf/2608.18206>

### Summary 

In this paper, Rovara and Wille propose a block-based programming framework for teaching quantum design automation concepts. The authors identify that concepts such as quantum compilation, resource estimation and verification can be difficult for newcomers, specifically when low-level textual representations such as OpenQASM, QIR or MLIR are used to design quantum programs. In an attempt to lower this entry barrier, they develop a Scratch extension which allows users to construct quantum programs using blocks while also incorporating classical programming concepts such as loops and control flow. The framework they created also includes simulation and resource estimation features and also provides a tool to translate a created block program to alternate representations such as MLIR.

After developing the framework, the authors then ran a user study involving 24 postgraduate computer science and electrical engineering students to evaluate the effectiveness of their framework. These students had some basic quantum computing knowledge but had limited experience in quantum design automation. In the study, participants completed exercises created by the authors which covered circuit creation, resource estimation, optimisation and verification. After completing the tasks, the participants then provided feedback on the framework through the use of a questionnaire which was split into prior experience, competence and usability sections. Around half of the participants completed the tasks in the supervised laboratory session while the others completed them as a take-home assignment. Some participants even took part in a follow-up questionnaire 1 week later to test their retention of the knowledge they learned. Overall, the results showed generally positive feedback and suggested that the block-based approach did in fact help lower the entry barrier to quantum design automation. However, the authors acknowledge that the findings may not generalise to all learners, as their participant group were all postgraduate computing/engineering students who had some preexisting quantum computing knowledge.

### Relevance to this project

This paper is highly relevant to this project as it provides direct evidence of a block-based language being successfully applied to quantum computing education. It demonstrates how visual blocks can be used not only to represent quantum gates but also to incorporate classical programming concepts such as control flow. The paper also provides a useful example of how the accessibility of a block-based quantum programming environment can be evaluated through a user study.

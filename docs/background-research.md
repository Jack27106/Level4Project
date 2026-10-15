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

## Comparing Block-Based and Text-Based Programming in High School Computer Science Classrooms

**Author:** David Weintrop and Uri Wilensky  
**Year:** 2017  
**Paper:** <https://dl.acm.org/doi/10.1145/3089799>

### Summary

In this paper, Weintrop and Wilensky investigate the differences between block-based and text-based programming environments in introductory computer science classrooms. The authors conducted a five week quasi-experimental study in an introductory high school programming course where students either used a block-based or a text-based programming environment, both of which were designed to teach the same concepts. The researchers used pre- and postcontent assessments, attitudinal surveys, semistructured clinical interviews, and classroom observations to gather data for their results.

While the results show that students in both groups improved their assessment scores, the students using the block-based environment demonstrated greater learning gains. Those students using the block-based environment also expressed greater interest in taking further computing courses. The students using the text-based environment perceived their experience as more representative of professional programming and as more effective for improving their actual programming skills. Finally, there were no significant differences between the groups in terms of confidence or enjoyment.

The authors conclude that block-based programming can offer educational benefits in introductory programming contexts, particularly in supporting learning and encouraging interest in computing. However, the findings also highlight that students may perceive text-based programming as more representative of professional practice.

### Relevance to this project

This paper is relevant to this project as it provides an example of an experimental study which compares block-based and text-based programming environments. The results of the experiment offer a foundation for investigating whether a block-based approach could make quantum programming more accessible to inexperienced programmers.

The study itself is particularly useful when considering how to create an experimental evaluation of my own. While the authors compare the students' learning gains, they also assess their attitudes and perceptions of the environments. This presents the idea that the evaluation of a quantum block-based environment could consider multiple aspects of accessibility, such as task completion, perceived difficulty, confidence and user experience, rather than relying on a single measure. Importantly, the study focuses only on classical programming and therefore the findings cannot be assumed to apply directly to quantum programming. This project can build on the study's approach by investigating whether similar benefits are observed when block-based programming is applied to quantum computing.

## Exploring the Effectiveness and Moderators of Block-Based Visual Programming on Student Learning: A Meta-Analysis

**Author:** Yue Hu, Cheng-Huan Chen, and Chien-Yuan Su  
**Year:** 2021  
**Paper:** <https://journals.sagepub.com/doi/10.1177/0735633120945935>

### Summary

In this paper, Hu, Chen and Su investigate the effectiveness of block-based visual programming tools in supporting students' learning. To carry out this investigation, the authors conducted a meta-analysis of various empirical studies which compare the learning outcomes associated with block-based and traditional text-based programming. A total of 29 experimental studies published between 2003 and 2019 were used. While evaluating these studies, the authors focused mainly on academic achievement, which was measured using examination/assessment results and course success rates.

The results showed that block-based programming had a positive overall effect on students' academic achievements compared with traditional text-based programming. However, the results varied between studies, which suggests that block-based programming was not equally effective in every setting.

The authors then go on to investigate four factors that they believe could be the cause of these varied results, those being: educational stage, programming tool, experimental treatment and school location. Their findings suggest that block-based programming had a larger positive benefit on academic achievement among elementary and middle school students compared to university and college students. Scratch also appeared to be more effective compared to Alice and MIT App Inventor. Additionally, studies using block-based programming alongside traditional text-based instruction reported a greater positive benefit than studies using block-based programming as a replacement for text-based programming.

Finally, the authors point out some limitations, the most important of these being the fact that the analysis focused on academic achievement but did not address other factors such as students' attitude or confidence.

### Relevance to this project

This paper is relevant to this project as it provides further evidence that block-based programming can be successful in an educational environment. However, the findings in this paper only concern traditional programming and do not directly suggest that block-based programs can improve learning in quantum programming. This gives further reason to investigate whether applying block-based programming to quantum computing will have similar positive benefits.

The paper also gives insight into some factors which can alter the effectiveness of block-based programming in education, which may be useful to consider in my evaluation. While the authors only assessed academic achievement, they acknowledge the significance of also testing students' affective outcomes and computational thinking skills, which could be another thing to consider in my study/evaluation.

## Transitioning from introductory block-based and text-based environments to professional programming languages in high school computer science classrooms

**Author:** David Weintrop and Uri Wilensky  
**Year:** 2019  
**Paper:** <https://www.sciencedirect.com/science/article/abs/pii/S036013151930199X?via%3Dihub>

### Summary 

In this paper, Weintrop and Wilensky investigate whether learning programming with a block-based environment, rather than a text-based environment, affects students when transitioning to a professional programming language. The authors conduct a study involving 60 high school students who are split between block-based and text-based introductory programming environments.

The participants followed the same curriculum with the same teacher for five weeks while using their respective introductory programming environment. All participants then transitioned to learning Java for ten weeks. The researchers measured conceptual understanding, attitudes towards programming, and programming practices. These were measured by both monitoring the students' use of Java and through Pre, Mid, and Post content assessments.

The authors found that while the block-based group showed greater initial learning gains, the difference disappeared after both groups transitioned to Java. Initial differences in students' attitude towards programming also disappeared after the transition. Finally, no significant differences were found between groups in their Java coding or compilation error rates.

### Relevance to this project

This study also supports the idea that block-based programming can help beginners learn programming concepts initially. However, this paper also suggests that the information and skills learned may not necessarily transfer to a professional coding language/environment. This highlights the importance of also evaluating understanding of the quantum concepts in my study. The findings in this paper explain the motivation to add the visual circuit diagram and the OpenQASM code output display in the block-based coding environment. These additions will hopefully help users learn more about the quantum concepts and also assist in their transition to a professional language if they wish to do so.

## A Computer Science-Oriented Approach to Introduce Quantum Computing to a New Audience

**Author:** Özlem Salehi, Zeki Seskir, and Ilknur Tepe  
**Year:** 2022  
**Paper:** <https://ieeexplore.ieee.org/abstract/document/9439191>

### Summary 

In this paper, the authors investigate whether quantum computing can be effectively taught to people from various backgrounds using a computer science-oriented approach rather than focusing on quantum physics. The authors conduct a study using workshops involving 317 participants from a range of countries and degrees/education levels (mainly STEM-related).

To run the study, the researchers created introductory quantum computing materials using Python and Qiskit. These resources mainly attempt to introduce quantum concepts through linear algebra and programming tasks. The participants completed a test before and after reviewing the materials. The results from these tests were used by the researchers to analyse the effectiveness of their approach.

They found that participants demonstrated a significant improvement in their basic quantum computing knowledge after using the computing science-based resources. They also found that the learning gains from using the resources did not differ significantly between participants from different STEM backgrounds. Finally, the authors found that participants generally reported a high satisfaction with the workshops.

### Relevance to this project

The findings from this paper support the use of quantum programming as a way to introduce quantum computing without requiring extensive knowledge of quantum physics. However, the use of Python and Qiskit may make these workshops less useful for those who are unfamiliar with these languages. My project intends to build on this by investigating whether a block-based approach can also be used to make learning quantum computing more accessible, but without the need to understand conventional programming language syntax and concepts.

## From computing to quantum mechanics: accessible and hands-on quantum computing education for high school students

**Author:** Qihong Sun, Shuangxiang Zhou, Ronghang Chen, Guanru Feng, King Tai Cheung, Jensen Li, Shi-Yao Hou, and Bei Zeng  
**Year:** 2024  
**Paper:** <https://link.springer.com/article/10.1140/epjqt/s40507-024-00271-9>

### Summary 

In this paper, Sun et al. describe the development of an accessible quantum computing course for high-school students. The aim of the course is to make quantum computing easier to understand by introducing practical computing concepts before moving into the more abstract mathematics/physics. The course has an emphasis on hands-on learning, where students use quantum computers to experiment with quantum circuits and observe their results. The authors argue that practical experience can help make abstract concepts easier to understand and connect theory with real quantum computing processes. The paper also discusses the use of a graphical interface, called Castor, that allows for construction of quantum circuits using a drag-and-drop approach. This gives students a way to interact with quantum programs visually instead of relying entirely on textual code.

A total of 80 participants interacted with the course, of whom more than 85% agreed that the lectures met their expectations. This is interpreted by the authors as evidence that the course was engaging and valuable. Additionally, 66.6% of students found the activities challenging and stimulating, and 81.7% felt a strong sense of achievement.

### Relevance to this project

This paper is relevant to this project as it firstly demonstrates how quantum computing can be introduced to learners without requiring vast mathematical/physics knowledge. This supports an aim of the project of making quantum programming accessible to those who are unfamiliar with the topic.

Secondly, the paper emphasises the value of combining visual interaction with practical experimentation and feedback. This suggests that users could benefit from my block-based environment in which they can construct their own programs and then execute them many times in order to inspect and learn from the results.

## QScratch: introduction to quantum mechanics concepts through block-based programming

**Author:** Daniel Escanez-Exposito, Marcos Rodriguez-Vega, Carlos Rosa-Remedios and Pino Caballero-Gil  
**Year:** 2025  
**Paper:** <https://link.springer.com/article/10.1140/epjqt/s40507-025-00314-9>

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

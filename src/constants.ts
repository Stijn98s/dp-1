const FILEONETEXT =
    '# Circuit1.txt\n' +
    '#\n' +
    '# Full-adder. Deze file bevat een ' +
    'correct circuit\n' +
    '#\n' +
    '#\n' +
    '#\n' +
    '# Description of all the nodes\n' +
    '#\n' +
    'A: INPUT_HIGH;\n' +
    'B: INPUT_HIGH;\n' +
    'Cin: INPUT_LOW;\n' +
    'Cout: PROBE;\n' +
    'S: PROBE;\n' +
    'NODE1: OR;\n' +
    'NODE2: AND;\n' +
    'NODE3: AND;\n' +
    'NODE4: NOT;\n' +
    'NODE5: AND;\n' +
    'NODE6: OR;\n' +
    'NODE7: NOT;\n' +
    'NODE8: NOT;\n' +
    'NODE9: AND;\n' +
    'NODE10: AND;\n' +
    'NODE11: OR;\n' +
    '#\n' +
    '#\n\n' +
    '# Description of all the edges\n' +
    '#\n' +
    'Cin: NODE3,NODE7,NODE10;\n' +
    'A: NODE1,NODE2;\n' +
    'B: NODE1,NODE2;\n' +
    'NODE1: NODE3,NODE5;\n' +
    'NODE2: NODE4,NODE6;\n' +
    'NODE3: NODE6;\n' +
    'NODE4: NODE5;\n' +
    'NODE5: NODE8,NODE9;\n' +
    'NODE6: Cout;\n' +
    'NODE7: NODE9;\n' +
    'NODE8: NODE10;\n' +
    'NODE9: NODE11;\n' +
    'NODE10: NODE11;\n' +
    'NODE11: S;';

const FILETWOTEXT = '# Circuit1.txt\n' +
    '#\n' +
    '# Full-adder. Deze file bevat een correct circuit\n' +
    '#\n' +
    '#\n' +
    '#\n' +
    '# Description of all the nodes\n' +
    '#\n' +
    'A: INPUT_HIGH;\n' +
    'B: INPUT_HIGH;\n' +
    'Cin: INPUT_LOW;\n' +
    'Cout: PROBE;\n' +
    'S: PROBE;\n' +
    'NODE1: OR;\n' +
    'NODE2: AND;\n' +
    'NODE3: AND;\n' +
    'NODE4: NOT;\n' +
    'NODE5: AND;\n' +
    'NODE6: OR;\n' +
    'NODE7: NOT;\n' +
    'NODE8: NOT;\n' +
    'NODE9: AND;\n' +
    'NODE10: AND;\n' +
    'NODE11: OR;\n' +
    '#\n' +
    '#\n' +
    '\n' +
    '# Description of all the edges\n' +
    '#\n' +
    'Cin: NODE3,NODE7,NODE10;\n' +
    'A: NODE1,NODE2;\n' +
    'B: NODE1,NODE2;\n' +
    'NODE1: NODE3,NODE5;\n' +
    'NODE2: NODE4,NODE6;\n' +
    'NODE3: NODE6;\n' +
    'NODE4: NODE5;\n' +
    'NODE5: NODE8,NODE9;\n' +
    'NODE6: Cout;\n' +
    'NODE7: NODE9;\n' +
    'NODE8: NODE10;\n' +
    'NODE9: NODE11;\n' +
    'NODE10: NODE11;\n' +
    'NODE11: S;\n' +
    '\n' +
    'DEF;\n' +
    '# Circuit1.txt\n' +
    '#\n' +
    '# Full-adder. Deze file bevat een correct circuit\n' +
    '#\n' +
    '#\n' +
    '#\n' +
    '# Description of all the nodes\n' +
    '#\n' +
    'A: INPUT_HIGH;\n' +
    'B: INPUT_HIGH;\n' +
    'Cin: INPUT_LOW;\n' +
    'Cout: PROBE;\n' +
    'S: PROBE;\n' +
    'NODE1: OR;\n' +
    'NODE2: AND;\n' +
    'NODE3: AND;\n' +
    'NODE4: NOT;\n' +
    'NODE5: AND;\n' +
    'NODE6: OR;\n' +
    'NODE7: NOT;\n' +
    'NODE8: NOT;\n' +
    'NODE9: AND;\n' +
    'NODE10: AND;\n' +
    'NODE11: OR;\n' +
    '#\n' +
    '#\n' +
    '\n' +
    '# Description of all the edges\n' +
    '#\n' +
    'Cin: NODE3,NODE7,NODE10;\n' +
    'A: NODE1,NODE2;\n' +
    'B: NODE1,NODE2;\n' +
    'NODE1: NODE3,NODE5;\n' +
    'NODE2: NODE4,NODE6;\n' +
    'NODE3: NODE6;\n' +
    'NODE4: NODE5;\n' +
    'NODE5: NODE8,NODE9;\n' +
    'NODE6: Cout;\n' +
    'NODE7: NODE9;\n' +
    'NODE8: NODE10;\n' +
    'NODE9: NODE11;\n' +
    'NODE10: NODE11;\n' +
    'NODE11: S;\n' +
    'FED;# Circuit1.txt\n' +
    '#\n' +
    '# Full-adder. Deze file bevat een correct circuit\n' +
    '#\n' +
    '#\n' +
    '#\n' +
    '# Description of all the nodes\n' +
    '#\n' +
    'A: INPUT_HIGH;\n' +
    'B: INPUT_HIGH;\n' +
    'Cin: INPUT_LOW;\n' +
    'Cout: PROBE;\n' +
    'S: PROBE;\n' +
    'NODE1: OR;\n' +
    'NODE2: AND;\n' +
    'NODE3: AND;\n' +
    'NODE4: NOT;\n' +
    'NODE5: AND;\n' +
    'NODE6: OR;\n' +
    'NODE7: NOT;\n' +
    'NODE8: NOT;\n' +
    'NODE9: AND;\n' +
    'NODE10: AND;\n' +
    'NODE11: OR;\n' +
    '#\n' +
    '#\n' +
    '\n' +
    '# Description of all the edges\n' +
    '#\n' +
    'Cin: NODE3,NODE7,NODE10;\n' +
    'A: NODE1,NODE2;\n' +
    'B: NODE1,NODE2;\n' +
    'NODE1: NODE3,NODE5;\n' +
    'NODE2: NODE4,NODE6;\n' +
    'NODE3: NODE6;\n' +
    'NODE4: NODE5;\n' +
    'NODE5: NODE8,NODE9;\n' +
    'NODE6: Cout;\n' +
    'NODE7: NODE9;\n' +
    'NODE8: NODE10;\n' +
    'NODE9: NODE11;\n' +
    'NODE10: NODE11;\n' +
    'NODE11: S;\n' +
    '\n' +
    'DEF:ADDER;\n' +
    '# Circuit1.txt\n' +
    '#\n' +
    '# Full-adder. Deze file bevat een correct circuit\n' +
    '#\n' +
    '#\n' +
    '#\n' +
    '# Description of all the nodes\n' +
    '#\n' +
    'A: INPUT_HIGH;\n' +
    'B: INPUT_HIGH;\n' +
    'Cin: INPUT_LOW;\n' +
    'Cout: PROBE;\n' +
    'S: PROBE;\n' +
    'NODE1: OR;\n' +
    'NODE2: AND;\n' +
    'NODE3: AND;\n' +
    'NODE4: NOT;\n' +
    'NODE5: AND;\n' +
    'NODE6: OR;\n' +
    'NODE7: NOT;\n' +
    'NODE8: NOT;\n' +
    'NODE9: AND;\n' +
    'NODE10: AND;\n' +
    'NODE11: OR;\n' +
    '#\n' +
    '#\n' +
    '\n' +
    '# Description of all the edges\n' +
    '#\n' +
    'Cin: NODE3,NODE7,NODE10;\n' +
    'A: NODE1,NODE2;\n' +
    'B: NODE1,NODE2;\n' +
    'NODE1: NODE3,NODE5;\n' +
    'NODE2: NODE4,NODE6;\n' +
    'NODE3: NODE6;\n' +
    'NODE4: NODE5;\n' +
    'NODE5: NODE8,NODE9;\n' +
    'NODE6: Cout;\n' +
    'NODE7: NODE9;\n' +
    'NODE8: NODE10;\n' +
    'NODE9: NODE11;\n' +
    'NODE10: NODE11;\n' +
    'NODE11: S;\n' +
    'FED;';


const file3 = '# Circuit1.txt\n' +
    '#\n' +
    '# Full-adder. Deze file bevat een correct circuit\n' +
    '#\n' +
    '#\n' +
    '#\n' +
    '# Description of all the nodes\n' +
    '#\n' +
    'INH: INPUT_LOW;\n' +
    'INL: INPUT_LOW;\n' +
    'CIN: INPUT_LOW;\n' +
    'ADR: ADDER;\n' +
    'P1: PROBE:\n' +
    'P2: PROBE;\n' +
    '\n' +
    'INH: ADR|B;\n' +
    'INL: ADR|A;\n' +
    'CIN: ADR|Cin;\n' +
    'ADR|Cout: P1;\n' +
    'ADR|S: P2;\n' +
    '\n' +
    'DEF:ADDER;\n' +
    '# Circuit1.txt\n' +
    '#\n' +
    '# Full-adder. Deze file bevat een correct circuit\n' +
    '#\n' +
    '#\n' +
    '#\n' +
    '# Description of all the nodes\n' +
    '#\n' +
    'A: INPUT_HIGH;\n' +
    'B: INPUT_HIGH;\n' +
    'Cin: INPUT_LOW;\n' +
    'Cout: PROBE;\n' +
    'S: PROBE;\n' +
    'NODE1: OR;\n' +
    'NODE2: AND;\n' +
    'NODE3: AND;\n' +
    'NODE4: NOT;\n' +
    'NODE5: AND;\n' +
    'NODE6: OR;\n' +
    'NODE7: NOT;\n' +
    'NODE8: NOT;\n' +
    'NODE9: AND;\n' +
    'NODE10: AND;\n' +
    'NODE11: OR;\n' +
    '#\n' +
    '#\n' +
    '\n' +
    '# Description of all the edges\n' +
    '#\n' +
    'Cin: NODE3,NODE7,NODE10;\n' +
    'A: NODE1,NODE2;\n' +
    'B: NODE1,NODE2;\n' +
    'NODE1: NODE3,NODE5;\n' +
    'NODE2: NODE4,NODE6;\n' +
    'NODE3: NODE6;\n' +
    'NODE4: NODE5;\n' +
    'NODE5: NODE8,NODE9;\n' +
    'NODE6: Cout;\n' +
    'NODE7: NODE9;\n' +
    'NODE8: NODE10;\n' +
    'NODE9: NODE11;\n' +
    'NODE10: NODE11;\n' +
    'NODE11: S;\n' +
    'FED;';

const file4 = '# Circuit1.txt\n' +
    '#\n' +
    '# Full-adder. Deze file bevat een correct circuit\n' +
    '#\n' +
    '#\n' +
    '#\n' +
    '# Description of all the nodes\n' +
    '#\n' +
    'S1: INPUT_LOW;\n' +
    'S2: INPUT_LOW;\n' +
    'S3: INPUT_LOW;\n' +
    'S4: INPUT_LOW;\n' +
    'CIN: INPUT_LOW;\n' +
    'ADR: ADDER;\n' +
    'ADR2: ADDER;\n' +
    'P1: PROBE:\n' +
    'P2: PROBE;\n' +
    'P3: PROBE\n' +
    '\n' +
    'S1: ADR|A;\n' +
    'S2: ADR|B;\n' +
    'CIN: ADR|Cin;\n' +
    'ADR|Cout: ADR2|Cin:\n' +
    'ADR|S: P1;\n' +
    'S3: ADR2|A;\n' +
    'S4: ADR2|B;\n' +
    'ADR2|S: P2;\n' +
    'ADR2|Cout: P3; \n' +
    '\n' +
    'DEF:ADDER;\n' +
    '# Circuit1.txt\n' +
    '#\n' +
    '# Full-adder. Deze file bevat een correct circuit\n' +
    '#\n' +
    '#\n' +
    '#\n' +
    '# Description of all the nodes\n' +
    '#\n' +
    'A: INPUT_HIGH;\n' +
    'B: INPUT_HIGH;\n' +
    'Cin: INPUT_LOW;\n' +
    'Cout: PROBE;\n' +
    'S: PROBE;\n' +
    'NODE1: OR;\n' +
    'NODE2: AND;\n' +
    'NODE3: AND;\n' +
    'NODE4: NOT;\n' +
    'NODE5: AND;\n' +
    'NODE6: OR;\n' +
    'NODE7: NOT;\n' +
    'NODE8: NOT;\n' +
    'NODE9: AND;\n' +
    'NODE10: AND;\n' +
    'NODE11: OR;\n' +
    '#\n' +
    '#\n' +
    '\n' +
    '# Description of all the edges\n' +
    '#\n' +
    'Cin: NODE3,NODE7,NODE10;\n' +
    'A: NODE1,NODE2;\n' +
    'B: NODE1,NODE2;\n' +
    'NODE1: NODE3,NODE5;\n' +
    'NODE2: NODE4,NODE6;\n' +
    'NODE3: NODE6;\n' +
    'NODE4: NODE5;\n' +
    'NODE5: NODE8,NODE9;\n' +
    'NODE6: Cout;\n' +
    'NODE7: NODE9;\n' +
    'NODE8: NODE10;\n' +
    'NODE9: NODE11;\n' +
    'NODE10: NODE11;\n' +
    'NODE11: S;\n' +
    'FED;';

const unconnected = '# Unconnected Pins\n' +
    '#\n' +
    '#\n' +
    '#\n' +
    '# Description of all the nodes\n' +
    '#\n' +
    'A:\tINPUT_HIGH;\n' +
    'B:\tINPUT_HIGH;\n' +
    'F:\tPROBE;\n' +
    'NODE1:\tAND;\n' +
    'NODE2:\tAND;\n' +
    'NODE3:\tAND;\n' +
    'NODE4:\tAND;\n' +
    '\n' +
    '#\n' +
    '#\n' +
    '# Description of all the edges\n' +
    '#\n' +
    'A:\tNODE1;\n' +
    'B:\tNODE1;\n' +
    'NODE1:\tNODE2,NODE3;\n' +
    'NODE3:\tNODE4;\n' +
    'NODE4:\tF;\n';

const loop = `# Feedback. 
#
# Feedback geeft een error in het simulatie algoritme 
#
#
# Description of all the nodes
#
S:	INPUT_HIGH;
R:	INPUT_LOW;
Q:	PROBE;
NQ:	PROBE;
NODE1:	OR;
NODE2:	OR;
NODE3:	NOT;
NODE4:	NOT;
NODE5:	AND;
NODE6:	AND;

#
#
# Description of all the edges
#
S:	NODE5,NODE6;
R:	NODE5,NODE6;
NODE1:	NODE3;
NODE2:	NODE4;
NODE3:	NODE2,Q;
NODE4:	NODE1,NQ;
NODE5:	NODE1;
NODE6:	NODE2;`;


export { FILEONETEXT, FILETWOTEXT, file3, file4, unconnected, loop };

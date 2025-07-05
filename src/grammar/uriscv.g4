grammar uriscv;

// Parser rules

program
    : line* EOF
    ;

line
    : directive NEWLINE
    | instruction NEWLINE
    | labelDef NEWLINE
    | COMMENT NEWLINE
    | NEWLINE
    ;

directive
    : WORD_DIRECTIVE WS+ wordValue
    ;

wordValue
    : HEX_NUMBER
    | DEC_NUMBER
    ;

instruction
    : lw
    | sw
    | sub
    | add
    | addi
    | slt
    | slti
    | sll
    | slli
    | andInstr
    | andi
    | orInstr
    | ori
    | beq
    | bne
    | blt
    | bge
    ;

lw    : 'LW'  WS+ register ',' WS* offsetBase ;
sw    : 'SW'  WS+ register ',' WS* offsetBase ;
sub   : 'SUB' WS+ register ',' WS* register ',' WS* register ;
add   : 'ADD' WS+ register ',' WS* register ',' WS* register ;
addi  : 'ADDI' WS+ register ',' WS* register ',' WS* immediate ;
slt   : 'SLT' WS+ register ',' WS* register ',' WS* register ;
slti  : 'SLTI' WS+ register ',' WS* register ',' WS* immediate ;
sll   : 'SLL' WS+ register ',' WS* register ',' WS* register ;
slli  : 'SLLI' WS+ register ',' WS* register ',' WS* shamt ;
andInstr : 'AND' WS+ register ',' WS* register ',' WS* register ;
andi  : 'ANDI' WS+ register ',' WS* register ',' WS* immediate ;
orInstr  : 'OR'  WS+ register ',' WS* register ',' WS* register ;
ori    : 'ORI' WS+ register ',' WS* register ',' WS* immediate ;
beq    : 'BEQ' WS+ register ',' WS* register ',' WS* label ;
bne    : 'BNE' WS+ register ',' WS* register ',' WS* label ;
blt    : 'BLT' WS+ register ',' WS* register ',' WS* label ;
bge    : 'BGE' WS+ register ',' WS* register ',' WS* label ;

// Operands

register
    : REGISTER
    ;

immediate
    : DEC_NUMBER
    | HEX_NUMBER
    ;

shamt
    : DEC_NUMBER
    ;

offsetBase
    : immediate '(' register ')'
    ;

labelDef
    : LABEL ':'
    ;

label
    : LABEL
    ;

// Lexer rules

WORD_DIRECTIVE
    : '.word'
    ;

REGISTER
    : 'x' [0-9]+
    ;

LABEL
    : [a-zA-Z_] [a-zA-Z0-9_]*
    ;

HEX_NUMBER
    : '0x' [0-9a-fA-F]+
    ;

DEC_NUMBER
    : [0-9]+
    ;

COMMENT
    : '#' ~[\r\n]* -> skip
    ;

WS
    : [ \t]+ -> skip
    ;

NEWLINE
    : ('\r'? '\n')+
    ;

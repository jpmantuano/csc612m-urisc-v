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
    : WORD_DIRECTIVE wordValue
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

lw    : 'LW' register ',' offsetBase ;
sw    : 'SW' register ',' offsetBase ;
sub   : 'SUB' register ',' register ',' register ;
add   : 'ADD' register ',' register ',' register ;
addi  : 'ADDI' register ',' register ',' immediate ;
slt   : 'SLT' register ',' register ',' register ;
slti  : 'SLTI' register ',' register ',' immediate ;
sll   : 'SLL' register ',' register ',' register ;
slli  : 'SLLI' register ',' register ',' shamt ;
andInstr : 'AND' register ',' register ',' register ;
andi  : 'ANDI' register ',' register ',' immediate ;
orInstr  : 'OR' register ',' register ',' register ;
ori    : 'ORI' register ',' register ',' immediate ;
beq    : 'BEQ' register ',' register ',' label ;
bne    : 'BNE' register ',' register ',' label ;
blt    : 'BLT' register ',' register ',' label ;
bge    : 'BGE' register ',' register ',' label ;

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
    : '.' [wW] [oO] [rR] [dD]
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

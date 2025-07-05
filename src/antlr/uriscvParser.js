// Generated from ./src/grammar/uriscv.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import uriscvListener from './uriscvListener.js';
import uriscvVisitor from './uriscvVisitor.js';

const serializedATN = [4,1,29,234,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,1,0,5,0,58,8,0,10,0,12,0,61,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,3,1,77,8,1,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,101,8,4,1,5,1,5,1,5,1,
5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
13,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,
1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,
17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,
1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,
21,1,21,1,21,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,1,25,1,25,
1,25,1,26,1,26,1,26,1,27,1,27,1,27,0,0,28,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,0,1,1,0,25,26,226,0,59,1,
0,0,0,2,76,1,0,0,0,4,78,1,0,0,0,6,81,1,0,0,0,8,100,1,0,0,0,10,102,1,0,0,
0,12,107,1,0,0,0,14,112,1,0,0,0,16,119,1,0,0,0,18,126,1,0,0,0,20,133,1,0,
0,0,22,140,1,0,0,0,24,147,1,0,0,0,26,154,1,0,0,0,28,161,1,0,0,0,30,168,1,
0,0,0,32,175,1,0,0,0,34,182,1,0,0,0,36,189,1,0,0,0,38,196,1,0,0,0,40,203,
1,0,0,0,42,210,1,0,0,0,44,217,1,0,0,0,46,219,1,0,0,0,48,221,1,0,0,0,50,223,
1,0,0,0,52,228,1,0,0,0,54,231,1,0,0,0,56,58,3,2,1,0,57,56,1,0,0,0,58,61,
1,0,0,0,59,57,1,0,0,0,59,60,1,0,0,0,60,62,1,0,0,0,61,59,1,0,0,0,62,63,5,
0,0,1,63,1,1,0,0,0,64,65,3,4,2,0,65,66,5,29,0,0,66,77,1,0,0,0,67,68,3,8,
4,0,68,69,5,29,0,0,69,77,1,0,0,0,70,71,3,52,26,0,71,72,5,29,0,0,72,77,1,
0,0,0,73,74,5,27,0,0,74,77,5,29,0,0,75,77,5,29,0,0,76,64,1,0,0,0,76,67,1,
0,0,0,76,70,1,0,0,0,76,73,1,0,0,0,76,75,1,0,0,0,77,3,1,0,0,0,78,79,5,22,
0,0,79,80,3,6,3,0,80,5,1,0,0,0,81,82,7,0,0,0,82,7,1,0,0,0,83,101,3,10,5,
0,84,101,3,12,6,0,85,101,3,14,7,0,86,101,3,16,8,0,87,101,3,18,9,0,88,101,
3,20,10,0,89,101,3,22,11,0,90,101,3,24,12,0,91,101,3,26,13,0,92,101,3,28,
14,0,93,101,3,30,15,0,94,101,3,32,16,0,95,101,3,34,17,0,96,101,3,36,18,0,
97,101,3,38,19,0,98,101,3,40,20,0,99,101,3,42,21,0,100,83,1,0,0,0,100,84,
1,0,0,0,100,85,1,0,0,0,100,86,1,0,0,0,100,87,1,0,0,0,100,88,1,0,0,0,100,
89,1,0,0,0,100,90,1,0,0,0,100,91,1,0,0,0,100,92,1,0,0,0,100,93,1,0,0,0,100,
94,1,0,0,0,100,95,1,0,0,0,100,96,1,0,0,0,100,97,1,0,0,0,100,98,1,0,0,0,100,
99,1,0,0,0,101,9,1,0,0,0,102,103,5,1,0,0,103,104,3,44,22,0,104,105,5,2,0,
0,105,106,3,50,25,0,106,11,1,0,0,0,107,108,5,3,0,0,108,109,3,44,22,0,109,
110,5,2,0,0,110,111,3,50,25,0,111,13,1,0,0,0,112,113,5,4,0,0,113,114,3,44,
22,0,114,115,5,2,0,0,115,116,3,44,22,0,116,117,5,2,0,0,117,118,3,44,22,0,
118,15,1,0,0,0,119,120,5,5,0,0,120,121,3,44,22,0,121,122,5,2,0,0,122,123,
3,44,22,0,123,124,5,2,0,0,124,125,3,44,22,0,125,17,1,0,0,0,126,127,5,6,0,
0,127,128,3,44,22,0,128,129,5,2,0,0,129,130,3,44,22,0,130,131,5,2,0,0,131,
132,3,46,23,0,132,19,1,0,0,0,133,134,5,7,0,0,134,135,3,44,22,0,135,136,5,
2,0,0,136,137,3,44,22,0,137,138,5,2,0,0,138,139,3,44,22,0,139,21,1,0,0,0,
140,141,5,8,0,0,141,142,3,44,22,0,142,143,5,2,0,0,143,144,3,44,22,0,144,
145,5,2,0,0,145,146,3,46,23,0,146,23,1,0,0,0,147,148,5,9,0,0,148,149,3,44,
22,0,149,150,5,2,0,0,150,151,3,44,22,0,151,152,5,2,0,0,152,153,3,44,22,0,
153,25,1,0,0,0,154,155,5,10,0,0,155,156,3,44,22,0,156,157,5,2,0,0,157,158,
3,44,22,0,158,159,5,2,0,0,159,160,3,48,24,0,160,27,1,0,0,0,161,162,5,11,
0,0,162,163,3,44,22,0,163,164,5,2,0,0,164,165,3,44,22,0,165,166,5,2,0,0,
166,167,3,44,22,0,167,29,1,0,0,0,168,169,5,12,0,0,169,170,3,44,22,0,170,
171,5,2,0,0,171,172,3,44,22,0,172,173,5,2,0,0,173,174,3,46,23,0,174,31,1,
0,0,0,175,176,5,13,0,0,176,177,3,44,22,0,177,178,5,2,0,0,178,179,3,44,22,
0,179,180,5,2,0,0,180,181,3,44,22,0,181,33,1,0,0,0,182,183,5,14,0,0,183,
184,3,44,22,0,184,185,5,2,0,0,185,186,3,44,22,0,186,187,5,2,0,0,187,188,
3,46,23,0,188,35,1,0,0,0,189,190,5,15,0,0,190,191,3,44,22,0,191,192,5,2,
0,0,192,193,3,44,22,0,193,194,5,2,0,0,194,195,3,54,27,0,195,37,1,0,0,0,196,
197,5,16,0,0,197,198,3,44,22,0,198,199,5,2,0,0,199,200,3,44,22,0,200,201,
5,2,0,0,201,202,3,54,27,0,202,39,1,0,0,0,203,204,5,17,0,0,204,205,3,44,22,
0,205,206,5,2,0,0,206,207,3,44,22,0,207,208,5,2,0,0,208,209,3,54,27,0,209,
41,1,0,0,0,210,211,5,18,0,0,211,212,3,44,22,0,212,213,5,2,0,0,213,214,3,
44,22,0,214,215,5,2,0,0,215,216,3,54,27,0,216,43,1,0,0,0,217,218,5,23,0,
0,218,45,1,0,0,0,219,220,7,0,0,0,220,47,1,0,0,0,221,222,5,26,0,0,222,49,
1,0,0,0,223,224,3,46,23,0,224,225,5,19,0,0,225,226,3,44,22,0,226,227,5,20,
0,0,227,51,1,0,0,0,228,229,5,24,0,0,229,230,5,21,0,0,230,53,1,0,0,0,231,
232,5,24,0,0,232,55,1,0,0,0,3,59,76,100];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class uriscvParser extends antlr4.Parser {

    static grammarFileName = "uriscv.g4";
    static literalNames = [ null, "'LW'", "','", "'SW'", "'SUB'", "'ADD'", 
                            "'ADDI'", "'SLT'", "'SLTI'", "'SLL'", "'SLLI'", 
                            "'AND'", "'ANDI'", "'OR'", "'ORI'", "'BEQ'", 
                            "'BNE'", "'BLT'", "'BGE'", "'('", "')'", "':'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "WORD_DIRECTIVE", 
                             "REGISTER", "LABEL", "HEX_NUMBER", "DEC_NUMBER", 
                             "COMMENT", "WS", "NEWLINE" ];
    static ruleNames = [ "program", "line", "directive", "wordValue", "instruction", 
                         "lw", "sw", "sub", "add", "addi", "slt", "slti", 
                         "sll", "slli", "andInstr", "andi", "orInstr", "ori", 
                         "beq", "bne", "blt", "bge", "register", "immediate", 
                         "shamt", "offsetBase", "labelDef", "label" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = uriscvParser.ruleNames;
        this.literalNames = uriscvParser.literalNames;
        this.symbolicNames = uriscvParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, uriscvParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 692584442) !== 0)) {
	            this.state = 56;
	            this.line();
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 62;
	        this.match(uriscvParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, uriscvParser.RULE_line);
	    try {
	        this.state = 76;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.directive();
	            this.state = 65;
	            this.match(uriscvParser.NEWLINE);
	            break;
	        case 1:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.instruction();
	            this.state = 68;
	            this.match(uriscvParser.NEWLINE);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 70;
	            this.labelDef();
	            this.state = 71;
	            this.match(uriscvParser.NEWLINE);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 73;
	            this.match(uriscvParser.COMMENT);
	            this.state = 74;
	            this.match(uriscvParser.NEWLINE);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 75;
	            this.match(uriscvParser.NEWLINE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	directive() {
	    let localctx = new DirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, uriscvParser.RULE_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(uriscvParser.WORD_DIRECTIVE);
	        this.state = 79;
	        this.wordValue();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wordValue() {
	    let localctx = new WordValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, uriscvParser.RULE_wordValue);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        _la = this._input.LA(1);
	        if(!(_la===25 || _la===26)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, uriscvParser.RULE_instruction);
	    try {
	        this.state = 100;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 83;
	            this.lw();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 84;
	            this.sw();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 85;
	            this.sub();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 86;
	            this.add();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 87;
	            this.addi();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 88;
	            this.slt();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 89;
	            this.slti();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 90;
	            this.sll();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 91;
	            this.slli();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 92;
	            this.andInstr();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 93;
	            this.andi();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 94;
	            this.orInstr();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 95;
	            this.ori();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 96;
	            this.beq();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 97;
	            this.bne();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 98;
	            this.blt();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 99;
	            this.bge();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lw() {
	    let localctx = new LwContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, uriscvParser.RULE_lw);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(uriscvParser.T__0);
	        this.state = 103;
	        this.register();
	        this.state = 104;
	        this.match(uriscvParser.T__1);
	        this.state = 105;
	        this.offsetBase();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sw() {
	    let localctx = new SwContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, uriscvParser.RULE_sw);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(uriscvParser.T__2);
	        this.state = 108;
	        this.register();
	        this.state = 109;
	        this.match(uriscvParser.T__1);
	        this.state = 110;
	        this.offsetBase();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sub() {
	    let localctx = new SubContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, uriscvParser.RULE_sub);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(uriscvParser.T__3);
	        this.state = 113;
	        this.register();
	        this.state = 114;
	        this.match(uriscvParser.T__1);
	        this.state = 115;
	        this.register();
	        this.state = 116;
	        this.match(uriscvParser.T__1);
	        this.state = 117;
	        this.register();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	add() {
	    let localctx = new AddContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, uriscvParser.RULE_add);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(uriscvParser.T__4);
	        this.state = 120;
	        this.register();
	        this.state = 121;
	        this.match(uriscvParser.T__1);
	        this.state = 122;
	        this.register();
	        this.state = 123;
	        this.match(uriscvParser.T__1);
	        this.state = 124;
	        this.register();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	addi() {
	    let localctx = new AddiContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, uriscvParser.RULE_addi);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(uriscvParser.T__5);
	        this.state = 127;
	        this.register();
	        this.state = 128;
	        this.match(uriscvParser.T__1);
	        this.state = 129;
	        this.register();
	        this.state = 130;
	        this.match(uriscvParser.T__1);
	        this.state = 131;
	        this.immediate();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	slt() {
	    let localctx = new SltContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, uriscvParser.RULE_slt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this.match(uriscvParser.T__6);
	        this.state = 134;
	        this.register();
	        this.state = 135;
	        this.match(uriscvParser.T__1);
	        this.state = 136;
	        this.register();
	        this.state = 137;
	        this.match(uriscvParser.T__1);
	        this.state = 138;
	        this.register();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	slti() {
	    let localctx = new SltiContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, uriscvParser.RULE_slti);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.match(uriscvParser.T__7);
	        this.state = 141;
	        this.register();
	        this.state = 142;
	        this.match(uriscvParser.T__1);
	        this.state = 143;
	        this.register();
	        this.state = 144;
	        this.match(uriscvParser.T__1);
	        this.state = 145;
	        this.immediate();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sll() {
	    let localctx = new SllContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, uriscvParser.RULE_sll);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.match(uriscvParser.T__8);
	        this.state = 148;
	        this.register();
	        this.state = 149;
	        this.match(uriscvParser.T__1);
	        this.state = 150;
	        this.register();
	        this.state = 151;
	        this.match(uriscvParser.T__1);
	        this.state = 152;
	        this.register();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	slli() {
	    let localctx = new SlliContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, uriscvParser.RULE_slli);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(uriscvParser.T__9);
	        this.state = 155;
	        this.register();
	        this.state = 156;
	        this.match(uriscvParser.T__1);
	        this.state = 157;
	        this.register();
	        this.state = 158;
	        this.match(uriscvParser.T__1);
	        this.state = 159;
	        this.shamt();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	andInstr() {
	    let localctx = new AndInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, uriscvParser.RULE_andInstr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.match(uriscvParser.T__10);
	        this.state = 162;
	        this.register();
	        this.state = 163;
	        this.match(uriscvParser.T__1);
	        this.state = 164;
	        this.register();
	        this.state = 165;
	        this.match(uriscvParser.T__1);
	        this.state = 166;
	        this.register();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	andi() {
	    let localctx = new AndiContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, uriscvParser.RULE_andi);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(uriscvParser.T__11);
	        this.state = 169;
	        this.register();
	        this.state = 170;
	        this.match(uriscvParser.T__1);
	        this.state = 171;
	        this.register();
	        this.state = 172;
	        this.match(uriscvParser.T__1);
	        this.state = 173;
	        this.immediate();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	orInstr() {
	    let localctx = new OrInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, uriscvParser.RULE_orInstr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.match(uriscvParser.T__12);
	        this.state = 176;
	        this.register();
	        this.state = 177;
	        this.match(uriscvParser.T__1);
	        this.state = 178;
	        this.register();
	        this.state = 179;
	        this.match(uriscvParser.T__1);
	        this.state = 180;
	        this.register();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ori() {
	    let localctx = new OriContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, uriscvParser.RULE_ori);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.match(uriscvParser.T__13);
	        this.state = 183;
	        this.register();
	        this.state = 184;
	        this.match(uriscvParser.T__1);
	        this.state = 185;
	        this.register();
	        this.state = 186;
	        this.match(uriscvParser.T__1);
	        this.state = 187;
	        this.immediate();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	beq() {
	    let localctx = new BeqContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, uriscvParser.RULE_beq);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.match(uriscvParser.T__14);
	        this.state = 190;
	        this.register();
	        this.state = 191;
	        this.match(uriscvParser.T__1);
	        this.state = 192;
	        this.register();
	        this.state = 193;
	        this.match(uriscvParser.T__1);
	        this.state = 194;
	        this.label();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bne() {
	    let localctx = new BneContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, uriscvParser.RULE_bne);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this.match(uriscvParser.T__15);
	        this.state = 197;
	        this.register();
	        this.state = 198;
	        this.match(uriscvParser.T__1);
	        this.state = 199;
	        this.register();
	        this.state = 200;
	        this.match(uriscvParser.T__1);
	        this.state = 201;
	        this.label();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	blt() {
	    let localctx = new BltContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, uriscvParser.RULE_blt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.match(uriscvParser.T__16);
	        this.state = 204;
	        this.register();
	        this.state = 205;
	        this.match(uriscvParser.T__1);
	        this.state = 206;
	        this.register();
	        this.state = 207;
	        this.match(uriscvParser.T__1);
	        this.state = 208;
	        this.label();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bge() {
	    let localctx = new BgeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, uriscvParser.RULE_bge);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.match(uriscvParser.T__17);
	        this.state = 211;
	        this.register();
	        this.state = 212;
	        this.match(uriscvParser.T__1);
	        this.state = 213;
	        this.register();
	        this.state = 214;
	        this.match(uriscvParser.T__1);
	        this.state = 215;
	        this.label();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	register() {
	    let localctx = new RegisterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, uriscvParser.RULE_register);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.match(uriscvParser.REGISTER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	immediate() {
	    let localctx = new ImmediateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, uriscvParser.RULE_immediate);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        _la = this._input.LA(1);
	        if(!(_la===25 || _la===26)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	shamt() {
	    let localctx = new ShamtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, uriscvParser.RULE_shamt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        this.match(uriscvParser.DEC_NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	offsetBase() {
	    let localctx = new OffsetBaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, uriscvParser.RULE_offsetBase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.immediate();
	        this.state = 224;
	        this.match(uriscvParser.T__18);
	        this.state = 225;
	        this.register();
	        this.state = 226;
	        this.match(uriscvParser.T__19);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	labelDef() {
	    let localctx = new LabelDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, uriscvParser.RULE_labelDef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.match(uriscvParser.LABEL);
	        this.state = 229;
	        this.match(uriscvParser.T__20);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, uriscvParser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(uriscvParser.LABEL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

uriscvParser.EOF = antlr4.Token.EOF;
uriscvParser.T__0 = 1;
uriscvParser.T__1 = 2;
uriscvParser.T__2 = 3;
uriscvParser.T__3 = 4;
uriscvParser.T__4 = 5;
uriscvParser.T__5 = 6;
uriscvParser.T__6 = 7;
uriscvParser.T__7 = 8;
uriscvParser.T__8 = 9;
uriscvParser.T__9 = 10;
uriscvParser.T__10 = 11;
uriscvParser.T__11 = 12;
uriscvParser.T__12 = 13;
uriscvParser.T__13 = 14;
uriscvParser.T__14 = 15;
uriscvParser.T__15 = 16;
uriscvParser.T__16 = 17;
uriscvParser.T__17 = 18;
uriscvParser.T__18 = 19;
uriscvParser.T__19 = 20;
uriscvParser.T__20 = 21;
uriscvParser.WORD_DIRECTIVE = 22;
uriscvParser.REGISTER = 23;
uriscvParser.LABEL = 24;
uriscvParser.HEX_NUMBER = 25;
uriscvParser.DEC_NUMBER = 26;
uriscvParser.COMMENT = 27;
uriscvParser.WS = 28;
uriscvParser.NEWLINE = 29;

uriscvParser.RULE_program = 0;
uriscvParser.RULE_line = 1;
uriscvParser.RULE_directive = 2;
uriscvParser.RULE_wordValue = 3;
uriscvParser.RULE_instruction = 4;
uriscvParser.RULE_lw = 5;
uriscvParser.RULE_sw = 6;
uriscvParser.RULE_sub = 7;
uriscvParser.RULE_add = 8;
uriscvParser.RULE_addi = 9;
uriscvParser.RULE_slt = 10;
uriscvParser.RULE_slti = 11;
uriscvParser.RULE_sll = 12;
uriscvParser.RULE_slli = 13;
uriscvParser.RULE_andInstr = 14;
uriscvParser.RULE_andi = 15;
uriscvParser.RULE_orInstr = 16;
uriscvParser.RULE_ori = 17;
uriscvParser.RULE_beq = 18;
uriscvParser.RULE_bne = 19;
uriscvParser.RULE_blt = 20;
uriscvParser.RULE_bge = 21;
uriscvParser.RULE_register = 22;
uriscvParser.RULE_immediate = 23;
uriscvParser.RULE_shamt = 24;
uriscvParser.RULE_offsetBase = 25;
uriscvParser.RULE_labelDef = 26;
uriscvParser.RULE_label = 27;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_program;
    }

	EOF() {
	    return this.getToken(uriscvParser.EOF, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_line;
    }

	directive() {
	    return this.getTypedRuleContext(DirectiveContext,0);
	};

	NEWLINE() {
	    return this.getToken(uriscvParser.NEWLINE, 0);
	};

	instruction() {
	    return this.getTypedRuleContext(InstructionContext,0);
	};

	labelDef() {
	    return this.getTypedRuleContext(LabelDefContext,0);
	};

	COMMENT() {
	    return this.getToken(uriscvParser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitLine(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_directive;
    }

	WORD_DIRECTIVE() {
	    return this.getToken(uriscvParser.WORD_DIRECTIVE, 0);
	};

	wordValue() {
	    return this.getTypedRuleContext(WordValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitDirective(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitDirective(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WordValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_wordValue;
    }

	HEX_NUMBER() {
	    return this.getToken(uriscvParser.HEX_NUMBER, 0);
	};

	DEC_NUMBER() {
	    return this.getToken(uriscvParser.DEC_NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterWordValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitWordValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitWordValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_instruction;
    }

	lw() {
	    return this.getTypedRuleContext(LwContext,0);
	};

	sw() {
	    return this.getTypedRuleContext(SwContext,0);
	};

	sub() {
	    return this.getTypedRuleContext(SubContext,0);
	};

	add() {
	    return this.getTypedRuleContext(AddContext,0);
	};

	addi() {
	    return this.getTypedRuleContext(AddiContext,0);
	};

	slt() {
	    return this.getTypedRuleContext(SltContext,0);
	};

	slti() {
	    return this.getTypedRuleContext(SltiContext,0);
	};

	sll() {
	    return this.getTypedRuleContext(SllContext,0);
	};

	slli() {
	    return this.getTypedRuleContext(SlliContext,0);
	};

	andInstr() {
	    return this.getTypedRuleContext(AndInstrContext,0);
	};

	andi() {
	    return this.getTypedRuleContext(AndiContext,0);
	};

	orInstr() {
	    return this.getTypedRuleContext(OrInstrContext,0);
	};

	ori() {
	    return this.getTypedRuleContext(OriContext,0);
	};

	beq() {
	    return this.getTypedRuleContext(BeqContext,0);
	};

	bne() {
	    return this.getTypedRuleContext(BneContext,0);
	};

	blt() {
	    return this.getTypedRuleContext(BltContext,0);
	};

	bge() {
	    return this.getTypedRuleContext(BgeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LwContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_lw;
    }

	register() {
	    return this.getTypedRuleContext(RegisterContext,0);
	};

	offsetBase() {
	    return this.getTypedRuleContext(OffsetBaseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterLw(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitLw(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitLw(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SwContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_sw;
    }

	register() {
	    return this.getTypedRuleContext(RegisterContext,0);
	};

	offsetBase() {
	    return this.getTypedRuleContext(OffsetBaseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterSw(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitSw(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitSw(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SubContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_sub;
    }

	register = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RegisterContext);
	    } else {
	        return this.getTypedRuleContext(RegisterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitSub(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AddContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_add;
    }

	register = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RegisterContext);
	    } else {
	        return this.getTypedRuleContext(RegisterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterAdd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitAdd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitAdd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AddiContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_addi;
    }

	register = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RegisterContext);
	    } else {
	        return this.getTypedRuleContext(RegisterContext,i);
	    }
	};

	immediate() {
	    return this.getTypedRuleContext(ImmediateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterAddi(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitAddi(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitAddi(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SltContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_slt;
    }

	register = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RegisterContext);
	    } else {
	        return this.getTypedRuleContext(RegisterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterSlt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitSlt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitSlt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SltiContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_slti;
    }

	register = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RegisterContext);
	    } else {
	        return this.getTypedRuleContext(RegisterContext,i);
	    }
	};

	immediate() {
	    return this.getTypedRuleContext(ImmediateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterSlti(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitSlti(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitSlti(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SllContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_sll;
    }

	register = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RegisterContext);
	    } else {
	        return this.getTypedRuleContext(RegisterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterSll(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitSll(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitSll(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SlliContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_slli;
    }

	register = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RegisterContext);
	    } else {
	        return this.getTypedRuleContext(RegisterContext,i);
	    }
	};

	shamt() {
	    return this.getTypedRuleContext(ShamtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterSlli(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitSlli(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitSlli(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AndInstrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_andInstr;
    }

	register = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RegisterContext);
	    } else {
	        return this.getTypedRuleContext(RegisterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterAndInstr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitAndInstr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitAndInstr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AndiContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_andi;
    }

	register = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RegisterContext);
	    } else {
	        return this.getTypedRuleContext(RegisterContext,i);
	    }
	};

	immediate() {
	    return this.getTypedRuleContext(ImmediateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterAndi(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitAndi(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitAndi(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OrInstrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_orInstr;
    }

	register = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RegisterContext);
	    } else {
	        return this.getTypedRuleContext(RegisterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterOrInstr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitOrInstr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitOrInstr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OriContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_ori;
    }

	register = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RegisterContext);
	    } else {
	        return this.getTypedRuleContext(RegisterContext,i);
	    }
	};

	immediate() {
	    return this.getTypedRuleContext(ImmediateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterOri(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitOri(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitOri(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BeqContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_beq;
    }

	register = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RegisterContext);
	    } else {
	        return this.getTypedRuleContext(RegisterContext,i);
	    }
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterBeq(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitBeq(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitBeq(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BneContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_bne;
    }

	register = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RegisterContext);
	    } else {
	        return this.getTypedRuleContext(RegisterContext,i);
	    }
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterBne(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitBne(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitBne(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BltContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_blt;
    }

	register = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RegisterContext);
	    } else {
	        return this.getTypedRuleContext(RegisterContext,i);
	    }
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterBlt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitBlt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitBlt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BgeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_bge;
    }

	register = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RegisterContext);
	    } else {
	        return this.getTypedRuleContext(RegisterContext,i);
	    }
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterBge(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitBge(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitBge(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RegisterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_register;
    }

	REGISTER() {
	    return this.getToken(uriscvParser.REGISTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterRegister(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitRegister(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitRegister(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImmediateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_immediate;
    }

	DEC_NUMBER() {
	    return this.getToken(uriscvParser.DEC_NUMBER, 0);
	};

	HEX_NUMBER() {
	    return this.getToken(uriscvParser.HEX_NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterImmediate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitImmediate(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitImmediate(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ShamtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_shamt;
    }

	DEC_NUMBER() {
	    return this.getToken(uriscvParser.DEC_NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterShamt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitShamt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitShamt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OffsetBaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_offsetBase;
    }

	immediate() {
	    return this.getTypedRuleContext(ImmediateContext,0);
	};

	register() {
	    return this.getTypedRuleContext(RegisterContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterOffsetBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitOffsetBase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitOffsetBase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LabelDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_labelDef;
    }

	LABEL() {
	    return this.getToken(uriscvParser.LABEL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterLabelDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitLabelDef(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitLabelDef(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = uriscvParser.RULE_label;
    }

	LABEL() {
	    return this.getToken(uriscvParser.LABEL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof uriscvListener ) {
	        listener.exitLabel(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof uriscvVisitor ) {
	        return visitor.visitLabel(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




uriscvParser.ProgramContext = ProgramContext; 
uriscvParser.LineContext = LineContext; 
uriscvParser.DirectiveContext = DirectiveContext; 
uriscvParser.WordValueContext = WordValueContext; 
uriscvParser.InstructionContext = InstructionContext; 
uriscvParser.LwContext = LwContext; 
uriscvParser.SwContext = SwContext; 
uriscvParser.SubContext = SubContext; 
uriscvParser.AddContext = AddContext; 
uriscvParser.AddiContext = AddiContext; 
uriscvParser.SltContext = SltContext; 
uriscvParser.SltiContext = SltiContext; 
uriscvParser.SllContext = SllContext; 
uriscvParser.SlliContext = SlliContext; 
uriscvParser.AndInstrContext = AndInstrContext; 
uriscvParser.AndiContext = AndiContext; 
uriscvParser.OrInstrContext = OrInstrContext; 
uriscvParser.OriContext = OriContext; 
uriscvParser.BeqContext = BeqContext; 
uriscvParser.BneContext = BneContext; 
uriscvParser.BltContext = BltContext; 
uriscvParser.BgeContext = BgeContext; 
uriscvParser.RegisterContext = RegisterContext; 
uriscvParser.ImmediateContext = ImmediateContext; 
uriscvParser.ShamtContext = ShamtContext; 
uriscvParser.OffsetBaseContext = OffsetBaseContext; 
uriscvParser.LabelDefContext = LabelDefContext; 
uriscvParser.LabelContext = LabelContext; 

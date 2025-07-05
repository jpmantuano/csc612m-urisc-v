// Generated from C:/Development/Repository/urisc-v/src/grammar/uriscv.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import uriscvListener from './uriscvListener.js';
import uriscvVisitor from './uriscvVisitor.js';

const serializedATN = [4,1,29,516,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,1,0,5,0,58,8,0,10,0,12,0,61,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,3,1,77,8,1,1,2,1,2,4,2,81,8,2,11,2,12,2,82,1,2,1,2,1,
3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
4,3,4,106,8,4,1,5,1,5,4,5,110,8,5,11,5,12,5,111,1,5,1,5,1,5,5,5,117,8,5,
10,5,12,5,120,9,5,1,5,1,5,1,6,1,6,4,6,126,8,6,11,6,12,6,127,1,6,1,6,1,6,
5,6,133,8,6,10,6,12,6,136,9,6,1,6,1,6,1,7,1,7,4,7,142,8,7,11,7,12,7,143,
1,7,1,7,1,7,5,7,149,8,7,10,7,12,7,152,9,7,1,7,1,7,1,7,5,7,157,8,7,10,7,12,
7,160,9,7,1,7,1,7,1,8,1,8,4,8,166,8,8,11,8,12,8,167,1,8,1,8,1,8,5,8,173,
8,8,10,8,12,8,176,9,8,1,8,1,8,1,8,5,8,181,8,8,10,8,12,8,184,9,8,1,8,1,8,
1,9,1,9,4,9,190,8,9,11,9,12,9,191,1,9,1,9,1,9,5,9,197,8,9,10,9,12,9,200,
9,9,1,9,1,9,1,9,5,9,205,8,9,10,9,12,9,208,9,9,1,9,1,9,1,10,1,10,4,10,214,
8,10,11,10,12,10,215,1,10,1,10,1,10,5,10,221,8,10,10,10,12,10,224,9,10,1,
10,1,10,1,10,5,10,229,8,10,10,10,12,10,232,9,10,1,10,1,10,1,11,1,11,4,11,
238,8,11,11,11,12,11,239,1,11,1,11,1,11,5,11,245,8,11,10,11,12,11,248,9,
11,1,11,1,11,1,11,5,11,253,8,11,10,11,12,11,256,9,11,1,11,1,11,1,12,1,12,
4,12,262,8,12,11,12,12,12,263,1,12,1,12,1,12,5,12,269,8,12,10,12,12,12,272,
9,12,1,12,1,12,1,12,5,12,277,8,12,10,12,12,12,280,9,12,1,12,1,12,1,13,1,
13,4,13,286,8,13,11,13,12,13,287,1,13,1,13,1,13,5,13,293,8,13,10,13,12,13,
296,9,13,1,13,1,13,1,13,5,13,301,8,13,10,13,12,13,304,9,13,1,13,1,13,1,14,
1,14,4,14,310,8,14,11,14,12,14,311,1,14,1,14,1,14,5,14,317,8,14,10,14,12,
14,320,9,14,1,14,1,14,1,14,5,14,325,8,14,10,14,12,14,328,9,14,1,14,1,14,
1,15,1,15,4,15,334,8,15,11,15,12,15,335,1,15,1,15,1,15,5,15,341,8,15,10,
15,12,15,344,9,15,1,15,1,15,1,15,5,15,349,8,15,10,15,12,15,352,9,15,1,15,
1,15,1,16,1,16,4,16,358,8,16,11,16,12,16,359,1,16,1,16,1,16,5,16,365,8,16,
10,16,12,16,368,9,16,1,16,1,16,1,16,5,16,373,8,16,10,16,12,16,376,9,16,1,
16,1,16,1,17,1,17,4,17,382,8,17,11,17,12,17,383,1,17,1,17,1,17,5,17,389,
8,17,10,17,12,17,392,9,17,1,17,1,17,1,17,5,17,397,8,17,10,17,12,17,400,9,
17,1,17,1,17,1,18,1,18,4,18,406,8,18,11,18,12,18,407,1,18,1,18,1,18,5,18,
413,8,18,10,18,12,18,416,9,18,1,18,1,18,1,18,5,18,421,8,18,10,18,12,18,424,
9,18,1,18,1,18,1,19,1,19,4,19,430,8,19,11,19,12,19,431,1,19,1,19,1,19,5,
19,437,8,19,10,19,12,19,440,9,19,1,19,1,19,1,19,5,19,445,8,19,10,19,12,19,
448,9,19,1,19,1,19,1,20,1,20,4,20,454,8,20,11,20,12,20,455,1,20,1,20,1,20,
5,20,461,8,20,10,20,12,20,464,9,20,1,20,1,20,1,20,5,20,469,8,20,10,20,12,
20,472,9,20,1,20,1,20,1,21,1,21,4,21,478,8,21,11,21,12,21,479,1,21,1,21,
1,21,5,21,485,8,21,10,21,12,21,488,9,21,1,21,1,21,1,21,5,21,493,8,21,10,
21,12,21,496,9,21,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,1,25,
1,25,1,25,1,26,1,26,1,26,1,27,1,27,1,27,0,0,28,0,2,4,6,8,10,12,14,16,18,
20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,0,1,1,0,25,26,558,
0,59,1,0,0,0,2,76,1,0,0,0,4,78,1,0,0,0,6,86,1,0,0,0,8,105,1,0,0,0,10,107,
1,0,0,0,12,123,1,0,0,0,14,139,1,0,0,0,16,163,1,0,0,0,18,187,1,0,0,0,20,211,
1,0,0,0,22,235,1,0,0,0,24,259,1,0,0,0,26,283,1,0,0,0,28,307,1,0,0,0,30,331,
1,0,0,0,32,355,1,0,0,0,34,379,1,0,0,0,36,403,1,0,0,0,38,427,1,0,0,0,40,451,
1,0,0,0,42,475,1,0,0,0,44,499,1,0,0,0,46,501,1,0,0,0,48,503,1,0,0,0,50,505,
1,0,0,0,52,510,1,0,0,0,54,513,1,0,0,0,56,58,3,2,1,0,57,56,1,0,0,0,58,61,
1,0,0,0,59,57,1,0,0,0,59,60,1,0,0,0,60,62,1,0,0,0,61,59,1,0,0,0,62,63,5,
0,0,1,63,1,1,0,0,0,64,65,3,4,2,0,65,66,5,29,0,0,66,77,1,0,0,0,67,68,3,8,
4,0,68,69,5,29,0,0,69,77,1,0,0,0,70,71,3,52,26,0,71,72,5,29,0,0,72,77,1,
0,0,0,73,74,5,27,0,0,74,77,5,29,0,0,75,77,5,29,0,0,76,64,1,0,0,0,76,67,1,
0,0,0,76,70,1,0,0,0,76,73,1,0,0,0,76,75,1,0,0,0,77,3,1,0,0,0,78,80,5,22,
0,0,79,81,5,28,0,0,80,79,1,0,0,0,81,82,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,
0,83,84,1,0,0,0,84,85,3,6,3,0,85,5,1,0,0,0,86,87,7,0,0,0,87,7,1,0,0,0,88,
106,3,10,5,0,89,106,3,12,6,0,90,106,3,14,7,0,91,106,3,16,8,0,92,106,3,18,
9,0,93,106,3,20,10,0,94,106,3,22,11,0,95,106,3,24,12,0,96,106,3,26,13,0,
97,106,3,28,14,0,98,106,3,30,15,0,99,106,3,32,16,0,100,106,3,34,17,0,101,
106,3,36,18,0,102,106,3,38,19,0,103,106,3,40,20,0,104,106,3,42,21,0,105,
88,1,0,0,0,105,89,1,0,0,0,105,90,1,0,0,0,105,91,1,0,0,0,105,92,1,0,0,0,105,
93,1,0,0,0,105,94,1,0,0,0,105,95,1,0,0,0,105,96,1,0,0,0,105,97,1,0,0,0,105,
98,1,0,0,0,105,99,1,0,0,0,105,100,1,0,0,0,105,101,1,0,0,0,105,102,1,0,0,
0,105,103,1,0,0,0,105,104,1,0,0,0,106,9,1,0,0,0,107,109,5,1,0,0,108,110,
5,28,0,0,109,108,1,0,0,0,110,111,1,0,0,0,111,109,1,0,0,0,111,112,1,0,0,0,
112,113,1,0,0,0,113,114,3,44,22,0,114,118,5,2,0,0,115,117,5,28,0,0,116,115,
1,0,0,0,117,120,1,0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,121,1,0,0,0,
120,118,1,0,0,0,121,122,3,50,25,0,122,11,1,0,0,0,123,125,5,3,0,0,124,126,
5,28,0,0,125,124,1,0,0,0,126,127,1,0,0,0,127,125,1,0,0,0,127,128,1,0,0,0,
128,129,1,0,0,0,129,130,3,44,22,0,130,134,5,2,0,0,131,133,5,28,0,0,132,131,
1,0,0,0,133,136,1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,137,1,0,0,0,
136,134,1,0,0,0,137,138,3,50,25,0,138,13,1,0,0,0,139,141,5,4,0,0,140,142,
5,28,0,0,141,140,1,0,0,0,142,143,1,0,0,0,143,141,1,0,0,0,143,144,1,0,0,0,
144,145,1,0,0,0,145,146,3,44,22,0,146,150,5,2,0,0,147,149,5,28,0,0,148,147,
1,0,0,0,149,152,1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,153,1,0,0,0,
152,150,1,0,0,0,153,154,3,44,22,0,154,158,5,2,0,0,155,157,5,28,0,0,156,155,
1,0,0,0,157,160,1,0,0,0,158,156,1,0,0,0,158,159,1,0,0,0,159,161,1,0,0,0,
160,158,1,0,0,0,161,162,3,44,22,0,162,15,1,0,0,0,163,165,5,5,0,0,164,166,
5,28,0,0,165,164,1,0,0,0,166,167,1,0,0,0,167,165,1,0,0,0,167,168,1,0,0,0,
168,169,1,0,0,0,169,170,3,44,22,0,170,174,5,2,0,0,171,173,5,28,0,0,172,171,
1,0,0,0,173,176,1,0,0,0,174,172,1,0,0,0,174,175,1,0,0,0,175,177,1,0,0,0,
176,174,1,0,0,0,177,178,3,44,22,0,178,182,5,2,0,0,179,181,5,28,0,0,180,179,
1,0,0,0,181,184,1,0,0,0,182,180,1,0,0,0,182,183,1,0,0,0,183,185,1,0,0,0,
184,182,1,0,0,0,185,186,3,44,22,0,186,17,1,0,0,0,187,189,5,6,0,0,188,190,
5,28,0,0,189,188,1,0,0,0,190,191,1,0,0,0,191,189,1,0,0,0,191,192,1,0,0,0,
192,193,1,0,0,0,193,194,3,44,22,0,194,198,5,2,0,0,195,197,5,28,0,0,196,195,
1,0,0,0,197,200,1,0,0,0,198,196,1,0,0,0,198,199,1,0,0,0,199,201,1,0,0,0,
200,198,1,0,0,0,201,202,3,44,22,0,202,206,5,2,0,0,203,205,5,28,0,0,204,203,
1,0,0,0,205,208,1,0,0,0,206,204,1,0,0,0,206,207,1,0,0,0,207,209,1,0,0,0,
208,206,1,0,0,0,209,210,3,46,23,0,210,19,1,0,0,0,211,213,5,7,0,0,212,214,
5,28,0,0,213,212,1,0,0,0,214,215,1,0,0,0,215,213,1,0,0,0,215,216,1,0,0,0,
216,217,1,0,0,0,217,218,3,44,22,0,218,222,5,2,0,0,219,221,5,28,0,0,220,219,
1,0,0,0,221,224,1,0,0,0,222,220,1,0,0,0,222,223,1,0,0,0,223,225,1,0,0,0,
224,222,1,0,0,0,225,226,3,44,22,0,226,230,5,2,0,0,227,229,5,28,0,0,228,227,
1,0,0,0,229,232,1,0,0,0,230,228,1,0,0,0,230,231,1,0,0,0,231,233,1,0,0,0,
232,230,1,0,0,0,233,234,3,44,22,0,234,21,1,0,0,0,235,237,5,8,0,0,236,238,
5,28,0,0,237,236,1,0,0,0,238,239,1,0,0,0,239,237,1,0,0,0,239,240,1,0,0,0,
240,241,1,0,0,0,241,242,3,44,22,0,242,246,5,2,0,0,243,245,5,28,0,0,244,243,
1,0,0,0,245,248,1,0,0,0,246,244,1,0,0,0,246,247,1,0,0,0,247,249,1,0,0,0,
248,246,1,0,0,0,249,250,3,44,22,0,250,254,5,2,0,0,251,253,5,28,0,0,252,251,
1,0,0,0,253,256,1,0,0,0,254,252,1,0,0,0,254,255,1,0,0,0,255,257,1,0,0,0,
256,254,1,0,0,0,257,258,3,46,23,0,258,23,1,0,0,0,259,261,5,9,0,0,260,262,
5,28,0,0,261,260,1,0,0,0,262,263,1,0,0,0,263,261,1,0,0,0,263,264,1,0,0,0,
264,265,1,0,0,0,265,266,3,44,22,0,266,270,5,2,0,0,267,269,5,28,0,0,268,267,
1,0,0,0,269,272,1,0,0,0,270,268,1,0,0,0,270,271,1,0,0,0,271,273,1,0,0,0,
272,270,1,0,0,0,273,274,3,44,22,0,274,278,5,2,0,0,275,277,5,28,0,0,276,275,
1,0,0,0,277,280,1,0,0,0,278,276,1,0,0,0,278,279,1,0,0,0,279,281,1,0,0,0,
280,278,1,0,0,0,281,282,3,44,22,0,282,25,1,0,0,0,283,285,5,10,0,0,284,286,
5,28,0,0,285,284,1,0,0,0,286,287,1,0,0,0,287,285,1,0,0,0,287,288,1,0,0,0,
288,289,1,0,0,0,289,290,3,44,22,0,290,294,5,2,0,0,291,293,5,28,0,0,292,291,
1,0,0,0,293,296,1,0,0,0,294,292,1,0,0,0,294,295,1,0,0,0,295,297,1,0,0,0,
296,294,1,0,0,0,297,298,3,44,22,0,298,302,5,2,0,0,299,301,5,28,0,0,300,299,
1,0,0,0,301,304,1,0,0,0,302,300,1,0,0,0,302,303,1,0,0,0,303,305,1,0,0,0,
304,302,1,0,0,0,305,306,3,48,24,0,306,27,1,0,0,0,307,309,5,11,0,0,308,310,
5,28,0,0,309,308,1,0,0,0,310,311,1,0,0,0,311,309,1,0,0,0,311,312,1,0,0,0,
312,313,1,0,0,0,313,314,3,44,22,0,314,318,5,2,0,0,315,317,5,28,0,0,316,315,
1,0,0,0,317,320,1,0,0,0,318,316,1,0,0,0,318,319,1,0,0,0,319,321,1,0,0,0,
320,318,1,0,0,0,321,322,3,44,22,0,322,326,5,2,0,0,323,325,5,28,0,0,324,323,
1,0,0,0,325,328,1,0,0,0,326,324,1,0,0,0,326,327,1,0,0,0,327,329,1,0,0,0,
328,326,1,0,0,0,329,330,3,44,22,0,330,29,1,0,0,0,331,333,5,12,0,0,332,334,
5,28,0,0,333,332,1,0,0,0,334,335,1,0,0,0,335,333,1,0,0,0,335,336,1,0,0,0,
336,337,1,0,0,0,337,338,3,44,22,0,338,342,5,2,0,0,339,341,5,28,0,0,340,339,
1,0,0,0,341,344,1,0,0,0,342,340,1,0,0,0,342,343,1,0,0,0,343,345,1,0,0,0,
344,342,1,0,0,0,345,346,3,44,22,0,346,350,5,2,0,0,347,349,5,28,0,0,348,347,
1,0,0,0,349,352,1,0,0,0,350,348,1,0,0,0,350,351,1,0,0,0,351,353,1,0,0,0,
352,350,1,0,0,0,353,354,3,46,23,0,354,31,1,0,0,0,355,357,5,13,0,0,356,358,
5,28,0,0,357,356,1,0,0,0,358,359,1,0,0,0,359,357,1,0,0,0,359,360,1,0,0,0,
360,361,1,0,0,0,361,362,3,44,22,0,362,366,5,2,0,0,363,365,5,28,0,0,364,363,
1,0,0,0,365,368,1,0,0,0,366,364,1,0,0,0,366,367,1,0,0,0,367,369,1,0,0,0,
368,366,1,0,0,0,369,370,3,44,22,0,370,374,5,2,0,0,371,373,5,28,0,0,372,371,
1,0,0,0,373,376,1,0,0,0,374,372,1,0,0,0,374,375,1,0,0,0,375,377,1,0,0,0,
376,374,1,0,0,0,377,378,3,44,22,0,378,33,1,0,0,0,379,381,5,14,0,0,380,382,
5,28,0,0,381,380,1,0,0,0,382,383,1,0,0,0,383,381,1,0,0,0,383,384,1,0,0,0,
384,385,1,0,0,0,385,386,3,44,22,0,386,390,5,2,0,0,387,389,5,28,0,0,388,387,
1,0,0,0,389,392,1,0,0,0,390,388,1,0,0,0,390,391,1,0,0,0,391,393,1,0,0,0,
392,390,1,0,0,0,393,394,3,44,22,0,394,398,5,2,0,0,395,397,5,28,0,0,396,395,
1,0,0,0,397,400,1,0,0,0,398,396,1,0,0,0,398,399,1,0,0,0,399,401,1,0,0,0,
400,398,1,0,0,0,401,402,3,46,23,0,402,35,1,0,0,0,403,405,5,15,0,0,404,406,
5,28,0,0,405,404,1,0,0,0,406,407,1,0,0,0,407,405,1,0,0,0,407,408,1,0,0,0,
408,409,1,0,0,0,409,410,3,44,22,0,410,414,5,2,0,0,411,413,5,28,0,0,412,411,
1,0,0,0,413,416,1,0,0,0,414,412,1,0,0,0,414,415,1,0,0,0,415,417,1,0,0,0,
416,414,1,0,0,0,417,418,3,44,22,0,418,422,5,2,0,0,419,421,5,28,0,0,420,419,
1,0,0,0,421,424,1,0,0,0,422,420,1,0,0,0,422,423,1,0,0,0,423,425,1,0,0,0,
424,422,1,0,0,0,425,426,3,54,27,0,426,37,1,0,0,0,427,429,5,16,0,0,428,430,
5,28,0,0,429,428,1,0,0,0,430,431,1,0,0,0,431,429,1,0,0,0,431,432,1,0,0,0,
432,433,1,0,0,0,433,434,3,44,22,0,434,438,5,2,0,0,435,437,5,28,0,0,436,435,
1,0,0,0,437,440,1,0,0,0,438,436,1,0,0,0,438,439,1,0,0,0,439,441,1,0,0,0,
440,438,1,0,0,0,441,442,3,44,22,0,442,446,5,2,0,0,443,445,5,28,0,0,444,443,
1,0,0,0,445,448,1,0,0,0,446,444,1,0,0,0,446,447,1,0,0,0,447,449,1,0,0,0,
448,446,1,0,0,0,449,450,3,54,27,0,450,39,1,0,0,0,451,453,5,17,0,0,452,454,
5,28,0,0,453,452,1,0,0,0,454,455,1,0,0,0,455,453,1,0,0,0,455,456,1,0,0,0,
456,457,1,0,0,0,457,458,3,44,22,0,458,462,5,2,0,0,459,461,5,28,0,0,460,459,
1,0,0,0,461,464,1,0,0,0,462,460,1,0,0,0,462,463,1,0,0,0,463,465,1,0,0,0,
464,462,1,0,0,0,465,466,3,44,22,0,466,470,5,2,0,0,467,469,5,28,0,0,468,467,
1,0,0,0,469,472,1,0,0,0,470,468,1,0,0,0,470,471,1,0,0,0,471,473,1,0,0,0,
472,470,1,0,0,0,473,474,3,54,27,0,474,41,1,0,0,0,475,477,5,18,0,0,476,478,
5,28,0,0,477,476,1,0,0,0,478,479,1,0,0,0,479,477,1,0,0,0,479,480,1,0,0,0,
480,481,1,0,0,0,481,482,3,44,22,0,482,486,5,2,0,0,483,485,5,28,0,0,484,483,
1,0,0,0,485,488,1,0,0,0,486,484,1,0,0,0,486,487,1,0,0,0,487,489,1,0,0,0,
488,486,1,0,0,0,489,490,3,44,22,0,490,494,5,2,0,0,491,493,5,28,0,0,492,491,
1,0,0,0,493,496,1,0,0,0,494,492,1,0,0,0,494,495,1,0,0,0,495,497,1,0,0,0,
496,494,1,0,0,0,497,498,3,54,27,0,498,43,1,0,0,0,499,500,5,23,0,0,500,45,
1,0,0,0,501,502,7,0,0,0,502,47,1,0,0,0,503,504,5,26,0,0,504,49,1,0,0,0,505,
506,3,46,23,0,506,507,5,19,0,0,507,508,3,44,22,0,508,509,5,20,0,0,509,51,
1,0,0,0,510,511,5,24,0,0,511,512,5,21,0,0,512,53,1,0,0,0,513,514,5,24,0,
0,514,55,1,0,0,0,53,59,76,82,105,111,118,127,134,143,150,158,167,174,182,
191,198,206,215,222,230,239,246,254,263,270,278,287,294,302,311,318,326,
335,342,350,359,366,374,383,390,398,407,414,422,431,438,446,455,462,470,
479,486,494];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class uriscvParser extends antlr4.Parser {

    static grammarFileName = "uriscv.g4";
    static literalNames = [ null, "'LW'", "','", "'SW'", "'SUB'", "'ADD'", 
                            "'ADDI'", "'SLT'", "'SLTI'", "'SLL'", "'SLLI'", 
                            "'AND'", "'ANDI'", "'OR'", "'ORI'", "'BEQ'", 
                            "'BNE'", "'BLT'", "'BGE'", "'('", "')'", "':'", 
                            "'.word'" ];
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(uriscvParser.WORD_DIRECTIVE);
	        this.state = 80; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 79;
	            this.match(uriscvParser.WS);
	            this.state = 82; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	        this.state = 84;
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
	        this.state = 86;
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
	        this.state = 105;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 88;
	            this.lw();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 89;
	            this.sw();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 90;
	            this.sub();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 91;
	            this.add();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 92;
	            this.addi();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 93;
	            this.slt();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 94;
	            this.slti();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 95;
	            this.sll();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 96;
	            this.slli();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 97;
	            this.andInstr();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 98;
	            this.andi();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 99;
	            this.orInstr();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 100;
	            this.ori();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 101;
	            this.beq();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 102;
	            this.bne();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 103;
	            this.blt();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 104;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(uriscvParser.T__0);
	        this.state = 109; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 108;
	            this.match(uriscvParser.WS);
	            this.state = 111; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	        this.state = 113;
	        this.register();
	        this.state = 114;
	        this.match(uriscvParser.T__1);
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 115;
	            this.match(uriscvParser.WS);
	            this.state = 120;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 121;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(uriscvParser.T__2);
	        this.state = 125; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 124;
	            this.match(uriscvParser.WS);
	            this.state = 127; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	        this.state = 129;
	        this.register();
	        this.state = 130;
	        this.match(uriscvParser.T__1);
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 131;
	            this.match(uriscvParser.WS);
	            this.state = 136;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 137;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this.match(uriscvParser.T__3);
	        this.state = 141; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 140;
	            this.match(uriscvParser.WS);
	            this.state = 143; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	        this.state = 145;
	        this.register();
	        this.state = 146;
	        this.match(uriscvParser.T__1);
	        this.state = 150;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 147;
	            this.match(uriscvParser.WS);
	            this.state = 152;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 153;
	        this.register();
	        this.state = 154;
	        this.match(uriscvParser.T__1);
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 155;
	            this.match(uriscvParser.WS);
	            this.state = 160;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 161;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.match(uriscvParser.T__4);
	        this.state = 165; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 164;
	            this.match(uriscvParser.WS);
	            this.state = 167; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	        this.state = 169;
	        this.register();
	        this.state = 170;
	        this.match(uriscvParser.T__1);
	        this.state = 174;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 171;
	            this.match(uriscvParser.WS);
	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 177;
	        this.register();
	        this.state = 178;
	        this.match(uriscvParser.T__1);
	        this.state = 182;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 179;
	            this.match(uriscvParser.WS);
	            this.state = 184;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 185;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.match(uriscvParser.T__5);
	        this.state = 189; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 188;
	            this.match(uriscvParser.WS);
	            this.state = 191; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	        this.state = 193;
	        this.register();
	        this.state = 194;
	        this.match(uriscvParser.T__1);
	        this.state = 198;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 195;
	            this.match(uriscvParser.WS);
	            this.state = 200;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 201;
	        this.register();
	        this.state = 202;
	        this.match(uriscvParser.T__1);
	        this.state = 206;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 203;
	            this.match(uriscvParser.WS);
	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 209;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 211;
	        this.match(uriscvParser.T__6);
	        this.state = 213; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 212;
	            this.match(uriscvParser.WS);
	            this.state = 215; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	        this.state = 217;
	        this.register();
	        this.state = 218;
	        this.match(uriscvParser.T__1);
	        this.state = 222;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 219;
	            this.match(uriscvParser.WS);
	            this.state = 224;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 225;
	        this.register();
	        this.state = 226;
	        this.match(uriscvParser.T__1);
	        this.state = 230;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 227;
	            this.match(uriscvParser.WS);
	            this.state = 232;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 233;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this.match(uriscvParser.T__7);
	        this.state = 237; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 236;
	            this.match(uriscvParser.WS);
	            this.state = 239; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	        this.state = 241;
	        this.register();
	        this.state = 242;
	        this.match(uriscvParser.T__1);
	        this.state = 246;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 243;
	            this.match(uriscvParser.WS);
	            this.state = 248;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 249;
	        this.register();
	        this.state = 250;
	        this.match(uriscvParser.T__1);
	        this.state = 254;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 251;
	            this.match(uriscvParser.WS);
	            this.state = 256;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 257;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this.match(uriscvParser.T__8);
	        this.state = 261; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 260;
	            this.match(uriscvParser.WS);
	            this.state = 263; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	        this.state = 265;
	        this.register();
	        this.state = 266;
	        this.match(uriscvParser.T__1);
	        this.state = 270;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 267;
	            this.match(uriscvParser.WS);
	            this.state = 272;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 273;
	        this.register();
	        this.state = 274;
	        this.match(uriscvParser.T__1);
	        this.state = 278;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 275;
	            this.match(uriscvParser.WS);
	            this.state = 280;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 281;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.match(uriscvParser.T__9);
	        this.state = 285; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 284;
	            this.match(uriscvParser.WS);
	            this.state = 287; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	        this.state = 289;
	        this.register();
	        this.state = 290;
	        this.match(uriscvParser.T__1);
	        this.state = 294;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 291;
	            this.match(uriscvParser.WS);
	            this.state = 296;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 297;
	        this.register();
	        this.state = 298;
	        this.match(uriscvParser.T__1);
	        this.state = 302;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 299;
	            this.match(uriscvParser.WS);
	            this.state = 304;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 305;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        this.match(uriscvParser.T__10);
	        this.state = 309; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 308;
	            this.match(uriscvParser.WS);
	            this.state = 311; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	        this.state = 313;
	        this.register();
	        this.state = 314;
	        this.match(uriscvParser.T__1);
	        this.state = 318;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 315;
	            this.match(uriscvParser.WS);
	            this.state = 320;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 321;
	        this.register();
	        this.state = 322;
	        this.match(uriscvParser.T__1);
	        this.state = 326;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 323;
	            this.match(uriscvParser.WS);
	            this.state = 328;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 329;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        this.match(uriscvParser.T__11);
	        this.state = 333; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 332;
	            this.match(uriscvParser.WS);
	            this.state = 335; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	        this.state = 337;
	        this.register();
	        this.state = 338;
	        this.match(uriscvParser.T__1);
	        this.state = 342;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 339;
	            this.match(uriscvParser.WS);
	            this.state = 344;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 345;
	        this.register();
	        this.state = 346;
	        this.match(uriscvParser.T__1);
	        this.state = 350;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 347;
	            this.match(uriscvParser.WS);
	            this.state = 352;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 353;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 355;
	        this.match(uriscvParser.T__12);
	        this.state = 357; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 356;
	            this.match(uriscvParser.WS);
	            this.state = 359; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	        this.state = 361;
	        this.register();
	        this.state = 362;
	        this.match(uriscvParser.T__1);
	        this.state = 366;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 363;
	            this.match(uriscvParser.WS);
	            this.state = 368;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 369;
	        this.register();
	        this.state = 370;
	        this.match(uriscvParser.T__1);
	        this.state = 374;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 371;
	            this.match(uriscvParser.WS);
	            this.state = 376;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 377;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 379;
	        this.match(uriscvParser.T__13);
	        this.state = 381; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 380;
	            this.match(uriscvParser.WS);
	            this.state = 383; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	        this.state = 385;
	        this.register();
	        this.state = 386;
	        this.match(uriscvParser.T__1);
	        this.state = 390;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 387;
	            this.match(uriscvParser.WS);
	            this.state = 392;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 393;
	        this.register();
	        this.state = 394;
	        this.match(uriscvParser.T__1);
	        this.state = 398;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 395;
	            this.match(uriscvParser.WS);
	            this.state = 400;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 401;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 403;
	        this.match(uriscvParser.T__14);
	        this.state = 405; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 404;
	            this.match(uriscvParser.WS);
	            this.state = 407; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	        this.state = 409;
	        this.register();
	        this.state = 410;
	        this.match(uriscvParser.T__1);
	        this.state = 414;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 411;
	            this.match(uriscvParser.WS);
	            this.state = 416;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 417;
	        this.register();
	        this.state = 418;
	        this.match(uriscvParser.T__1);
	        this.state = 422;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 419;
	            this.match(uriscvParser.WS);
	            this.state = 424;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 425;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 427;
	        this.match(uriscvParser.T__15);
	        this.state = 429; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 428;
	            this.match(uriscvParser.WS);
	            this.state = 431; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	        this.state = 433;
	        this.register();
	        this.state = 434;
	        this.match(uriscvParser.T__1);
	        this.state = 438;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 435;
	            this.match(uriscvParser.WS);
	            this.state = 440;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 441;
	        this.register();
	        this.state = 442;
	        this.match(uriscvParser.T__1);
	        this.state = 446;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 443;
	            this.match(uriscvParser.WS);
	            this.state = 448;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 449;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 451;
	        this.match(uriscvParser.T__16);
	        this.state = 453; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 452;
	            this.match(uriscvParser.WS);
	            this.state = 455; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	        this.state = 457;
	        this.register();
	        this.state = 458;
	        this.match(uriscvParser.T__1);
	        this.state = 462;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 459;
	            this.match(uriscvParser.WS);
	            this.state = 464;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 465;
	        this.register();
	        this.state = 466;
	        this.match(uriscvParser.T__1);
	        this.state = 470;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 467;
	            this.match(uriscvParser.WS);
	            this.state = 472;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 473;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 475;
	        this.match(uriscvParser.T__17);
	        this.state = 477; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 476;
	            this.match(uriscvParser.WS);
	            this.state = 479; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	        this.state = 481;
	        this.register();
	        this.state = 482;
	        this.match(uriscvParser.T__1);
	        this.state = 486;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 483;
	            this.match(uriscvParser.WS);
	            this.state = 488;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 489;
	        this.register();
	        this.state = 490;
	        this.match(uriscvParser.T__1);
	        this.state = 494;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 491;
	            this.match(uriscvParser.WS);
	            this.state = 496;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 497;
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
	        this.state = 499;
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
	        this.state = 501;
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
	        this.state = 503;
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
	        this.state = 505;
	        this.immediate();
	        this.state = 506;
	        this.match(uriscvParser.T__18);
	        this.state = 507;
	        this.register();
	        this.state = 508;
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
	        this.state = 510;
	        this.match(uriscvParser.LABEL);
	        this.state = 511;
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
	        this.state = 513;
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

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(uriscvParser.WS);
	    } else {
	        return this.getToken(uriscvParser.WS, i);
	    }
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

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(uriscvParser.WS);
	    } else {
	        return this.getToken(uriscvParser.WS, i);
	    }
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

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(uriscvParser.WS);
	    } else {
	        return this.getToken(uriscvParser.WS, i);
	    }
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

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(uriscvParser.WS);
	    } else {
	        return this.getToken(uriscvParser.WS, i);
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

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(uriscvParser.WS);
	    } else {
	        return this.getToken(uriscvParser.WS, i);
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

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(uriscvParser.WS);
	    } else {
	        return this.getToken(uriscvParser.WS, i);
	    }
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

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(uriscvParser.WS);
	    } else {
	        return this.getToken(uriscvParser.WS, i);
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

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(uriscvParser.WS);
	    } else {
	        return this.getToken(uriscvParser.WS, i);
	    }
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

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(uriscvParser.WS);
	    } else {
	        return this.getToken(uriscvParser.WS, i);
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

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(uriscvParser.WS);
	    } else {
	        return this.getToken(uriscvParser.WS, i);
	    }
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

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(uriscvParser.WS);
	    } else {
	        return this.getToken(uriscvParser.WS, i);
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

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(uriscvParser.WS);
	    } else {
	        return this.getToken(uriscvParser.WS, i);
	    }
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

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(uriscvParser.WS);
	    } else {
	        return this.getToken(uriscvParser.WS, i);
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

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(uriscvParser.WS);
	    } else {
	        return this.getToken(uriscvParser.WS, i);
	    }
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

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(uriscvParser.WS);
	    } else {
	        return this.getToken(uriscvParser.WS, i);
	    }
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

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(uriscvParser.WS);
	    } else {
	        return this.getToken(uriscvParser.WS, i);
	    }
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

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(uriscvParser.WS);
	    } else {
	        return this.getToken(uriscvParser.WS, i);
	    }
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

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(uriscvParser.WS);
	    } else {
	        return this.getToken(uriscvParser.WS, i);
	    }
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

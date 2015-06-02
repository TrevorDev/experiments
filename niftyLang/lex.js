/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex

%%
\s+                   /* skip whitespace */
"var"                 return getToken('VAR');
[0-9]+("."[0-9]+)?\b  return getToken('NUMBER');

"*"                   return getToken('*');
"/"                   return getToken('/');
"-"                   return getToken('-');
"+"                   return getToken('+');
"^"                   return getToken('^');

"("                   return getToken('(');
")"                   return getToken(')');
"["                   return getToken('[');
"]"                   return getToken(']');
"{"                   return getToken('{');
"}"                   return getToken('}');

[a-zA-Z]+             return getToken('STRING');
<<EOF>>               return getToken('EOF');

/lex

/* operator associations and precedence */

%left '+' '-'
%left '*' '/'
%left '^'
%left UMINUS

%start expressions

%% /* language grammar */

expressions
    : e EOF
        {return $1;}
    ;

e
    : e '+' e
        {$$ = $1+$3;}
    | e '-' e
        {$$ = $1-$3;}
    | e '*' e
        {$$ = $1*$3;}
    | e '/' e
        {$$ = $1/$3;}
    | e '^' e
        {$$ = Math.pow($1, $3);}
    | '-' e %prec UMINUS
        {$$ = -$2;}
    | '(' e ')'
        {$$ = $2;}
    | NUMBER
        {$$ = Number(yytext);}
    ;

%%

var indentDepth = 0
var debug = 1

var getToken = function(t){
    if(debug){
        console.log(t)
    }
    return t
}
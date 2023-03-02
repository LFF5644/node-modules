module.exports={//	Allow to change Cursor Position!
	changePosition:(line,column)=>"\033["+(line||1)+";"+(column||1)+"f",
	savePosition:"\033[s",
	loadPosition:"\033[u",
	clear:"\033[2J",
	up:count=>"\033["+(count||1)+"A",
	down:count=>"\033["+(count||1)+"B",
	forward:count=>"\033["+(count||1)+"C",
	backward:count=>"\033["+(count||1)+"D",
};

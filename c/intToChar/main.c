#include <string.h>
#include <stdio.h>

#define __TESTE__ 100

int main () {
	char buffer[17] = "<some characters>";
	char c;
	c = sprintf(buffer, "%d", __TESTE__);
	printf("\n%c", c);
	return 0;
}

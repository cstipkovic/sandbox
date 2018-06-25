#include <stdio.h>
#include <omp.h>

int main() {
	#pragma omp parallel sections
	{
		#pragma omp section 
		{
			for (int i = 0; i < 1000; i++) {
				printf("%d\n", i);
			}	
		}

		#pragma omp section
		{
			for (int j = 0; j < 1000; j++) {
				printf("%d\n", j);
			}
		}
	}
	return 0;
}

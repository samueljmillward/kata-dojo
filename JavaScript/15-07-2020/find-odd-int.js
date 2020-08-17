// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    for (i = 0; i < A.length; i++) {
        var count = 0;
        for (j = 0; j < A.length; j++) {
            if (A[i] == A[j])
                count++;
        }
        if (count % 2 != 0)
            return A[i];
    }

    return 0;
}
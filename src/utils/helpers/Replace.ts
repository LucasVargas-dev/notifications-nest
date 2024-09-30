/* 
Exporta um tipo Replace que é uma helper function que recebe dois tipos genéricos 
    T (tipagem original / props) e 
    R (tipagem replace / props que serão substituídas)
e retorna um novo tipo que é a união de T e R.
*/

export type Replace<T, R> = Omit<T, keyof R> & R;
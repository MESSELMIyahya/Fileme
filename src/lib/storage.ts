


// free storage size 

const freeStorageSize = 500 // => 500mb



// function to calc the sizes 

type SizesType = 'GB' | 'MB' | 'TB' ;

function calcSize (num:number,t:SizesType){
    const m = t == 'GB' ? (1024 ** 3) : t == 'TB' ? (1024 ** 4) : (1024 ** 2);


    return (num * m) 
}


export { calcSize,freeStorageSize }
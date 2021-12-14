

let x1 = 5;


let x2 = 24;

let c = (x1 >>> 0).toString(2) // unnry 32 bit deya se last sonkha gula dekiya deyca deyaca ar gula computer dekabe nha  

c = "00000000000000000000000000000000".substr(c.length)

    + c





console.log(c);



// y = x1<<15; // left << shipt a kaj kore se unnry 32 sonkha gulo bame thke  kata suro kore  dan a  jay 

// ar >> ringt shipt left ulto ta kaj kore

// ar right >>>  kaj 3 ta valou pore jay 3 ta valou kata jay 


y = x1 >>> 2;



c = (y >>> 0).toString(2)

c = "00000000000000000000000000000000".substr(c.length)

    + c




console.log(c)

// const hi =() =>{
//     console.log("Hi Tasin, Assalamu Alaikum")
// }

// const ahi =(name) =>{
//     console.log("Hi" + name)
// }

// module.exports = {hi, ahi}; // Same as below line
// // module.exports = {hi:hi, Ahi:Ahi};

// ES6 Modules

export const hi = () => {
    console.log("Hi Tasin, Assalamu Walaikum")
}

export const ahi = (name) => {
    console.log("Hi"+ name)
}

const tasin = () => {
    console.log("Hi" + "Tasin")
}
export default tasin;